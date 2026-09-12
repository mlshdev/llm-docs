> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4argumenttabledescriptor/supportattributestrides](https://developer.apple.com/documentation/metal/mtl4argumenttabledescriptor/supportattributestrides)

# supportAttributeStrides (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls whether Metal should reserve memory for attribute strides in the argument table.

## Declaration

```swift
var supportAttributeStrides: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set this value to true if you intend to provide dynamic attribute strides when binding vertex array buffers to the argument table by calling [setAddress(\_:attributeStride:index:)](../mtl4argumenttable/setaddress%28__attributestride_index_%29.md)

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

# supportAttributeStrides (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Controls whether Metal should reserve memory for attribute strides in the argument table.

## Declaration

```objectivec
@property (nonatomic, readwrite) BOOL supportAttributeStrides;
```

<a id="discussion"></a>

## Discussion

Set this value to true if you intend to provide dynamic attribute strides when binding vertex array buffers to the argument table by calling [setAddress:attributeStride:atIndex:](../mtl4argumenttable/setaddress%28__attributestride_index_%29.md)

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).
