> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axobservercallback](https://developer.apple.com/documentation/applicationservices/axobservercallback)

# AXObserverCallback (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+

## Declaration

```swift
typealias AXObserverCallback = (AXObserver, AXUIElement, CFString, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `observer`: An AXObserverRef object to observe the notifications.
- `element`: The accessibility object.
- `notification`: The name of the notification to observe.
- `refcon`: Application-defined data specified when registering the observer for notification

## See Also

### Callbacks

- [AXObserverCallbackWithInfo](axobservercallbackwithinfo.md)

# AXObserverCallback (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.2+

## Declaration

```objectivec
typedef void (*AXObserverCallback)(AXObserverRef observer, AXUIElementRef element, CFStringRef notification, void *refcon);
```

## Parameters

- `observer`: An AXObserverRef object to observe the notifications.
- `element`: The accessibility object.
- `notification`: The name of the notification to observe.
- `refcon`: Application-defined data specified when registering the observer for notification

## See Also

### Callbacks

- [AXObserverCallbackWithInfo](axobservercallbackwithinfo.md)
