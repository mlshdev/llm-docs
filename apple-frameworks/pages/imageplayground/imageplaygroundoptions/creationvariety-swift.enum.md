> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundoptions/creationvariety-swift.enum](https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/creationvariety-swift.enum)

# ImagePlaygroundOptions.CreationVariety

**Framework:** Image Playground  
**Kind:** Enumeration  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

Options that specify how much variety to use when creating multiple images from the same concepts.

## Declaration

```swift
enum CreationVariety
```

<a id="overview"></a>

## Overview

When you generate multiple images, use this type to specify how much to adjust the creation parameters for each image. The amount of variability determines how similar each image is to the others. These options apply only when creating multiple images at the same time.

## Topics

### Enumeration Cases

- [ImagePlaygroundOptions.CreationVariety.automatic](creationvariety-swift.enum/automatic.md): An option to programmatically determine how much variety to use when creating images.
- [ImagePlaygroundOptions.CreationVariety.high](creationvariety-swift.enum/high.md): An option to use a lot of variety when creating images.
- [ImagePlaygroundOptions.CreationVariety.low](creationvariety-swift.enum/low.md): An option to use a low amount of variety when creating images.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
