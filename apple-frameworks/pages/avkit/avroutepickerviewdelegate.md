> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avroutepickerviewdelegate](https://developer.apple.com/documentation/avkit/avroutepickerviewdelegate)

# AVRoutePickerViewDelegate (Swift)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

A protocol that defines the methods to adopt to respond to route picker view presentation events.

## Declaration

```swift
protocol AVRoutePickerViewDelegate : NSObjectProtocol
```

## Topics

### Presenting Routes

- [routePickerViewWillBeginPresentingRoutes(\_:)](avroutepickerviewdelegate/routepickerviewwillbeginpresentingroutes%28__%29.md): Tells the delegate that the route picker view is about to begin presenting routes to the user.
- [routePickerViewDidEndPresentingRoutes(\_:)](avroutepickerviewdelegate/routepickerviewdidendpresentingroutes%28__%29.md): Tells the delegate when the route picker view finishes presenting routes to the user.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the delegate

- [delegate](avroutepickerview/delegate.md): The delegate object for the route picker.

# AVRoutePickerViewDelegate (Objective-C)

**Framework:** AVKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 11.0+

A protocol that defines the methods to adopt to respond to route picker view presentation events.

## Declaration

```objectivec
@protocol AVRoutePickerViewDelegate <NSObject>
```

## Topics

### Presenting Routes

- [routePickerViewWillBeginPresentingRoutes:](avroutepickerviewdelegate/routepickerviewwillbeginpresentingroutes%28__%29.md): Tells the delegate that the route picker view is about to begin presenting routes to the user.
- [routePickerViewDidEndPresentingRoutes:](avroutepickerviewdelegate/routepickerviewdidendpresentingroutes%28__%29.md): Tells the delegate when the route picker view finishes presenting routes to the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the delegate

- [delegate](avroutepickerview/delegate.md): The delegate object for the route picker.
