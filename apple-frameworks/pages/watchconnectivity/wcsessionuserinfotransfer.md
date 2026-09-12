> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionuserinfotransfer](https://developer.apple.com/documentation/watchconnectivity/wcsessionuserinfotransfer)

# WCSessionUserInfoTransfer (Swift)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Information about in-progress data transfers.

## Declaration

```swift
class WCSessionUserInfoTransfer
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. When you begin a data transfer, the system creates a new instance of this class for you. Use the created object to monitor or cancel the transfer as needed.

To initiate a file transfer operation, call the [transferUserInfo(\_:)](wcsession/transferuserinfo%28__%29.md) or [transferCurrentComplicationUserInfo(\_:)](wcsession/transfercurrentcomplicationuserinfo%28__%29.md) method of your app’s [WCSession](wcsession.md) object.

## Topics

### Getting the Transfer Information

- [isCurrentComplicationInfo](wcsessionuserinfotransfer/iscurrentcomplicationinfo.md): A Boolean indicating whether the data is related to the app’s complication.
- [userInfo](wcsessionuserinfotransfer/userinfo.md): The data being transferred.

### Managing the Transfer Operation

- [isTransferring](wcsessionuserinfotransfer/istransferring.md): A Boolean value indicating whether the data is still being transferred.
- [cancel()](wcsessionuserinfotransfer/cancel%28%29.md): Cancels the data transfer.

### Initializers

- [init(coder:)](wcsessionuserinfotransfer/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [WCSessionFile](wcsessionfile.md): Information about a file currently being transferred between an iOS app and WatchKit extension.
- [WCSessionFileTransfer](wcsessionfiletransfer.md): Information about in-progress file transfers.

# WCSessionUserInfoTransfer (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 2.0+

Information about in-progress data transfers.

## Declaration

```objectivec
@interface WCSessionUserInfoTransfer : NSObject
```

<a id="overview"></a>

## Overview

You don’t create instances of this class yourself. When you begin a data transfer, the system creates a new instance of this class for you. Use the created object to monitor or cancel the transfer as needed.

To initiate a file transfer operation, call the [transferUserInfo:](wcsession/transferuserinfo%28__%29.md) or [transferCurrentComplicationUserInfo:](wcsession/transfercurrentcomplicationuserinfo%28__%29.md) method of your app’s [WCSession](wcsession.md) object.

## Topics

### Getting the Transfer Information

- [currentComplicationInfo](wcsessionuserinfotransfer/iscurrentcomplicationinfo.md): A Boolean indicating whether the data is related to the app’s complication.
- [userInfo](wcsessionuserinfotransfer/userinfo.md): The data being transferred.

### Managing the Transfer Operation

- [transferring](wcsessionuserinfotransfer/istransferring.md): A Boolean value indicating whether the data is still being transferred.
- [cancel](wcsessionuserinfotransfer/cancel%28%29.md): Cancels the data transfer.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Data Objects

- [WCSessionFile](wcsessionfile.md): Information about a file currently being transferred between an iOS app and WatchKit extension.
- [WCSessionFileTransfer](wcsessionfiletransfer.md): Information about in-progress file transfers.
