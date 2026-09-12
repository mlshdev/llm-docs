> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionfile](https://developer.apple.com/documentation/watchconnectivity/wcsessionfile)

# WCSessionFile (Swift)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Information about a file currently being transferred between an iOS app and WatchKit extension.

## Declaration

```swift
class WCSessionFile
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. When you initiate a file transfer using the [transferFile(\_:metadata:)](wcsession/transferfile%28__metadata_%29.md)  method of your app’s [WCSession](wcsession.md) object, the session creates an instance when it queues the file for transfer. You can get a list of in-progress transfers initiated by your app from the session’s [outstandingFileTransfers](wcsession/outstandingfiletransfers.md) property. When a file is received by your app, the corresponding file object is delivered directly to your session’s delegate.

The file object includes the URL of the file on the local system and an optional dictionary of keys and values that accompany the file.

## Topics

### Getting the File Information

- [fileURL](wcsessionfile/fileurl.md): The URL of the file that was received.
- [metadata](wcsessionfile/metadata.md): A dictionary of additional information that was sent with the file.

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

- [WCSessionFileTransfer](wcsessionfiletransfer.md): Information about in-progress file transfers.
- [WCSessionUserInfoTransfer](wcsessionuserinfotransfer.md): Information about in-progress data transfers.

# WCSessionFile (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Information about a file currently being transferred between an iOS app and WatchKit extension.

## Declaration

```objectivec
@interface WCSessionFile : NSObject
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. When you initiate a file transfer using the [transferFile:metadata:](wcsession/transferfile%28__metadata_%29.md)  method of your app’s [WCSession](wcsession.md) object, the session creates an instance when it queues the file for transfer. You can get a list of in-progress transfers initiated by your app from the session’s [outstandingFileTransfers](wcsession/outstandingfiletransfers.md) property. When a file is received by your app, the corresponding file object is delivered directly to your session’s delegate.

The file object includes the URL of the file on the local system and an optional dictionary of keys and values that accompany the file.

## Topics

### Getting the File Information

- [fileURL](wcsessionfile/fileurl.md): The URL of the file that was received.
- [metadata](wcsessionfile/metadata.md): A dictionary of additional information that was sent with the file.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Data Objects

- [WCSessionFileTransfer](wcsessionfiletransfer.md): Information about in-progress file transfers.
- [WCSessionUserInfoTransfer](wcsessionuserinfotransfer.md): Information about in-progress data transfers.
