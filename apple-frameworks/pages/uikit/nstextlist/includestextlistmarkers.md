> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/nstextlist/includestextlistmarkers

# includesTextListMarkers (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether TextKit includes text list markers in the text content.

## Declaration

```swift
class var includesTextListMarkers: Bool { get }
```

<a id="Overview"></a>

## Overview

The default value is [false](https://developer.apple.com/documentation/swift/false). When [true](https://developer.apple.com/documentation/swift/true), TextKit includes text list markers in the text content.

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextList.MarkerFormat](markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.
- [marker(forItemNumber:)](marker%28foritemnumber_%29.md): Returns the computed value for a specific ordinal position in the list.

# includesTextListMarkers (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A Boolean value that indicates whether TextKit includes text list markers in the text content.

## Declaration

```objectivec
@property (class, readonly) BOOL includesTextListMarkers;
```

<a id="Overview"></a>

## Overview

The default value is [false](https://developer.apple.com/documentation/swift/false). When [true](https://developer.apple.com/documentation/swift/true), TextKit includes text list markers in the text content.

## See Also

### Working with markers

- [markerFormat](markerformat-swift.property.md): Returns the marker format string used by the receiver.
- [NSTextListMarkerFormat](markerformat-swift.struct.md): Constants that describe marker symbols you can apply to list elements in text lists.
- [markerForItemNumber:](marker%28foritemnumber_%29.md): Returns the computed value for a specific ordinal position in the list.
