// UTF-16 code-unit comparison (`<`/`>`) misorders astral characters (emoji,
// CJK extensions) relative to surrogate escapes. Comparing code points keeps
// ordering stable and locale-independent for every consumer.
export function compareCodePoints(left: string, right: string): number {
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    const leftPoint = left.codePointAt(leftIndex)!;
    const rightPoint = right.codePointAt(rightIndex)!;
    if (leftPoint !== rightPoint) {
      return leftPoint < rightPoint ? -1 : 1;
    }
    leftIndex += leftPoint > 0xffff ? 2 : 1;
    rightIndex += rightPoint > 0xffff ? 2 : 1;
  }
  const leftRemaining = left.length - leftIndex;
  const rightRemaining = right.length - rightIndex;
  return leftRemaining < rightRemaining
    ? -1
    : leftRemaining > rightRemaining
      ? 1
      : 0;
}
