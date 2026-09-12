> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1461244-axobservergettypeid](https://developer.apple.com/documentation/applicationservices/1461244-axobservergettypeid)

# AXObserverGetTypeID() (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Returns the unique type identifier for the AXObserverRef type.

## Declaration

```swift
func AXObserverGetTypeID() -> CFTypeID
```

<a id="return_value"></a>

## Return Value

Returns the CFTypeID of the AXObserverRef type.

## See Also

### Notification API

- [AXObserverAddNotification(\_:\_:\_:\_:)](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate(\_:\_:\_:)](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback(\_:\_:\_:)](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetRunLoopSource(\_:)](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverRemoveNotification(\_:\_:\_:)](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.

# AXObserverGetTypeID (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Returns the unique type identifier for the AXObserverRef type.

## Declaration

```objectivec
CFTypeID AXObserverGetTypeID(void);
```

<a id="return_value"></a>

## Return Value

Returns the CFTypeID of the AXObserverRef type.

## See Also

### Notification API

- [AXObserverAddNotification](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetRunLoopSource](1459139-axobservergetrunloopsource.md): Returns the observer's run loop source.
- [AXObserverRemoveNotification](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.
