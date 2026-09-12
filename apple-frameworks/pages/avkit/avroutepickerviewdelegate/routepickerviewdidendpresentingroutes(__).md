> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerviewdelegate/routepickerviewdidendpresentingroutes(_:)](https://developer.apple.com/documentation/avkit/avroutepickerviewdelegate/routepickerviewdidendpresentingroutes(_:))

# routePickerViewDidEndPresentingRoutes(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

Tells the delegate when the route picker view finishes presenting routes to the user.

## Declaration

```swift
optional func routePickerViewDidEndPresentingRoutes(_ routePickerView: AVRoutePickerView)
```

## Parameters

- `routePickerView`: The route picker view.

## See Also

### Presenting Routes

- [routePickerViewWillBeginPresentingRoutes(\_:)](routepickerviewwillbeginpresentingroutes%28__%29.md): Tells the delegate that the route picker view is about to begin presenting routes to the user.

# routePickerViewDidEndPresentingRoutes: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

Tells the delegate when the route picker view finishes presenting routes to the user.

## Declaration

```objectivec
- (void) routePickerViewDidEndPresentingRoutes:(AVRoutePickerView *) routePickerView;
```

## Parameters

- `routePickerView`: The route picker view.

## See Also

### Presenting Routes

- [routePickerViewWillBeginPresentingRoutes:](routepickerviewwillbeginpresentingroutes%28__%29.md): Tells the delegate that the route picker view is about to begin presenting routes to the user.
