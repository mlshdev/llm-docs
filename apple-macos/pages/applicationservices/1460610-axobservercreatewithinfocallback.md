> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1460610-axobservercreatewithinfocallback](https://developer.apple.com/documentation/applicationservices/1460610-axobservercreatewithinfocallback)

# AXObserverCreateWithInfoCallback(\_:\_:\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.9+

Creates a new observer that can receive notifications with an information dictionary from the specified application.

## Declaration

```swift
func AXObserverCreateWithInfoCallback(_ application: pid_t, _ callback: AXObserverCallbackWithInfo, _ outObserver: UnsafeMutablePointer<AXObserver?>) -> AXError
```

## Parameters

- `application`: The process ID of the application.
- `callback`: The callback function.
- `outObserver`: On return, an AXObserverRef representing the observer object.

<a id="return_value"></a>

## Return Value

If unsuccessful, `AXObserverCreateWithInfoCallback` may return one of the following error codes, among others:

- **`kAXErrorIllegalArgument`**: One or more of the arguments is an illegal value.
- **`kAXErrorFailure`**: There is some sort of system memory failure.

<a id="discussion"></a>

## Discussion

When an observed notification is received, it is passed to [AXObserverCallbackWithInfo](axobservercallbackwithinfo.md).

## See Also

### Notification API

- [AXObserverAddNotification(\_:\_:\_:\_:)](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate(\_:\_:\_:)](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverGetRunLoopSource(\_:)](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverGetTypeID()](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification(\_:\_:\_:)](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.

# AXObserverCreateWithInfoCallback (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.9+

Creates a new observer that can receive notifications with an information dictionary from the specified application.

## Declaration

```objectivec
AXError AXObserverCreateWithInfoCallback(pid_t application, AXObserverCallbackWithInfo callback, AXObserverRef  _Nullable *outObserver);
```

## Parameters

- `application`: The process ID of the application.
- `callback`: The callback function.
- `outObserver`: On return, an AXObserverRef representing the observer object.

<a id="return_value"></a>

## Return Value

If unsuccessful, `AXObserverCreateWithInfoCallback` may return one of the following error codes, among others:

- **`kAXErrorIllegalArgument`**: One or more of the arguments is an illegal value.
- **`kAXErrorFailure`**: There is some sort of system memory failure.

<a id="discussion"></a>

## Discussion

When an observed notification is received, it is passed to [AXObserverCallbackWithInfo](axobservercallbackwithinfo.md).

## See Also

### Notification API

- [AXObserverAddNotification](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverGetRunLoopSource](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverGetTypeID](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.
