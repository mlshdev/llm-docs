> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avkit/avroutepickerviewdelegate

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

### Presenting routes

- [routePickerViewWillBeginPresentingRoutes(\_:)](avroutepickerviewdelegate/routepickerviewwillbeginpresentingroutes%28__%29.md): Tells the delegate that the route picker view is about to begin presenting routes to the user.
- [routePickerViewDidEndPresentingRoutes(\_:)](avroutepickerviewdelegate/routepickerviewdidendpresentingroutes%28__%29.md): Tells the delegate when the route picker view finishes presenting routes to the user.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Route selection

- [AVRoutePickerView](avroutepickerview.md): A view that presents a list of nearby media receivers.
- [AVRoutePickerViewButtonStyle](avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.

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

### Presenting routes

- [routePickerViewWillBeginPresentingRoutes:](avroutepickerviewdelegate/routepickerviewwillbeginpresentingroutes%28__%29.md): Tells the delegate that the route picker view is about to begin presenting routes to the user.
- [routePickerViewDidEndPresentingRoutes:](avroutepickerviewdelegate/routepickerviewdidendpresentingroutes%28__%29.md): Tells the delegate when the route picker view finishes presenting routes to the user.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Route selection

- [AVRoutePickerView](avroutepickerview.md): A view that presents a list of nearby media receivers.
- [AVRoutePickerViewButtonStyle](avroutepickerviewbuttonstyle.md): Constants that define the button styles a route picker view supports.
- [AVAudioSessionRouteSelection](avaudiosessionrouteselection.md): Constants that indicate the audio route selection.
