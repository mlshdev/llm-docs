> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewdelegate/widgetsearchtermcleared(_:)

# widgetSearchTermCleared(\_:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that a user cleared the search field.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func widgetSearchTermCleared(_ controller: NCWidgetSearchViewController)
```

## Parameters

- `controller`: The widget’s search view controller.

<a id="Discussion"></a>

## Discussion

When the delegate receives this message, it should stop the current search.

## See Also

### Responding to User Choices

- [widgetSearch(\_:resultSelected:)](widgetsearch%28__resultselected_%29.md): Deprecated. Tells the delegate that a user chose the specified search result.

# widgetSearchTermCleared: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that a user cleared the search field.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetSearchTermCleared:(NCWidgetSearchViewController *) controller;
```

## Parameters

- `controller`: The widget’s search view controller.

<a id="Discussion"></a>

## Discussion

When the delegate receives this message, it should stop the current search.

## See Also

### Responding to User Choices

- [widgetSearch:resultSelected:](widgetsearch%28__resultselected_%29.md): Deprecated. Tells the delegate that a user chose the specified search result.
