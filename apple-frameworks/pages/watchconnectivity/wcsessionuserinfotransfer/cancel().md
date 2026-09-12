> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionuserinfotransfer/cancel()](https://developer.apple.com/documentation/watchconnectivity/wcsessionuserinfotransfer/cancel())

# cancel() (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Cancels the data transfer.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel a transfer before it completes. If the data has already been transferred, calling this method has no effect.

## See Also

### Managing the Transfer Operation

- [isTransferring](istransferring.md): A Boolean value indicating whether the data is still being transferred.

# cancel (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Cancels the data transfer.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel a transfer before it completes. If the data has already been transferred, calling this method has no effect.

## See Also

### Managing the Transfer Operation

- [transferring](istransferring.md): A Boolean value indicating whether the data is still being transferred.
