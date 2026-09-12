> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/hascontentpending](https://developer.apple.com/documentation/watchconnectivity/wcsession/hascontentpending)

# hasContentPending (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the session has more content to deliver.

## Declaration

```swift
var hasContentPending: Bool { get }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the session has received data in the background but has not yet delivered that data to the session’s delegate. The following methods send data in the background:

- [updateApplicationContext(\_:)](updateapplicationcontext%28__%29.md)
- [transferUserInfo(\_:)](transferuserinfo%28__%29.md)
- [transferCurrentComplicationUserInfo(\_:)](transfercurrentcomplicationuserinfo%28__%29.md)
- [transferFile(\_:metadata:)](transferfile%28__metadata_%29.md)

## See Also

### Transferring Files in the Background

- [transferFile(\_:metadata:)](transferfile%28__metadata_%29.md): Sends the specified file and optional dictionary to the counterpart.
- [outstandingFileTransfers](outstandingfiletransfers.md): An array of in-progress file transfers.

# hasContentPending (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

A Boolean value that indicates whether the session has more content to deliver.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL hasContentPending;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the session has received data in the background but has not yet delivered that data to the session’s delegate. The following methods send data in the background:

- [updateApplicationContext:error:](updateapplicationcontext%28__%29.md)
- [transferUserInfo:](transferuserinfo%28__%29.md)
- [transferCurrentComplicationUserInfo:](transfercurrentcomplicationuserinfo%28__%29.md)
- [transferFile:metadata:](transferfile%28__metadata_%29.md)

## See Also

### Transferring Files in the Background

- [transferFile:metadata:](transferfile%28__metadata_%29.md): Sends the specified file and optional dictionary to the counterpart.
- [outstandingFileTransfers](outstandingfiletransfers.md): An array of in-progress file transfers.
