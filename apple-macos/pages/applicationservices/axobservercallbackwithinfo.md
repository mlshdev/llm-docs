> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/axobservercallbackwithinfo](https://developer.apple.com/documentation/applicationservices/axobservercallbackwithinfo)

# AXObserverCallbackWithInfo (Swift)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.9+

## Declaration

```swift
typealias AXObserverCallbackWithInfo = (AXObserver, AXUIElement, CFString, CFDictionary, UnsafeMutableRawPointer?) -> Void
```

## Parameters

- `observer`: An AXObserverRef object to observe the notifications.
- `element`: The accessibility object.
- `notification`: The name of the notification to observe.
- `info`: The coresponding notification information.
- `refcon`: Application-defined data specified when registering the observer for notification

## See Also

### Callbacks

- [AXObserverCallback](axobservercallback.md)

# AXObserverCallbackWithInfo (Objective-C)

**Framework:** Application Services  
**Kind:** Type Alias  
**Availability:** macOS 10.9+

## Declaration

```objectivec
typedef void (*AXObserverCallbackWithInfo)(AXObserverRef observer, AXUIElementRef element, CFStringRef notification, CFDictionaryRef info, void *refcon);
```

## Parameters

- `observer`: An AXObserverRef object to observe the notifications.
- `element`: The accessibility object.
- `notification`: The name of the notification to observe.
- `info`: The coresponding notification information.
- `refcon`: Application-defined data specified when registering the observer for notification

## See Also

### Callbacks

- [AXObserverCallback](axobservercallback.md)
