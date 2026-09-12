> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionfiletransfer](https://developer.apple.com/documentation/watchconnectivity/wcsessionfiletransfer)

# WCSessionFileTransfer (Swift)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Information about in-progress file transfers.

## Declaration

```swift
class WCSessionFileTransfer
```

<a id="overview"></a>

## Overview

You do not create instances of this class yourself. When you initiate a file transfer, the system creates a new file transfer object to represent the transferred file. Use that object to get the file information or to cancel the transfer as needed.

To initiate a file transfer operation, call the [transferFile(\_:metadata:)](wcsession/transferfile%28__metadata_%29.md) method of your app’s [WCSession](wcsession.md) object.

## Topics

### Getting the File Information

- [file](wcsessionfiletransfer/file.md): The file being transferred.

### Managing the File Transfer

- [isTransferring](wcsessionfiletransfer/istransferring.md): A Boolean value indicating whether the file is still being transferred.
- [progress](wcsessionfiletransfer/progress.md): An object that tracks the progress of the file transfer.
- [cancel()](wcsessionfiletransfer/cancel%28%29.md): Cancels the file transfer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Data Objects

- [WCSessionFile](wcsessionfile.md): Information about a file currently being transferred between an iOS app and WatchKit extension.
- [WCSessionUserInfoTransfer](wcsessionuserinfotransfer.md): Information about in-progress data transfers.

# WCSessionFileTransfer (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Information about in-progress file transfers.

## Declaration

```objectivec
@interface WCSessionFileTransfer : NSObject
```

<a id="overview"></a>

## Overview

You do not create instances of this class yourself. When you initiate a file transfer, the system creates a new file transfer object to represent the transferred file. Use that object to get the file information or to cancel the transfer as needed.

To initiate a file transfer operation, call the [transferFile:metadata:](wcsession/transferfile%28__metadata_%29.md) method of your app’s [WCSession](wcsession.md) object.

## Topics

### Getting the File Information

- [file](wcsessionfiletransfer/file.md): The file being transferred.

### Managing the File Transfer

- [transferring](wcsessionfiletransfer/istransferring.md): A Boolean value indicating whether the file is still being transferred.
- [progress](wcsessionfiletransfer/progress.md): An object that tracks the progress of the file transfer.
- [cancel](wcsessionfiletransfer/cancel%28%29.md): Cancels the file transfer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Data Objects

- [WCSessionFile](wcsessionfile.md): Information about a file currently being transferred between an iOS app and WatchKit extension.
- [WCSessionUserInfoTransfer](wcsessionuserinfotransfer.md): Information about in-progress data transfers.
