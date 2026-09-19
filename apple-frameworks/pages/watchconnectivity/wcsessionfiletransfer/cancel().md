> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/watchconnectivity/wcsessionfiletransfer/cancel()

# cancel() (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Cancels the file transfer.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel a file transfer before it completes. If the file has already been transferred, calling this method has no effect.

## See Also

### Managing the File Transfer

- [isTransferring](istransferring.md): A Boolean value indicating whether the file is still being transferred.
- [progress](progress.md): An object that tracks the progress of the file transfer.

# cancel (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Cancels the file transfer.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

Use this method to cancel a file transfer before it completes. If the file has already been transferred, calling this method has no effect.

## See Also

### Managing the File Transfer

- [transferring](istransferring.md): A Boolean value indicating whether the file is still being transferred.
- [progress](progress.md): An object that tracks the progress of the file transfer.
