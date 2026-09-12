> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventmanager/seteventhandler(_:andselector:foreventclass:andeventid:)](https://developer.apple.com/documentation/foundation/nsappleeventmanager/seteventhandler(_:andselector:foreventclass:andeventid:))

# setEventHandler(\_:andSelector:forEventClass:andEventID:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers the Apple event handler specified by `handler` for the event specified by `eventClass` and `eventID`.

## Declaration

```swift
func setEventHandler(_ handler: Any, andSelector handleEventSelector: Selector, forEventClass eventClass: AEEventClass, andEventID eventID: AEEventID)
```

<a id="Discussion"></a>

## Discussion

If an event handler is already registered for the specified event class and event ID, removes it. The signature for `handler` should match the following:

```objc
- (void)handleAppleEvent:(NSAppleEventDescriptor *)event withReplyEvent: (NSAppleEventDescriptor *)replyEvent;
```

## See Also

### Working with event handlers

- [removeEventHandler(forEventClass:andEventID:)](removeeventhandler%28foreventclass_andeventid_%29.md): If an Apple event handler has been registered for the event specified by `eventClass` and `eventID`, removes it.

# setEventHandler:andSelector:forEventClass:andEventID: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Registers the Apple event handler specified by `handler` for the event specified by `eventClass` and `eventID`.

## Declaration

```objectivec
- (void) setEventHandler:(id) handler andSelector:(SEL) handleEventSelector forEventClass:(AEEventClass) eventClass andEventID:(AEEventID) eventID;
```

<a id="Discussion"></a>

## Discussion

If an event handler is already registered for the specified event class and event ID, removes it. The signature for `handler` should match the following:

```objc
- (void)handleAppleEvent:(NSAppleEventDescriptor *)event withReplyEvent: (NSAppleEventDescriptor *)replyEvent;
```

## See Also

### Working with event handlers

- [removeEventHandlerForEventClass:andEventID:](removeeventhandler%28foreventclass_andeventid_%29.md): If an Apple event handler has been registered for the event specified by `eventClass` and `eventID`, removes it.
