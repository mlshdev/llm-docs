> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/watchconnectivity/wcsession/remainingcomplicationuserinfotransfers](https://developer.apple.com/documentation/watchconnectivity/wcsession/remainingcomplicationuserinfotransfers)

# remainingComplicationUserInfoTransfers (Swift)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of remaining times you can send complication data from the iOS app to the WatchKit extension.

## Declaration

```swift
var remainingComplicationUserInfoTransfers: Int { get }
```

<a id="Discussion"></a>

## Discussion

The number of remaining times that you can call [transferCurrentComplicationUserInfo(\_:)](transfercurrentcomplicationuserinfo%28__%29.md) during the current day. If this property is set to 0, any additional calls to [transferCurrentComplicationUserInfo(\_:)](transfercurrentcomplicationuserinfo%28__%29.md) use [transferUserInfo(\_:)](transferuserinfo%28__%29.md) instead.

If the complication is on the active watch face, you are given 50 transfers a day. If the complication is not active, this property defaults to 0.

## See Also

### Updating Complication Data

- [transferCurrentComplicationUserInfo(\_:)](transfercurrentcomplicationuserinfo%28__%29.md): Sends complication-related data from the iOS app to the WatchKit extension.

# remainingComplicationUserInfoTransfers (Objective-C)

**Framework:** Watch Connectivity  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of remaining times you can send complication data from the iOS app to the WatchKit extension.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger remainingComplicationUserInfoTransfers;
```

<a id="Discussion"></a>

## Discussion

The number of remaining times that you can call [transferCurrentComplicationUserInfo:](transfercurrentcomplicationuserinfo%28__%29.md) during the current day. If this property is set to 0, any additional calls to [transferCurrentComplicationUserInfo:](transfercurrentcomplicationuserinfo%28__%29.md) use [transferUserInfo:](transferuserinfo%28__%29.md) instead.

If the complication is on the active watch face, you are given 50 transfers a day. If the complication is not active, this property defaults to 0.

## See Also

### Updating Complication Data

- [transferCurrentComplicationUserInfo:](transfercurrentcomplicationuserinfo%28__%29.md): Sends complication-related data from the iOS app to the WatchKit extension.
