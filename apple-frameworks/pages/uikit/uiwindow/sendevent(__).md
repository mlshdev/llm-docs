> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindow/sendevent(_:)](https://developer.apple.com/documentation/uikit/uiwindow/sendevent(_:))

# sendEvent(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dispatches the specified event to its views.

## Declaration

```swift
func sendEvent(_ event: UIEvent)
```

## Parameters

- `event`: The event to dispatch.

<a id="Discussion"></a>

## Discussion

The [UIApplication](../uiapplication.md) object calls this method to dispatch events to the window. Window objects dispatch touch events to the view in which the touch occurred, and dispatch other types of events to the most appropriate target object. You can call this method as needed in your app to dispatch custom events that you create. For example, you might call this method to dispatch a custom event to the window’s responder chain.

# sendEvent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Dispatches the specified event to its views.

## Declaration

```objectivec
- (void) sendEvent:(UIEvent *) event;
```

## Parameters

- `event`: The event to dispatch.

<a id="Discussion"></a>

## Discussion

The [UIApplication](../uiapplication.md) object calls this method to dispatch events to the window. Window objects dispatch touch events to the view in which the touch occurred, and dispatch other types of events to the most appropriate target object. You can call this method as needed in your app to dispatch custom events that you create. For example, you might call this method to dispatch a custom event to the window’s responder chain.
