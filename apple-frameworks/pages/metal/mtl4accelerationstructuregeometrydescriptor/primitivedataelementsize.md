> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4accelerationstructuregeometrydescriptor/primitivedataelementsize

# primitiveDataElementSize (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the size, in bytes, of the data for each primitive in the primitive data buffer [primitiveDataBuffer](primitivedatabuffer.md) references.

## Declaration

```swift
var primitiveDataElementSize: Int { get set }
```

<a id="discussion"></a>

## Discussion

This size needs to be at most [primitiveDataStride](primitivedatastride.md) in size and a multiple of 4 bytes.

This property defaults to 0 bytes.

# primitiveDataElementSize (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the size, in bytes, of the data for each primitive in the primitive data buffer [primitiveDataBuffer](primitivedatabuffer.md) references.

## Declaration

```objectivec
@property (nonatomic) NSUInteger primitiveDataElementSize;
```

<a id="discussion"></a>

## Discussion

This size needs to be at most [primitiveDataStride](primitivedatastride.md) in size and a multiple of 4 bytes.

This property defaults to 0 bytes.
