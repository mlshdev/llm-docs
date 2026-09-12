> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1462089-axobserveraddnotification](https://developer.apple.com/documentation/applicationservices/1462089-axobserveraddnotification)

# AXObserverAddNotification(\_:\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Registers the specified observer to receive notifications from the specified accessibility object.

## Declaration

```swift
func AXObserverAddNotification(_ observer: AXObserver, _ element: AXUIElement, _ notification: CFString, _ refcon: UnsafeMutableRawPointer?) -> AXError
```

## Parameters

- `observer`: The observer object created from a call to [AXObserverCreate(\_:\_:\_:)](1460133-axobservercreate.md).
- `element`: The accessibility object for which to observe notifications.
- `notification`: The name of the notification to observe.
- `refcon`: Application-defined data passed to the callback when it is called.

<a id="return_value"></a>

## Return Value

If unsuccessful, `AXObserverAddNotification` may return one of the following error codes, among others:

- **`kAXErrorInvalidUIElementObserver`**: The observer is not a valid AXObserverRef type.
- **`kAXErrorIllegalArgument`**: One or more of the arguments is an illegal value or the length of the notification name is greater than 1024.
- **`kAXErrorNotificationUnsupported`**: The accessibility object does not support notifications (note that the system-wide accessibility object does not support notifications).
- **`kAXErrorNotificationAlreadyRegistered`**: The notification has already been registered.
- **`kAXErrorCannotComplete`**: The function cannot complete because messaging has failed in some way.
- **`kAXErrorFailure`**: There is some sort of system memory failure.

## See Also

### Notification API

- [AXObserverCreate(\_:\_:\_:)](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback(\_:\_:\_:)](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetRunLoopSource(\_:)](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverGetTypeID()](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification(\_:\_:\_:)](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.

# AXObserverAddNotification (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Registers the specified observer to receive notifications from the specified accessibility object.

## Declaration

```objectivec
AXError AXObserverAddNotification(AXObserverRef observer, AXUIElementRef element, CFStringRef notification, void *refcon);
```

## Parameters

- `observer`: The observer object created from a call to [AXObserverCreate](1460133-axobservercreate.md).
- `element`: The accessibility object for which to observe notifications.
- `notification`: The name of the notification to observe.
- `refcon`: Application-defined data passed to the callback when it is called.

<a id="return_value"></a>

## Return Value

If unsuccessful, `AXObserverAddNotification` may return one of the following error codes, among others:

- **`kAXErrorInvalidUIElementObserver`**: The observer is not a valid AXObserverRef type.
- **`kAXErrorIllegalArgument`**: One or more of the arguments is an illegal value or the length of the notification name is greater than 1024.
- **`kAXErrorNotificationUnsupported`**: The accessibility object does not support notifications (note that the system-wide accessibility object does not support notifications).
- **`kAXErrorNotificationAlreadyRegistered`**: The notification has already been registered.
- **`kAXErrorCannotComplete`**: The function cannot complete because messaging has failed in some way.
- **`kAXErrorFailure`**: There is some sort of system memory failure.

## See Also

### Notification API

- [AXObserverCreate](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetRunLoopSource](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverGetTypeID](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.
