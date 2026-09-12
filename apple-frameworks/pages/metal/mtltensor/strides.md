> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensor/strides](https://developer.apple.com/documentation/metal/mtltensor/strides)

# strides (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An array of strides, in elements, one for each dimension of this tensor, if applicable.

## Declaration

```swift
var strides: MTLTensorExtents? { get }
```

<a id="discussion"></a>

## Discussion

This property is non-nil only for tensors created from a buffer.

# strides (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An array of strides, in elements, one for each dimension of this tensor, if applicable.

## Declaration

```objectivec
@property (readonly, nullable) MTLTensorExtents * strides;
```

<a id="discussion"></a>

## Discussion

This property is non-nil only for tensors created from a buffer.
