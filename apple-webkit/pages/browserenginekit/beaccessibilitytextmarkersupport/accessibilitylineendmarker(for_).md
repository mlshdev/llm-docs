> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitylineendmarker(for:)](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarkersupport/accessibilitylineendmarker(for:))

# accessibilityLineEndMarker(for:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the text marker that represents the end of the line that contains the given text marker.

## Declaration

```swift
func accessibilityLineEndMarker(for marker: BEAccessibilityTextMarker) -> BEAccessibilityTextMarker?
```

## Parameters

- `marker`: A text marker.

<a id="return-value"></a>

## Return Value

A text marker that represents the end of the line that contains `marker`, or `nil` if there isn’t one.

## See Also

### Text positions

- [accessibilityNextTextMarker(\_:)](accessibilitynexttextmarker%28__%29.md): Returns the text marker that follows the given text marker.
- [accessibilityPreviousTextMarker(\_:)](accessibilityprevioustextmarker%28__%29.md): Returns the text marker that precedes the given text marker.
- [accessibilityLineStartMarker(for:)](accessibilitylinestartmarker%28for_%29.md): Returns the text marker that represents the start of the line that contains the given text marker.
- [accessibilityMarker(for:)](accessibilitymarker%28for_%29.md): Returns the text marker at a point in the view’s coordinate system.
- [accessibilityTextMarker(forPosition:)](accessibilitytextmarker%28forposition_%29.md): Returns the text marker for the text at a given index in the element’s text.
- [BEAccessibilityTextMarker](../beaccessibilitytextmarker.md): An abstract class that represents a location in an element’s accessibility text.

# accessibilityLineEndMarkerForMarker: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

Returns the text marker that represents the end of the line that contains the given text marker.

## Declaration

```objectivec
- (BEAccessibilityTextMarker *) accessibilityLineEndMarkerForMarker:(BEAccessibilityTextMarker *) marker;
```

## Parameters

- `marker`: A text marker.

<a id="return-value"></a>

## Return Value

A text marker that represents the end of the line that contains `marker`, or `nil` if there isn’t one.

## See Also

### Text positions

- [accessibilityNextTextMarker:](accessibilitynexttextmarker%28__%29.md): Returns the text marker that follows the given text marker.
- [accessibilityPreviousTextMarker:](accessibilityprevioustextmarker%28__%29.md): Returns the text marker that precedes the given text marker.
- [accessibilityLineStartMarkerForMarker:](accessibilitylinestartmarker%28for_%29.md): Returns the text marker that represents the start of the line that contains the given text marker.
- [accessibilityMarkerForPoint:](accessibilitymarker%28for_%29.md): Returns the text marker at a point in the view’s coordinate system.
- [accessibilityTextMarkerForPosition:](accessibilitytextmarker%28forposition_%29.md): Returns the text marker for the text at a given index in the element’s text.
- [BEAccessibilityTextMarker](../beaccessibilitytextmarker.md): An abstract class that represents a location in an element’s accessibility text.
