> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturesynchronizeddatacollection/subscript(_:)](https://developer.apple.com/documentation/avfoundation/avcapturesynchronizeddatacollection/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Subscript  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Returns data captured by the specified capture output, using subscript syntax.

## Declaration

```swift
subscript(key: AVCaptureOutput) -> AVCaptureSynchronizedData? { get }
```

## Parameters

- `key`: The capture output for which to retrieve data.

<a id="return-value"></a>

## Return Value

A synchronized data object corresponding to the specified capture output.

<a id="Discussion"></a>

## Discussion

This call is equivalent to the [synchronizedData(for:)](synchronizeddata%28for_%29.md) method, but allows subscript syntax.

## See Also

### Accessing synchronized data

- [count](count.md): The number of synchronized data objects in the collection.
- [synchronizedData(for:)](synchronizeddata%28for_%29.md): Returns synchronized data captured by the specified capture output.

# objectForKeyedSubscript: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Returns data captured by the specified capture output, using subscript syntax.

## Declaration

```objectivec
- (AVCaptureSynchronizedData *) objectForKeyedSubscript:(AVCaptureOutput *) key;
```

## Parameters

- `key`: The capture output for which to retrieve data.

<a id="return-value"></a>

## Return Value

A synchronized data object corresponding to the specified capture output.

<a id="Discussion"></a>

## Discussion

This call is equivalent to the [synchronizedDataForCaptureOutput:](synchronizeddata%28for_%29.md) method, but allows subscript syntax.

## See Also

### Accessing synchronized data

- [count](count.md): The number of synchronized data objects in the collection.
- [synchronizedDataForCaptureOutput:](synchronizeddata%28for_%29.md): Returns synchronized data captured by the specified capture output.
