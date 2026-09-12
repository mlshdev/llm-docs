> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventmanager/removeeventhandler(foreventclass:andeventid:)](https://developer.apple.com/documentation/foundation/nsappleeventmanager/removeeventhandler(foreventclass:andeventid:))

# removeEventHandler(forEventClass:andEventID:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If an Apple event handler has been registered for the event specified by `eventClass` and `eventID`, removes it.

## Declaration

```swift
func removeEventHandler(forEventClass eventClass: AEEventClass, andEventID eventID: AEEventID)
```

<a id="Discussion"></a>

## Discussion

Otherwise does nothing.

## See Also

### Working with event handlers

- [setEventHandler(\_:andSelector:forEventClass:andEventID:)](seteventhandler%28__andselector_foreventclass_andeventid_%29.md): Registers the Apple event handler specified by `handler` for the event specified by `eventClass` and `eventID`.

# removeEventHandlerForEventClass:andEventID: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If an Apple event handler has been registered for the event specified by `eventClass` and `eventID`, removes it.

## Declaration

```objectivec
- (void) removeEventHandlerForEventClass:(AEEventClass) eventClass andEventID:(AEEventID) eventID;
```

<a id="Discussion"></a>

## Discussion

Otherwise does nothing.

## See Also

### Working with event handlers

- [setEventHandler:andSelector:forEventClass:andEventID:](seteventhandler%28__andselector_foreventclass_andeventid_%29.md): Registers the Apple event handler specified by `handler` for the event specified by `eventClass` and `eventID`.
