> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/beaccessibilitytextmarker](https://developer.apple.com/documentation/browserenginekit/beaccessibilitytextmarker)

# BEAccessibilityTextMarker (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

An abstract class that represents a location in an element’s accessibility text.

## Declaration

```swift
class BEAccessibilityTextMarker
```

<a id="overview"></a>

## Overview

Subclass `BEAccessibilityTextMarker` in your app to represent a location in the accessibility text of an element in the document object model (DOM). The system uses your implementation of [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md) to convert between accessibility text markers and locations in your app’s views, and doesn’t create instances of your subclass or access their data.

## Topics

### Initializers

- [init(coder:)](beaccessibilitytextmarker/init%28coder_%29.md)

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

### Text positions

- [accessibilityNextTextMarker(\_:)](beaccessibilitytextmarkersupport/accessibilitynexttextmarker%28__%29.md): Returns the text marker that follows the given text marker.
- [accessibilityPreviousTextMarker(\_:)](beaccessibilitytextmarkersupport/accessibilityprevioustextmarker%28__%29.md): Returns the text marker that precedes the given text marker.
- [accessibilityLineStartMarker(for:)](beaccessibilitytextmarkersupport/accessibilitylinestartmarker%28for_%29.md): Returns the text marker that represents the start of the line that contains the given text marker.
- [accessibilityLineEndMarker(for:)](beaccessibilitytextmarkersupport/accessibilitylineendmarker%28for_%29.md): Returns the text marker that represents the end of the line that contains the given text marker.
- [accessibilityMarker(for:)](beaccessibilitytextmarkersupport/accessibilitymarker%28for_%29.md): Returns the text marker at a point in the view’s coordinate system.
- [accessibilityTextMarker(forPosition:)](beaccessibilitytextmarkersupport/accessibilitytextmarker%28forposition_%29.md): Returns the text marker for the text at a given index in the element’s text.

# BEAccessibilityTextMarker (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Class  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · macOS · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

An abstract class that represents a location in an element’s accessibility text.

## Declaration

```objectivec
@interface BEAccessibilityTextMarker : NSObject
```

<a id="overview"></a>

## Overview

Subclass `BEAccessibilityTextMarker` in your app to represent a location in the accessibility text of an element in the document object model (DOM). The system uses your implementation of [BEAccessibilityTextMarkerSupport](beaccessibilitytextmarkersupport.md) to convert between accessibility text markers and locations in your app’s views, and doesn’t create instances of your subclass or access their data.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Text positions

- [accessibilityNextTextMarker:](beaccessibilitytextmarkersupport/accessibilitynexttextmarker%28__%29.md): Returns the text marker that follows the given text marker.
- [accessibilityPreviousTextMarker:](beaccessibilitytextmarkersupport/accessibilityprevioustextmarker%28__%29.md): Returns the text marker that precedes the given text marker.
- [accessibilityLineStartMarkerForMarker:](beaccessibilitytextmarkersupport/accessibilitylinestartmarker%28for_%29.md): Returns the text marker that represents the start of the line that contains the given text marker.
- [accessibilityLineEndMarkerForMarker:](beaccessibilitytextmarkersupport/accessibilitylineendmarker%28for_%29.md): Returns the text marker that represents the end of the line that contains the given text marker.
- [accessibilityMarkerForPoint:](beaccessibilitytextmarkersupport/accessibilitymarker%28for_%29.md): Returns the text marker at a point in the view’s coordinate system.
- [accessibilityTextMarkerForPosition:](beaccessibilitytextmarkersupport/accessibilitytextmarker%28forposition_%29.md): Returns the text marker for the text at a given index in the element’s text.
