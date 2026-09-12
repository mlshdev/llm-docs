> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddatacollection/synchronizeddata(for:)](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/synchronizeddata(for:))

# synchronizedData(for:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Returns synchronized data captured by the specified capture output.

## Declaration

```swift
func synchronizedData(for captureOutput: AVCaptureOutput) -> AVCaptureSynchronizedData?
```

## Parameters

- `captureOutput`: The capture output for which to retrieve data.

<a id="return-value"></a>

## Return Value

A synchronized data object corresponding to the specified capture output.

## See Also

### Accessing synchronized data

- [count](count.md): The number of synchronized data objects in the collection.
- [subscript(\_:)](subscript%28__%29.md): Returns data captured by the specified capture output, using subscript syntax.

# synchronizedDataForCaptureOutput: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Returns synchronized data captured by the specified capture output.

## Declaration

```objectivec
- (AVCaptureSynchronizedData *) synchronizedDataForCaptureOutput:(AVCaptureOutput *) captureOutput;
```

## Parameters

- `captureOutput`: The capture output for which to retrieve data.

<a id="return-value"></a>

## Return Value

A synchronized data object corresponding to the specified capture output.

## See Also

### Accessing synchronized data

- [count](count.md): The number of synchronized data objects in the collection.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns data captured by the specified capture output, using subscript syntax.
