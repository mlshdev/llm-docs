> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1459139-axobservergetrunloopsource](https://developer.apple.com/documentation/applicationservices/1459139-axobservergetrunloopsource)

# AXObserverGetRunLoopSource(\_:) (Swift)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Returns the observer's run loop source.

## Declaration

```swift
func AXObserverGetRunLoopSource(_ observer: AXObserver) -> CFRunLoopSource
```

## Parameters

- `observer`: The observer object (created from a call to [AXObserverCreate(\_:\_:\_:)](1460133-axobservercreate.md)) for which to get the run loop source.

<a id="return_value"></a>

## Return Value

Returns the CFRunLoopSourceRef of the observer; NIL if you pass NIL in `observer`.

<a id="discussion"></a>

## Discussion

The observer must be added to a run loop before it can receive notifications. Note that releasing the AXObserverRef automatically removes the run loop source from the run loop (you can also do this explicitly by calling [CFRunLoopRemoveSource(\_:\_:\_:)](https://developer.apple.com/documentation/corefoundation/cfrunloopremovesource%28_:_:_:%29)).

`AXObserverGetRunLoopSource` might be used in code in this way:

<a id="2556063"></a>

**Listing 1**

```occ
 
 CFRunLoopAddSource(CFRunLoopGetCurrent(), AXObserverGetRunLoopSource(observer), kCFRunLoopDefaultMode);
 
```

## See Also

### Notification API

- [AXObserverAddNotification(\_:\_:\_:\_:)](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate(\_:\_:\_:)](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback(\_:\_:\_:)](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetTypeID()](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification(\_:\_:\_:)](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.

# AXObserverGetRunLoopSource (Objective-C)

**Framework:** Application Services  
**Kind:** Function  
**Availability:** macOS 10.2+

Returns the observer's run loop source.

## Declaration

```objectivec
CFRunLoopSourceRef AXObserverGetRunLoopSource(AXObserverRef observer);
```

## Parameters

- `observer`: The observer object (created from a call to [AXObserverCreate](1460133-axobservercreate.md)) for which to get the run loop source.

<a id="return_value"></a>

## Return Value

Returns the CFRunLoopSourceRef of the observer; NIL if you pass NIL in `observer`.

<a id="discussion"></a>

## Discussion

The observer must be added to a run loop before it can receive notifications. Note that releasing the AXObserverRef automatically removes the run loop source from the run loop (you can also do this explicitly by calling [CFRunLoopRemoveSource](https://developer.apple.com/documentation/corefoundation/cfrunloopremovesource%28_:_:_:%29)).

`AXObserverGetRunLoopSource` might be used in code in this way:

<a id="2556063"></a>

**Listing 1**

```occ
 
 CFRunLoopAddSource(CFRunLoopGetCurrent(), AXObserverGetRunLoopSource(observer), kCFRunLoopDefaultMode);
 
```

## See Also

### Notification API

- [AXObserverAddNotification](1462089-axobserveraddnotification.md): Registers the specified observer to receive notifications from the specified accessibility object.
- [AXObserverCreate](1460133-axobservercreate.md): Creates a new observer that can receive notifications from the specified application.
- [AXObserverCreateWithInfoCallback](1460610-axobservercreatewithinfocallback.md): Creates a new observer that can receive notifications with an information dictionary from the specified application.
- [AXObserverGetTypeID](1461244-axobservergettypeid.md): Returns the unique type identifier for the AXObserverRef type.
- [AXObserverRemoveNotification](1462066-axobserverremovenotification.md): Removes the specified notification from the list of notifications the observer wants to receive from the accessibility object.
