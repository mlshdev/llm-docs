> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuregeometrydescriptor/primitivedatastride](https://developer.apple.com/documentation/metal/mtl4accelerationstructuregeometrydescriptor/primitivedatastride)

# primitiveDataStride (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defines the stride, in bytes, between each primitive’s data in the primitive data buffer [primitiveDataBuffer](primitivedatabuffer.md) references.

## Declaration

```swift
var primitiveDataStride: Int { get set }
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the stride is at least [primitiveDataElementSize](primitivedataelementsize.md) in size and a multiple of 4 bytes.

This property defaults to `0` bytes,  which indicates the stride is equal to [primitiveDataElementSize](primitivedataelementsize.md).

# primitiveDataStride (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Defines the stride, in bytes, between each primitive’s data in the primitive data buffer [primitiveDataBuffer](primitivedatabuffer.md) references.

## Declaration

```objectivec
@property (nonatomic) NSUInteger primitiveDataStride;
```

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the stride is at least [primitiveDataElementSize](primitivedataelementsize.md) in size and a multiple of 4 bytes.

This property defaults to `0` bytes,  which indicates the stride is equal to [primitiveDataElementSize](primitivedataelementsize.md).
