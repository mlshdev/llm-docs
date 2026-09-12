> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnrecognizedpointsobservation/keypointsmultiarray()](https://developer.apple.com/documentation/vision/vnrecognizedpointsobservation/keypointsmultiarray())

# keypointsMultiArray() (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the grouping of normalized point coordinates and confidence scores in a format compatible with Core ML.

## Declaration

```swift
func keypointsMultiArray() throws -> MLMultiArray
```

<a id="return-value"></a>

## Return Value

The key points converted to an [MLMultiArray](../../coreml/mlmultiarray.md).

# keypointsMultiArrayAndReturnError: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Retrieves the grouping of normalized point coordinates and confidence scores in a format compatible with Core ML.

## Declaration

```objectivec
- (MLMultiArray *) keypointsMultiArrayAndReturnError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The key points converted to an [MLMultiArray](../../coreml/mlmultiarray.md). On failure, this method returns `nil`.
