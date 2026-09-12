> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/indexbufferoffset](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecurvegeometrydescriptor/indexbufferoffset)

# indexBufferOffset (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the index data in the buffer.

## Declaration

```swift
var indexBufferOffset: Int { get set }
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the index data type you configure with the [indexType](indextype.md) property. You also need to align the offset to both the index type’s size and the platform’s buffer alignment requirement.

# indexBufferOffset (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The offset, in bytes, to the index data in the buffer.

## Declaration

```objectivec
@property (nonatomic) NSUInteger indexBufferOffset;
```

<a id="discussion"></a>

## Discussion

The offset needs to be a multiple of the index data type you configure with the [indexType](indextype.md) property. You also need to align the offset to both the index type’s size and the platform’s buffer alignment requirement.
