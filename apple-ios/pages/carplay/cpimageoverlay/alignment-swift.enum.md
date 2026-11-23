> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpimageoverlay/alignment-swift.enum

# CPImageOverlay.Alignment (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+

Constants that specify the placement of overlay images in a thumbnail.

## Declaration

```swift
enum Alignment
```

<a id="overview"></a>

## Overview

CarPlay displays overlays inside the bounds of the thumbnail image and along the top edge. The constants in this type specify whether the overlay aligns to the leading or trailing edges of the thumbnail or to the center.

## Topics

### Enumeration Cases

- [CPImageOverlay.Alignment.center](alignment-swift.enum/center.md): An option to align the overlay to the top center of the thumbnail.
- [CPImageOverlay.Alignment.leading](alignment-swift.enum/leading.md): An option to align the overlay to the top leading edge of the thumbnail.
- [CPImageOverlay.Alignment.trailing](alignment-swift.enum/trailing.md): An option to align the overlay to the top trailing edge of the thumbnail.

### Initializers

- [init(rawValue:)](alignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the overlay position

- [alignment](alignment-swift.property.md): The alignment of the overlay inside the top edge of the thumbnail.

# CPImageOverlayAlignment (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 14.0+

Constants that specify the placement of overlay images in a thumbnail.

## Declaration

```objectivec
enum CPImageOverlayAlignment : NSInteger;
```

<a id="overview"></a>

## Overview

CarPlay displays overlays inside the bounds of the thumbnail image and along the top edge. The constants in this type specify whether the overlay aligns to the leading or trailing edges of the thumbnail or to the center.

## Topics

### Enumeration Cases

- [CPImageOverlayAlignmentCenter](alignment-swift.enum/center.md): An option to align the overlay to the top center of the thumbnail.
- [CPImageOverlayAlignmentLeading](alignment-swift.enum/leading.md): An option to align the overlay to the top leading edge of the thumbnail.
- [CPImageOverlayAlignmentTrailing](alignment-swift.enum/trailing.md): An option to align the overlay to the top trailing edge of the thumbnail.

## See Also

### Getting the overlay position

- [alignment](alignment-swift.property.md): The alignment of the overlay inside the top edge of the thumbnail.
