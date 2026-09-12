> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/broadcast(_:shape:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/broadcast(_:shape:name:))

# broadcast(\_:shape:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a broadcast operation and returns the result tensor.

## Declaration

```swift
func broadcast(_ tensor: MPSGraphTensor, shape: [NSNumber], name: String?) -> MPSGraphTensor
```

## Parameters

- `tensor`: The tensor to be broadcasted
- `shape`: The shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Broadcasts values inside the tensor, starting from the trailing dimensions, to give it the correct shape. This is equivalent to the broadcasting for arithmetic operations when operands have different shapes.

# broadcastTensor:toShape:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

Creates a broadcast operation and returns the result tensor.

## Declaration

```objectivec
- (MPSGraphTensor *) broadcastTensor:(MPSGraphTensor *) tensor toShape:(MPSShape *) shape name:(NSString *) name;
```

## Parameters

- `tensor`: The tensor to be broadcasted
- `shape`: The shape of the result tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object

<a id="discussion"></a>

## Discussion

Broadcasts values inside the tensor, starting from the trailing dimensions, to give it the correct shape. This is equivalent to the broadcasting for arithmetic operations when operands have different shapes.
