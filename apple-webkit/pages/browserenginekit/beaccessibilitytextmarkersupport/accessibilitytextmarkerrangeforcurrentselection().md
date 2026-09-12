> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitytextmarkerrangeforcurrentselection()](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitytextmarkerrangeforcurrentselection())

# accessibilityTextMarkerRangeForCurrentSelection() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

The text marker range of the current selection.

## Declaration

```swift
func accessibilityTextMarkerRangeForCurrentSelection() -> BEAccessibilityTextMarker.Range?
```

<a id="discussion"></a>

## Discussion

If there’s no text selected in the element, return `nil`.

## See Also

### Text ranges

- [accessibilityBounds(for:)](accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange()](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRange(for:)](accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRange(for:)](accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarker.Range](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.

# accessibilityTextMarkerRangeForCurrentSelection (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

The text marker range of the current selection.

## Declaration

```objectivec
- (BEAccessibilityTextMarkerRange *) accessibilityTextMarkerRangeForCurrentSelection;
```

<a id="discussion"></a>

## Discussion

If there’s no text selected in the element, return `nil`.

## See Also

### Text ranges

- [accessibilityBoundsForTextMarkerRange:](accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange](accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForRange:](accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRangeForTextMarkerRange:](accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
- [BEAccessibilityTextMarkerRange](../beaccessibilitytextmarker/range.md): A class that represents a range in an element’s accessibility text.
