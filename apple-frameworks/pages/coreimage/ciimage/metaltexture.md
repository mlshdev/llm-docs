> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/metaltexture](https://developer.apple.com/documentation/coreimage/ciimage/metaltexture)

# metalTexture (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
var metalTexture: (any MTLTexture)? { get }
```

## See Also

### Instance Properties

- [contentHeadroom](contentheadroom.md): Returns the content headroom of the image.
- [isOpaque](isopaque.md): Returns YES if the image is known to have and alpha value of `1.0` over the entire image extent.

# metalTexture (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) id<MTLTexture> metalTexture;
```

## See Also

### Instance Properties

- [contentHeadroom](contentheadroom.md): Returns the content headroom of the image.
- [opaque](isopaque.md): Returns YES if the image is known to have and alpha value of `1.0` over the entire image extent.
