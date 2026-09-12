> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraph/placeholder(shape:name:)](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraph/placeholder(shape:name:))

# placeholder(shape:name:) (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a placeholder operation and returns the result tensor with the dataType of the placeholder tensor set to 32 bit float.

## Declaration

```swift
func placeholder(shape: [NSNumber]?, name: String?) -> MPSGraphTensor
```

## Parameters

- `shape`: The shape of the output tensor. A nil shape will result in an unranked tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.

# placeholderWithShape:name: (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Creates a placeholder operation and returns the result tensor with the dataType of the placeholder tensor set to 32 bit float.

## Declaration

```objectivec
- (MPSGraphTensor *) placeholderWithShape:(MPSShape *) shape name:(NSString *) name;
```

## Parameters

- `shape`: The shape of the output tensor. A nil shape will result in an unranked tensor.
- `name`: The name for the operation.

<a id="return-value"></a>

## Return Value

A valid MPSGraphTensor object.
