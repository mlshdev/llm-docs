> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsessionuserinfotransfer/iscurrentcomplicationinfo](https://developer.apple.com/documentation/watchconnectivity/wcsessionuserinfotransfer/iscurrentcomplicationinfo)

# isCurrentComplicationInfo (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the data is related to the app’s complication.

## Declaration

```swift
var isCurrentComplicationInfo: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) if you initiated the transfer using the [transferCurrentComplicationUserInfo(\_:)](../wcsession/transfercurrentcomplicationuserinfo%28__%29.md) method of the [WCSession](../wcsession.md) object or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Getting the Transfer Information

- [userInfo](userinfo.md): The data being transferred.

# currentComplicationInfo (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean indicating whether the data is related to the app’s complication.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCurrentComplicationInfo) BOOL currentComplicationInfo;
```

<a id="Discussion"></a>

## Discussion

This property is set to [true](https://developer.apple.com/documentation/swift/true) if you initiated the transfer using the [transferCurrentComplicationUserInfo:](../wcsession/transfercurrentcomplicationuserinfo%28__%29.md) method of the [WCSession](../wcsession.md) object or [false](https://developer.apple.com/documentation/swift/false) otherwise.

## See Also

### Getting the Transfer Information

- [userInfo](userinfo.md): The data being transferred.
