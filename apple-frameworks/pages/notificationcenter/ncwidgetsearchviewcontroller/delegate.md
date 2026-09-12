> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/notificationcenter/ncwidgetsearchviewcontroller/delegate](https://developer.apple.com/documentation/notificationcenter/ncwidgetsearchviewcontroller/delegate)

# delegate (Swift)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The search view controller’s delegate or `nil` if the receiver doesn’t have a delegate.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```swift
@IBOutlet weak var delegate: (any NCWidgetSearchViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

A search view controller’s delegate performs a search on the input term and updates the controller’s [searchResults](searchresults.md) property with the results.

## See Also

### Enabling Search

- [NCWidgetSearchViewDelegate](../ncwidgetsearchviewdelegate.md): Deprecated. The interface for enabling user searches in the search view controller of a macOS Today widget.

# delegate (Objective-C)

**Framework:** Notification Center  
**Kind:** Instance Property  
**Availability:** macOS 10.10+ (deprecated in 11.0)

The search view controller’s delegate or `nil` if the receiver doesn’t have a delegate.

> Use [WidgetKit](../../widgetkit.md) instead.

## Declaration

```objectivec
@property (weak, nullable) id<NCWidgetSearchViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

A search view controller’s delegate performs a search on the input term and updates the controller’s [searchResults](searchresults.md) property with the results.

## See Also

### Enabling Search

- [NCWidgetSearchViewDelegate](../ncwidgetsearchviewdelegate.md): Deprecated. The interface for enabling user searches in the search view controller of a macOS Today widget.
