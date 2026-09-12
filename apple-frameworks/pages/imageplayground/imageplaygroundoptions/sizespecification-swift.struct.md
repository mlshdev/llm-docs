> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageplayground/imageplaygroundoptions/sizespecification-swift.struct](https://developer.apple.com/documentation/imageplayground/imageplaygroundoptions/sizespecification-swift.struct)

# ImagePlaygroundOptions.SizeSpecification

**Framework:** Image Playground  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A type that specifies image size and aspect ratio information.

## Declaration

```swift
struct SizeSpecification
```

<a id="overview"></a>

## Overview

The Image Playground framework supports the creation of images with a finite set of sizes and aspect ratios. To request an image of a particular size, call the static [closest(to:)](sizespecification-swift.struct/closest%28to_%29.md) method to create an instance of this structure. That method creates a structure with a supported size that most closely matches the size information you provided. The method considers both the resolution and aspect ratio you specified.

Assign an instance of this structure to the [sizeSpecification](sizespecification-swift.property.md) property of your options, and use those options to generate your image.

## Topics

### Type Methods

- [closest(to:)](sizespecification-swift.struct/closest%28to_%29.md): Creates a new instance of this structure with a size value that best matches the specified size.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
