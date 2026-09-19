> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewdelegate/widgetsearch(_:resultselected:)

# widgetSearch(\_:resultSelected:) (Swift)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that a user chose the specified search result.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
func widgetSearch(_ controller: NCWidgetSearchViewController, resultSelected object: Any)
```

## Parameters

- `controller`: The widget’s search view controller.
- `object`: The object in the search view controller’s [searchResults](../ncwidgetsearchviewcontroller/searchresults.md) array that represents the search result chosen by the user.

<a id="Discussion"></a>

## Discussion

When this method returns, the search view controller is dismissed.

## See Also

### Responding to User Choices

- [widgetSearchTermCleared(\_:)](widgetsearchtermcleared%28__%29.md): Deprecated. Tells the delegate that a user cleared the search field.

# widgetSearch:resultSelected: (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Method  
**Availability:** macOS 10.10+ (deprecated in 11.0)

Tells the delegate that a user chose the specified search result.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
- (void) widgetSearch:(NCWidgetSearchViewController *) controller resultSelected:(id) object;
```

## Parameters

- `controller`: The widget’s search view controller.
- `object`: The object in the search view controller’s [searchResults](../ncwidgetsearchviewcontroller/searchresults.md) array that represents the search result chosen by the user.

<a id="Discussion"></a>

## Discussion

When this method returns, the search view controller is dismissed.

## See Also

### Responding to User Choices

- [widgetSearchTermCleared:](widgetsearchtermcleared%28__%29.md): Deprecated. Tells the delegate that a user cleared the search field.
