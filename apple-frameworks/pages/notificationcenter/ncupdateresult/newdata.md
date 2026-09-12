> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncupdateresult/newdata](https://developer.apple.com/documentation/notificationcenter/ncupdateresult/newdata)

# NCUpdateResult.newData (Swift)

**Framework:** Notification Center  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 8.0+ (deprecated in 14.0) · macOS 10.10+ (deprecated in 11.0)

The update resulted in new data to display.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
case newData
```

<a id="Discussion"></a>

## Discussion

When new data is available, the widget might have to update its layout.

## See Also

### Constants

- [NCUpdateResult.noData](nodata.md): Deprecated. The update did not result in any new data since the last update.
- [NCUpdateResult.failed](failed.md): Deprecated. The update attempt failed.

# NCUpdateResultNewData (Objective-C)

**Framework:** Notification Center  
**Kind:** Enumeration Case  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+

The update resulted in new data to display.

## Declaration

```objectivec
NCUpdateResultNewData
```

<a id="Discussion"></a>

## Discussion

When new data is available, the widget might have to update its layout.

## See Also

### Constants

- [NCUpdateResultNoData](nodata.md): Deprecated. The update did not result in any new data since the last update.
- [NCUpdateResultFailed](failed.md): Deprecated. The update attempt failed.
