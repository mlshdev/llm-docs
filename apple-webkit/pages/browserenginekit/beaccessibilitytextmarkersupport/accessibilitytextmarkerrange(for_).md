> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitytextmarkerrange(for:)](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitytextmarkerrange(for:))

# accessibilityTextMarkerRange(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the text marker range for the text in a given range.

## Declaration

```swift
func accessibilityTextMarkerRange(for range: NSRange) -> BEAccessibilityTextMarker.Range?
```

## Parameters

- `range`: A range of text in the element’s string.

<a id="return-value"></a>

## Return Value

The text marker range for the text in `range`, or `nil` if the method can’t calculate the range.

## See Also

### Text ranges

- [accessibilityBounds(for:)](accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange()](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection()](accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityRange(for:)](accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarker.Range](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.

# accessibilityTextMarkerRangeForRange: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the text marker range for the text in a given range.

## Declaration

```objectivec
- (BEAccessibilityTextMarkerRange *) accessibilityTextMarkerRangeForRange:(NSRange) range;
```

## Parameters

- `range`: A range of text in the element’s string.

<a id="return-value"></a>

## Return Value

The text marker range for the text in `range`, or `nil` if the method can’t calculate the range.

## See Also

### Text ranges

- [accessibilityBoundsForTextMarkerRange:](accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection](accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityRangeForTextMarkerRange:](accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarkerRange](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.
