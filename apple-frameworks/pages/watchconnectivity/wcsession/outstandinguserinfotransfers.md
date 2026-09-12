> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/outstandinguserinfotransfers](https://developer.apple.com/documentation/watchconnectivity/wcsession/outstandinguserinfotransfers)

# outstandingUserInfoTransfers (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 9.0+ · visionOS 1.0+ · watchOS 2.0+

An array of in-progress data transfers.

## Declaration

```swift
var outstandingUserInfoTransfers: [WCSessionUserInfoTransfer] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the [WCSessionUserInfoTransfer](../wcsessionuserinfotransfer.md) objects representing the data that you queued using the [transferUserInfo(\_:)](transferuserinfo%28__%29.md) or [transferCurrentComplicationUserInfo(\_:)](transfercurrentcomplicationuserinfo%28__%29.md) methods. Use the objects in this array to cancel specific data transfers.

## See Also

### Transferring Data in the Background

- [transferUserInfo(\_:)](transferuserinfo%28__%29.md): Sends the specified data dictionary to the counterpart.

# outstandingUserInfoTransfers (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 2.0+

An array of in-progress data transfers.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<WCSessionUserInfoTransfer *> * outstandingUserInfoTransfers;
```

<a id="Discussion"></a>

## Discussion

This property contains the [WCSessionUserInfoTransfer](../wcsessionuserinfotransfer.md) objects representing the data that you queued using the [transferUserInfo:](transferuserinfo%28__%29.md) or [transferCurrentComplicationUserInfo:](transfercurrentcomplicationuserinfo%28__%29.md) methods. Use the objects in this array to cancel specific data transfers.

## See Also

### Transferring Data in the Background

- [transferUserInfo:](transferuserinfo%28__%29.md): Sends the specified data dictionary to the counterpart.
