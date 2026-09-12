> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilityrange(for:)](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilityrange(for:))

# accessibilityRange(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the range for the text in a given accessibility marker range.

## Declaration

```swift
func accessibilityRange(for range: BEAccessibilityTextMarker.Range) -> NSRange
```

## Parameters

- `range`: A text marker range for text in the element’s string.

<a id="return-value"></a>

## Return Value

The range in the string for the text in `range`, or `(NSNotFound,0)` if the method can’t calculate the range.

## See Also

### Text ranges

- [accessibilityBounds(for:)](accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange()](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection()](accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRange(for:)](accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [BEAccessibilityTextMarker.Range](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.

# accessibilityRangeForTextMarkerRange: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the range for the text in a given accessibility marker range.

## Declaration

```objectivec
- (NSRange) accessibilityRangeForTextMarkerRange:(BEAccessibilityTextMarkerRange *) range;
```

## Parameters

- `range`: A text marker range for text in the element’s string.

<a id="return-value"></a>

## Return Value

The range in the string for the text in `range`, or `(NSNotFound,0)` if the method can’t calculate the range.

## See Also

### Text ranges

- [accessibilityBoundsForTextMarkerRange:](accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection](accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRangeForRange:](accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [BEAccessibilityTextMarkerRange](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.
