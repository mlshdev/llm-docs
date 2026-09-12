> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/vimage/convolutionkernel2d/init(values:size:)](https://developer.apple.com/documentation/accelerate/vimage/convolutionkernel2d/init(values:size:))

# init(values:size:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns a new convolution kernel structure with the size you specify.

## Declaration

```swift
init(values: [ComponentType], size: vImage.Size)
```

## Parameters

- `values`: The kernel weights or structuring element values that must contain `height * width` elements.
- `size`: The size of the kernel. The width and height of the kernel that must be a positive, odd numbers.

## See Also

### Initializers

- [init(values:width:height:)](init%28values_width_height_%29.md): Returns a new convolution kernel structure with the width and height you specify.
