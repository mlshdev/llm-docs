> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createml/mlstyletransfer/stylize(image:)](https://developer.apple.com/documentation/createml/mlstyletransfer/stylize(image:))

# stylize(image:)

**Framework:** Create ML  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 11.0+ · visionOS 1.0+

Applies the style the model learned to an image.

## Declaration

```swift
func stylize(image: CGImage) throws -> CGImage?
```

## Parameters

- `image`: An input image the model applies its style to.

<a id="return-value"></a>

## Return Value

An image of type `CGImage` stylized using style of the model.

<a id="discussion"></a>

## Discussion

> **Throws**

> `MLCreateError.generic` if stylization fails.
