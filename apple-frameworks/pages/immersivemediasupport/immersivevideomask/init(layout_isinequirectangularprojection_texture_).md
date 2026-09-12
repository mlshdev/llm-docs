> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/immersivemediasupport/immersivevideomask/init(layout:isinequirectangularprojection:texture:)](https://developer.apple.com/documentation/immersivemediasupport/immersivevideomask/init(layout:isinequirectangularprojection:texture:))

# init(layout:isInEquirectangularProjection:texture:)

**Framework:** Immersive Media Support  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.0+ · visionOS 26.0+

Creates an immersive video mask object.

## Declaration

```swift
init(layout: ImmersiveVideoMask.Layout, isInEquirectangularProjection: Bool, texture: any MTLTexture)
```

## Parameters

- `layout`: The layout of the mask within the texture. See [ImmersiveVideoMask.Layout](layout-swift.enum.md) for valid options.
- `isInEquirectangularProjection`: A Boolean value that indicates whether the generated mask texture is in equirectangular projection space.
- `texture`: The MTLTexture containing the mask ready for rendering.
