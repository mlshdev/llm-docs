> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsevent/isswipetrackingfromscrolleventsenabled](https://developer.apple.com/documentation/appkit/nsevent/isswipetrackingfromscrolleventsenabled)

# isSwipeTrackingFromScrollEventsEnabled (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether to track fluid swipe gestures using scroll events.

## Declaration

```swift
class var isSwipeTrackingFromScrollEventsEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If your app implements its own scrolling, or one of your responder objects tracks scroll wheel messages before they reach a scroll view, make sure the value of this property is [true](https://developer.apple.com/documentation/swift/true) before you call [trackSwipeEvent(options:dampenAmountThresholdMin:max:usingHandler:)](trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md) to handle the event. The system defines the value of this property based on user-level preferences.

If you use [NSScrollView](../nsscrollview.md) for your app’s scrolling behavior, you don’t need to check this property. Scroll views automatically account for this behavior.

## See Also

### Configuring swipe event behaviors

- [trackSwipeEvent(options:dampenAmountThresholdMin:max:usingHandler:)](trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md): Allows tracking and user interface feedback of scroll wheel events.
- [NSEvent.SwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.

# swipeTrackingFromScrollEventsEnabled (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether to track fluid swipe gestures using scroll events.

## Declaration

```objectivec
@property (class, readonly, getter=isSwipeTrackingFromScrollEventsEnabled) BOOL swipeTrackingFromScrollEventsEnabled;
```

<a id="Discussion"></a>

## Discussion

If your app implements its own scrolling, or one of your responder objects tracks scroll wheel messages before they reach a scroll view, make sure the value of this property is [true](https://developer.apple.com/documentation/swift/true) before you call [trackSwipeEventWithOptions:dampenAmountThresholdMin:max:usingHandler:](trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md) to handle the event. The system defines the value of this property based on user-level preferences.

If you use [NSScrollView](../nsscrollview.md) for your app’s scrolling behavior, you don’t need to check this property. Scroll views automatically account for this behavior.

## See Also

### Configuring swipe event behaviors

- [trackSwipeEventWithOptions:dampenAmountThresholdMin:max:usingHandler:](trackswipeevent%28options_dampenamountthresholdmin_max_usinghandler_%29.md): Allows tracking and user interface feedback of scroll wheel events.
- [NSEventSwipeTrackingOptions](swipetrackingoptions.md): Constants that specify swipe-tracking options.
