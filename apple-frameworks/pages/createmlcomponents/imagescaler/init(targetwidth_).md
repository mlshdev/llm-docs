> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagescaler/init(targetwidth:)](https://developer.apple.com/documentation/createmlcomponents/imagescaler/init(targetwidth:))

# init(targetWidth:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an image scaler transformer that preserves the aspect ratio.

## Declaration

```swift
init(targetWidth: Double)
```

## Parameters

- `targetWidth`: The target image width. It must be positive.

<a id="discussion"></a>

## Discussion

This transformer scales an image to match the `targetWidth` while preserving the aspect ratio.

## See Also

### Creating a transformer

- [init(targetSize:)](init%28targetsize_%29.md): Creates an image scaler transformer. This transformer is used to scale an image to the `targetSize`.
- [init(targetHeight:)](init%28targetheight_%29.md): Creates an image scaler transformer that preserves the aspect ratio.
