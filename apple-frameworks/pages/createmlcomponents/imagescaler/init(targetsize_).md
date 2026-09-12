> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagescaler/init(targetsize:)](https://developer.apple.com/documentation/createmlcomponents/imagescaler/init(targetsize:))

# init(targetSize:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Creates an image scaler transformer. This transformer is used to scale an image to the `targetSize`.

## Declaration

```swift
init(targetSize: CGSize)
```

## Parameters

- `targetSize`: The target image size. Both width and height must be positive.

## See Also

### Creating a transformer

- [init(targetHeight:)](init%28targetheight_%29.md): Creates an image scaler transformer that preserves the aspect ratio.
- [init(targetWidth:)](init%28targetwidth_%29.md): Creates an image scaler transformer that preserves the aspect ratio.
