> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/outstandingfiletransfers](https://developer.apple.com/documentation/watchconnectivity/wcsession/outstandingfiletransfers)

# outstandingFileTransfers (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of in-progress file transfers.

## Declaration

```swift
var outstandingFileTransfers: [WCSessionFileTransfer] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the [WCSessionFileTransfer](../wcsessionfiletransfer.md) objects representing the files that are queued for delivery but have not yet been delivered to the counterpart. You can use the objects to cancel specific file transfers.

## See Also

### Transferring Files in the Background

- [transferFile(\_:metadata:)](transferfile%28__metadata_%29.md): Sends the specified file and optional dictionary to the counterpart.
- [hasContentPending](hascontentpending.md): A Boolean value that indicates whether the session has more content to deliver.

# outstandingFileTransfers (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

An array of in-progress file transfers.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<WCSessionFileTransfer *> * outstandingFileTransfers;
```

<a id="Discussion"></a>

## Discussion

This property contains the [WCSessionFileTransfer](../wcsessionfiletransfer.md) objects representing the files that are queued for delivery but have not yet been delivered to the counterpart. You can use the objects to cancel specific file transfers.

## See Also

### Transferring Files in the Background

- [transferFile:metadata:](transferfile%28__metadata_%29.md): Sends the specified file and optional dictionary to the counterpart.
- [hasContentPending](hascontentpending.md): A Boolean value that indicates whether the session has more content to deliver.
