export const splitText = (text: string): string[] => {
    return text.split(" ");
  };

// src/utils/textUtils.ts

/**
 * Функция для разделения строки на две строки.
 * Если строка содержит пробел, она разделяется на две строки.
 * Если пробелов нет, строка возвращается в виде одной строки.
 * 
 * @param text - Исходная строка текста
 * @returns Массив из двух строк
 */
export const splitTextIntoLines = (text: string): [string, string] => {
    const parts = text.split(' ');
    
    if (parts.length <= 1) {
      // Если нет пробелов, возвращаем исходную строку как одну строку
      return [text, ''];
    }
  
    const midIndex = Math.floor(parts.length / 2);
    const firstLine = parts.slice(0, midIndex).join(' ');
    const secondLine = parts.slice(midIndex).join(' ');
  
    return [firstLine, secondLine];
  };
  