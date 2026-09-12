> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/imagecolortransformer/init(brightness:contrast:hue:saturation:)](https://developer.apple.com/documentation/createmlcomponents/imagecolortransformer/init(brightness:contrast:hue:saturation:))

# init(brightness:contrast:hue:saturation:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Creates an image color transformer.

## Declaration

```swift
init(brightness: Float? = nil, contrast: Float? = nil, hue: Float? = nil, saturation: Float? = nil)
```

## Parameters

- `brightness`: The brightness adjustment, between 0.0 and 1.0.
- `contrast`: The contrast adjustment, between 0.0 and 1.0.
- `hue`: The hue adjustment, between 0.0 and 1.0.
- `saturation`: The saturation adjustment, between 0.0 and 1.0.
