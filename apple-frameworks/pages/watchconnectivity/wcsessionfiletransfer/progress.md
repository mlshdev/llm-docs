> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionfiletransfer/progress](https://developer.apple.com/documentation/watchconnectivity/wcsessionfiletransfer/progress)

# progress (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

An object that tracks the progress of the file transfer.

## Declaration

```swift
var progress: Progress { get }
```

## See Also

### Managing the File Transfer

- [isTransferring](istransferring.md): A Boolean value indicating whether the file is still being transferred.
- [cancel()](cancel%28%29.md): Cancels the file transfer.

# progress (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

An object that tracks the progress of the file transfer.

## Declaration

```objectivec
@property (nonatomic, readonly) NSProgress * progress;
```

## See Also

### Managing the File Transfer

- [transferring](istransferring.md): A Boolean value indicating whether the file is still being transferred.
- [cancel](cancel%28%29.md): Cancels the file transfer.
