> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlmotionkeyframedata/buffer

# buffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The buffer that holds the geometry data.

## Declaration

```swift
var buffer: (any MTLBuffer)? { get set }
```

## See Also

### Specifying the keyframe data

- [offset](offset.md): The offset, in bytes, to the keyframe data.

# buffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

The buffer that holds the geometry data.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) id<MTLBuffer> buffer;
```

## See Also

### Specifying the keyframe data

- [offset](offset.md): The offset, in bytes, to the keyframe data.
