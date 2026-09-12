> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciimage/isopaque](https://developer.apple.com/documentation/coreimage/ciimage/isopaque)

# isOpaque (Swift)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns YES if the image is known to have and alpha value of `1.0` over the entire image extent.

## Declaration

```swift
var isOpaque: Bool { get }
```

## See Also

### Instance Properties

- [contentHeadroom](contentheadroom.md): Returns the content headroom of the image.
- [metalTexture](metaltexture.md)

# opaque (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+

Returns YES if the image is known to have and alpha value of `1.0` over the entire image extent.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isOpaque) BOOL opaque;
```

## See Also

### Instance Properties

- [contentHeadroom](contentheadroom.md): Returns the content headroom of the image.
- [metalTexture](metaltexture.md)
