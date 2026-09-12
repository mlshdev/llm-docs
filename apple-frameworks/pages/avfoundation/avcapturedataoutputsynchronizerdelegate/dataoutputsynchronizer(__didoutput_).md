> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedataoutputsynchronizerdelegate/dataoutputsynchronizer(_:didoutput:)](https://developer.apple.com/documentation/avfoundation/avcapturedataoutputsynchronizerdelegate/dataoutputsynchronizer(_:didoutput:))

# dataOutputSynchronizer(\_:didOutput:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Provides a collection of synchronized capture data to the delegate.

## Declaration

```swift
func dataOutputSynchronizer(_ synchronizer: AVCaptureDataOutputSynchronizer, didOutput synchronizedDataCollection: AVCaptureSynchronizedDataCollection)
```

## Parameters

- `synchronizer`: The synchronizer object delivering synchronized data.
- `synchronizedDataCollection`: A collection of data samples, one for each capture output governed by the data output synchronizer for which capture data is ready.

<a id="Discussion"></a>

## Discussion

Use the data collection’s [synchronizedData(for:)](../avcapturesynchronizeddatacollection/synchronizeddata%28for_%29.md) method (or equivalent [subscript(\_:)](../avcapturesynchronizeddatacollection/subscript%28__%29.md) operator) to retrieve the captured data corresponding to each capture output.

# dataOutputSynchronizer:didOutputSynchronizedDataCollection: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Provides a collection of synchronized capture data to the delegate.

## Declaration

```objectivec
- (void) dataOutputSynchronizer:(AVCaptureDataOutputSynchronizer *) synchronizer didOutputSynchronizedDataCollection:(AVCaptureSynchronizedDataCollection *) synchronizedDataCollection;
```

## Parameters

- `synchronizer`: The synchronizer object delivering synchronized data.
- `synchronizedDataCollection`: A collection of data samples, one for each capture output governed by the data output synchronizer for which capture data is ready.

<a id="Discussion"></a>

## Discussion

Use the data collection’s [synchronizedDataForCaptureOutput:](../avcapturesynchronizeddatacollection/synchronizeddata%28for_%29.md) method (or equivalent [objectForKeyedSubscript:](../avcapturesynchronizeddatacollection/subscript%28__%29.md) operator) to retrieve the captured data corresponding to each capture output.
