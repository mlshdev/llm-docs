> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsndarrayidentity/reshape(withsourcearray:shape:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsndarrayidentity/reshape(withsourcearray:shape:))

# reshape(withSourceArray:shape:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```swift
func reshape(withSourceArray sourceArray: MPSNDArray, shape: [NSNumber]) -> MPSNDArray?
```

## Parameters

- `sourceArray`: The source NDArray.
- `shape`: The new shape in Tensorflow dimension order.

<a id="return-value"></a>

## Return Value

A new array view of `sourceArray` is returned. Or `nil` If aliasing is not possible.

<a id="discussion"></a>

## Discussion

Do a reshape operation on the CPU.

# reshapeWithSourceArray:shape: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (MPSNDArray *) reshapeWithSourceArray:(MPSNDArray *) sourceArray shape:(MPSShape *) shape;
```

## Parameters

- `sourceArray`: The source NDArray.
- `shape`: The new shape in Tensorflow dimension order.

<a id="return-value"></a>

## Return Value

A new array view of `sourceArray` is returned. Or `nil` If aliasing is not possible.

<a id="discussion"></a>

## Discussion

Do a reshape operation on the CPU.
