> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarker/range](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarker/range)

# BEAccessibilityTextMarker.Range (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

A class that represents a range in an element’s accessibility text.

## Declaration

```swift
class Range
```

## Topics

### Range boundaries

- [startMarker](range/startmarker.md): The marker at the beginning of a range in an element’s accessibility text.
- [endMarker](range/endmarker.md): The marker at the end of a range in an element’s accessibility text.

### Initializers

- [init(coder:)](range/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Text ranges

- [accessibilityBounds(for:)](../beaccessibilitytextmarkersupport/accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange()](../beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection()](../beaccessibilitytextmarkersupport/accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRange(for:)](../beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRange(for:)](../beaccessibilitytextmarkersupport/accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.

# BEAccessibilityTextMarkerRange (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

A class that represents a range in an element’s accessibility text.

## Declaration

```objectivec
@interface BEAccessibilityTextMarkerRange : NSObject
```

## Topics

### Range boundaries

- [startMarker](range/startmarker.md): The marker at the beginning of a range in an element’s accessibility text.
- [endMarker](range/endmarker.md): The marker at the end of a range in an element’s accessibility text.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Text ranges

- [accessibilityBoundsForTextMarkerRange:](../beaccessibilitytextmarkersupport/accessibilitybounds%28for_%29.md): Calculates the bounding rectangle for a text range.
- [accessibilityTextMarkerRange](../beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28%29.md): The text marker range of the current element.
- [accessibilityTextMarkerRangeForCurrentSelection](../beaccessibilitytextmarkersupport/accessibilitytextmarkerrangeforcurrentselection%28%29.md): The text marker range of the current selection.
- [accessibilityTextMarkerRangeForRange:](../beaccessibilitytextmarkersupport/accessibilitytextmarkerrange%28for_%29.md): Returns the text marker range for the text in a given range.
- [accessibilityRangeForTextMarkerRange:](../beaccessibilitytextmarkersupport/accessibilityrange%28for_%29.md): Returns the range for the text in a given accessibility marker range.
