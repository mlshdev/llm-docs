> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/image/dynamicrange

# Image.DynamicRange

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The range of brightness that an image is allowed to draw.

## Declaration

```swift
struct DynamicRange
```

<a id="overview"></a>

## Overview

A high dynamic range image stores highlights brighter than white. Pass a value of this type to [allowedDynamicRange(\_:)](alloweddynamicrange%28__%29.md) to say how much of that extra brightness reaches the display:

```swift
Image("sunset")
    .allowedDynamicRange(.constrainedHigh)
```

Use [high](dynamicrange/high.md) when the image is the subject of the screen and you want it at full brightness. Prefer [constrainedHigh](dynamicrange/constrainedhigh.md) when the image appears next to an ordinary interface, because an unrestricted image can make the content around it look dim. [standard](dynamicrange/standard.md) holds the image to the same range as the rest of the interface.

## Topics

### Getting dynamic range values

- [standard](dynamicrange/standard.md): Restrict the image content dynamic range to the standard range.
- [high](dynamicrange/high.md): Allow image content to use an unrestricted extended range.
- [constrainedHigh](dynamicrange/constrainedhigh.md): Allow image content to use some extended range. This is appropriate for placing HDR content next to SDR content.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying dynamic range

- [allowedDynamicRange(\_:)](alloweddynamicrange%28__%29.md): Returns a new image configured with the specified allowed dynamic range.
- [allowedDynamicRange](../environmentvalues/alloweddynamicrange.md): The allowed dynamic range for the view, or nil.
