> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlindirectinstanceaccelerationstructuredescriptor/motiontransformbufferoffset

# motionTransformBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the descripton of the first motion transform.

## Declaration

```swift
var motionTransformBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of 64 bytes. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.

# motionTransformBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the descripton of the first motion transform.

## Declaration

```objectivec
@property (nonatomic) NSUInteger motionTransformBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of 64 bytes. Check the [Metal feature set tables (PDF)](https://developer.apple.com/metal/Metal-Feature-Set-Tables.pdf) for potential alignment restrictions.
