> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundoptions/creationstrategy-swift.enum](https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/creationstrategy-swift.enum)

# ImagePlaygroundOptions.CreationStrategy

**Framework:** Image Playground  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Options that specify the system strategy for preserving the original image content.

## Declaration

```swift
enum CreationStrategy
```

<a id="overview"></a>

## Overview

Use these options to specify how much you want the system to preserve the original image you provide.

## Topics

### Enumeration Cases

- [ImagePlaygroundOptions.CreationStrategy.automatic](creationstrategy-swift.enum/automatic.md): An option to let the system select the creation strategy.
- [ImagePlaygroundOptions.CreationStrategy.editExisting](creationstrategy-swift.enum/editexisting.md): An option to create an image that more closely resembles the original image, but also has the modifications you specify.
- [ImagePlaygroundOptions.CreationStrategy.generateNew](creationstrategy-swift.enum/generatenew.md): An option to create a brand new image, driven primarily by the specified concepts and loosely inspired by the input image.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
