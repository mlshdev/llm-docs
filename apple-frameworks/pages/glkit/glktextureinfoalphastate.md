> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/glkit/glktextureinfoalphastate](https://developer.apple.com/documentation/glkit/glktextureinfoalphastate)

# GLKTextureInfoAlphaState (Swift)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Values that describe the alpha information stored in a source image’s pixel data.

## Declaration

```swift
enum GLKTextureInfoAlphaState
```

## Topics

### Constants

- [GLKTextureInfoAlphaState.none](glktextureinfoalphastate/none.md): Indicates that the texture has no alpha information.
- [GLKTextureInfoAlphaState.nonPremultiplied](glktextureinfoalphastate/nonpremultiplied.md): Indicates that the color values in the texture were not premultiplied by the alpha value.
- [GLKTextureInfoAlphaState.premultiplied](glktextureinfoalphastate/premultiplied.md): Indicates that the color values in the texture have already been premultiplied by the alpha value.

### Initializers

- [init(rawValue:)](glktextureinfoalphastate/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [GLKTextureInfoOrigin](glktextureinfoorigin.md): The location of the origin in the original source image.

# GLKTextureInfoAlphaState (Objective-C)

**Framework:** GLKit  
**Kind:** Enumeration  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · macOS 10.8+ · tvOS 9.0+

Values that describe the alpha information stored in a source image’s pixel data.

## Declaration

```objectivec
enum GLKTextureInfoAlphaState : GLint;
```

## Topics

### Constants

- [GLKTextureInfoAlphaStateNone](glktextureinfoalphastate/none.md): Indicates that the texture has no alpha information.
- [GLKTextureInfoAlphaStateNonPremultiplied](glktextureinfoalphastate/nonpremultiplied.md): Indicates that the color values in the texture were not premultiplied by the alpha value.
- [GLKTextureInfoAlphaStatePremultiplied](glktextureinfoalphastate/premultiplied.md): Indicates that the color values in the texture have already been premultiplied by the alpha value.

## See Also

### Constants

- [GLKTextureInfoOrigin](glktextureinfoorigin.md): The location of the origin in the original source image.
