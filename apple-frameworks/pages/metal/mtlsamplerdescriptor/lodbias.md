> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlsamplerdescriptor/lodbias](https://developer.apple.com/documentation/metal/mtlsamplerdescriptor/lodbias)

# lodBias (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the level-of-detail (lod) bias when sampling from a texture.

## Declaration

```swift
var lodBias: Float { get set }
```

<a id="discussion"></a>

## Discussion

The property’s default value is `0.0f`. The precision format is `S4.6`, and the range is `[-16.0, 15.999]`.

# lodBias (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the level-of-detail (lod) bias when sampling from a texture.

## Declaration

```objectivec
@property (nonatomic) float lodBias;
```

<a id="discussion"></a>

## Discussion

The property’s default value is `0.0f`. The precision format is `S4.6`, and the range is `[-16.0, 15.999]`.
