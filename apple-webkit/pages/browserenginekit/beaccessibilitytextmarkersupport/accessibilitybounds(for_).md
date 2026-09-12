> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitybounds(for:)](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitybounds(for:))

# accessibilityBounds(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Calculates the bounding rectangle for a text range.

## Declaration

```swift
func accessibilityBounds(for range: BEAccessibilityTextMarker.Range) -> CGRect
```

## Parameters

- `range`: The text marker range.

<a id="return-value"></a>

## Return Value

The bounds in accessiblity space of the text range, or [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero) if the method can’t calculate the bounds.

## See Also

### Text ranges

- [accessibilityTextMarkerRange()](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection()](accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRange(for:)](accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRange(for:)](accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarker.Range](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.

# accessibilityBoundsForTextMarkerRange: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Calculates the bounding rectangle for a text range.

## Declaration

```objectivec
- (CGRect) accessibilityBoundsForTextMarkerRange:(BEAccessibilityTextMarkerRange *) range;
```

## Parameters

- `range`: The text marker range.

<a id="return-value"></a>

## Return Value

The bounds in accessiblity space of the text range, or [CGRectZero](https://developer.apple.com/documentation/coregraphics/cgrectzero) if the method can’t calculate the bounds.

## See Also

### Text ranges

- [accessibilityTextMarkerRange](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection](accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRangeForRange:](accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRangeForTextMarkerRange:](accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarkerRange](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.
