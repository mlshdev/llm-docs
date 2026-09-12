> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/performcommand(for:)-8btj0](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/performcommand(for:)-8btj0)

# performCommand(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Performs the command associated with the given event.

## Declaration

```swift
func performCommand(for event: NSEvent) -> Bool
```

## Parameters

- `event`: The event representing the user input.

<a id="return-value"></a>

## Return Value

Returns `YES` if a command corresponding to the event was found and performed, `NO` otherwise.

<a id="discussion"></a>

## Discussion

This method checks for a command corresponding to the provided event and performs it, if available. The app should use this method to perform any extension commands at an appropriate time in the app’s event handling, like in [sendEvent(\_:)](https://developer.apple.com/documentation/appkit/nsapplication/sendevent%28_:%29) of  [NSApplication](https://developer.apple.com/documentation/appkit/nsapplication) or  [sendEvent(\_:)](https://developer.apple.com/documentation/appkit/nswindow/sendevent%28_:%29) of  [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) subclasses.

# performCommandForEvent: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Performs the command associated with the given event.

## Declaration

```objectivec
- (BOOL) performCommandForEvent:(NSEvent *) event;
```

## Parameters

- `event`: The event representing the user input.

<a id="return-value"></a>

## Return Value

Returns `YES` if a command corresponding to the event was found and performed, `NO` otherwise.

<a id="discussion"></a>

## Discussion

This method checks for a command corresponding to the provided event and performs it, if available. The app should use this method to perform any extension commands at an appropriate time in the app’s event handling, like in [sendEvent:](https://developer.apple.com/documentation/appkit/nsapplication/sendevent%28_:%29) of  [NSApplication](https://developer.apple.com/documentation/appkit/nsapplication) or  [sendEvent:](https://developer.apple.com/documentation/appkit/nswindow/sendevent%28_:%29) of  [NSWindow](https://developer.apple.com/documentation/appkit/nswindow) subclasses.
