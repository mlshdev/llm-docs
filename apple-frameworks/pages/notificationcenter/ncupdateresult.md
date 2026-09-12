> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncupdateresult](https://developer.apple.com/documentation/notificationcenter/ncupdateresult)

# NCUpdateResult (Swift)

**Framework:** Notification Center  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

The result of updating a widget’s state.

> Use [WidgetKit](../widgetkit.md) instead.

## Declaration

```swift
enum NCUpdateResult
```

## Topics

### Constants

- [NCUpdateResult.newData](ncupdateresult/newdata.md): Deprecated. The update resulted in new data to display.
- [NCUpdateResult.noData](ncupdateresult/nodata.md): Deprecated. The update did not result in any new data since the last update.
- [NCUpdateResult.failed](ncupdateresult/failed.md): Deprecated. The update attempt failed.

### Initializers

- [init(rawValue:)](ncupdateresult/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Updating a Widget’s Contents

- [widgetPerformUpdate(completionHandler:)](ncwidgetproviding/widgetperformupdate%28completionhandler_%29.md): Deprecated. Called to give a widget an opportunity to update its contents.

# NCUpdateResult (Objective-C)

**Framework:** Notification Center  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+

The result of updating a widget’s state.

## Declaration

```objectivec
enum NCUpdateResult : NSUInteger;
```

## Topics

### Constants

- [NCUpdateResultNewData](ncupdateresult/newdata.md): Deprecated. The update resulted in new data to display.
- [NCUpdateResultNoData](ncupdateresult/nodata.md): Deprecated. The update did not result in any new data since the last update.
- [NCUpdateResultFailed](ncupdateresult/failed.md): Deprecated. The update attempt failed.

## See Also

### Updating a Widget’s Contents

- [widgetPerformUpdateWithCompletionHandler:](ncwidgetproviding/widgetperformupdate%28completionhandler_%29.md): Deprecated. Called to give a widget an opportunity to update its contents.
