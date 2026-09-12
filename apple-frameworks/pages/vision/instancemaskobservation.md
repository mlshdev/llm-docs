> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/instancemaskobservation](https://developer.apple.com/documentation/vision/instancemaskobservation)

# InstanceMaskObservation

**Framework:** Vision  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 27.0+

An observation that contains an instance mask that labels instances in the mask.

## Declaration

```swift
struct InstanceMaskObservation
```

## Topics

### Creating an observation

- [init(\_:)](instancemaskobservation/init%28__%29.md): Creates an instance mask observation.

### Inspecting an observation

- [RequestDescriptor](requestdescriptor.md): A type that describes the request and revision combination.

### Generating a mask

- [generateMask(for:)](instancemaskobservation/generatemask%28for_%29.md): Creates a low-resolution mask from the instances you specify.
- [generateMaskedImage(for:imageFrom:croppedToInstancesExtent:)](instancemaskobservation/generatemaskedimage%28for_imagefrom_croppedtoinstancesextent_%29.md): Creates a high-resolution image with everything except for the instances you specify masked out.
- [generateScaledMask(for:scaledToImageFrom:)](instancemaskobservation/generatescaledmask%28for_scaledtoimagefrom_%29.md): Creates a high-resolution mask representing a combination of the instances you specify.

### Getting instances

- [instanceAtPoint(\_:)](instancemaskobservation/instanceatpoint%28__%29.md): Returns an instance at the point you specify.
- [allInstances](instancemaskobservation/allinstances.md): The collection that contains all instances, excluding the background.
- [allInstancesMask](instancemaskobservation/allinstancesmask.md): The resulting mask that represents all instances.
- [PixelBufferObservation](pixelbufferobservation.md): An object that represents an image that an image-analysis request produces.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [VisionObservation](visionobservation.md)
