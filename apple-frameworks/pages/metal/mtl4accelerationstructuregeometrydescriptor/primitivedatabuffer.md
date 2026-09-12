> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuregeometrydescriptor/primitivedatabuffer](https://developer.apple.com/documentation/metal/mtl4accelerationstructuregeometrydescriptor/primitivedatabuffer)

# primitiveDataBuffer (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns optional buffer containing data to associate with each primitive in this geometry.

## Declaration

```swift
var primitiveDataBuffer: MTL4BufferRange { get set }
```

<a id="discussion"></a>

## Discussion

You can use zero as the buffer address in this buffer range.

# primitiveDataBuffer (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Assigns optional buffer containing data to associate with each primitive in this geometry.

## Declaration

```objectivec
@property (nonatomic) MTL4BufferRange primitiveDataBuffer;
```

<a id="discussion"></a>

## Discussion

You can use zero as the buffer address in this buffer range.
