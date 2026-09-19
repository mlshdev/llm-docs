> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avroutepickerviewdelegate/routepickerviewwillbeginpresentingroutes(_:)

# routePickerViewWillBeginPresentingRoutes(\_:) (Swift)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

Tells the delegate that the route picker view is about to begin presenting routes to the user.

## Declaration

```swift
optional func routePickerViewWillBeginPresentingRoutes(_ routePickerView: AVRoutePickerView)
```

## Parameters

- `routePickerView`: The route picker view.

## See Also

### Presenting routes

- [routePickerViewDidEndPresentingRoutes(\_:)](routepickerviewdidendpresentingroutes%28__%29.md): Tells the delegate when the route picker view finishes presenting routes to the user.

# routePickerViewWillBeginPresentingRoutes: (Objective-C)

**Framework:** AVKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

Tells the delegate that the route picker view is about to begin presenting routes to the user.

## Declaration

```objectivec
- (void) routePickerViewWillBeginPresentingRoutes:(AVRoutePickerView *) routePickerView;
```

## Parameters

- `routePickerView`: The route picker view.

## See Also

### Presenting routes

- [routePickerViewDidEndPresentingRoutes:](routepickerviewdidendpresentingroutes%28__%29.md): Tells the delegate when the route picker view finishes presenting routes to the user.
