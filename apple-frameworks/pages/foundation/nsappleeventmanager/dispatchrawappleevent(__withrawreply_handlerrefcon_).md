> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventmanager/dispatchrawappleevent(_:withrawreply:handlerrefcon:)](https://developer.apple.com/documentation/foundation/nsappleeventmanager/dispatchrawappleevent(_:withrawreply:handlerrefcon:))

# dispatchRawAppleEvent(\_:withRawReply:handlerRefCon:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Causes the Apple event specified by `theAppleEvent` to be dispatched to the appropriate Apple event handler, if one has been registered by calling [setEventHandler(\_:andSelector:forEventClass:andEventID:)](seteventhandler%28__andselector_foreventclass_andeventid_%29.md).

## Declaration

```swift
func dispatchRawAppleEvent(_ theAppleEvent: UnsafePointer<AppleEvent>, withRawReply theReply: UnsafeMutablePointer<AppleEvent>, handlerRefCon: SRefCon) -> OSErr
```

<a id="Discussion"></a>

## Discussion

The `theReply` parameter always specifies a reply Apple event, never `nil`. However, the handler should not fill out the reply if the descriptor type for the reply event is `typeNull`, indicating the sender does not want a reply.

The `handlerRefcon` parameter provides 4 bytes of data to the handler; a common use for this parameter is to pass a pointer to additional data.

This method is primarily intended for Cocoa’s internal use. Note that *dispatching* an event means routing an event to an appropriate handler in the current application. You cannot use this method to *send* an event to other applications.

# dispatchRawAppleEvent:withRawReply:handlerRefCon: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Causes the Apple event specified by `theAppleEvent` to be dispatched to the appropriate Apple event handler, if one has been registered by calling [setEventHandler:andSelector:forEventClass:andEventID:](seteventhandler%28__andselector_foreventclass_andeventid_%29.md).

## Declaration

```objectivec
- (OSErr) dispatchRawAppleEvent:(const AppleEvent *) theAppleEvent withRawReply:(AppleEvent *) theReply handlerRefCon:(SRefCon) handlerRefCon;
```

<a id="Discussion"></a>

## Discussion

The `theReply` parameter always specifies a reply Apple event, never `nil`. However, the handler should not fill out the reply if the descriptor type for the reply event is `typeNull`, indicating the sender does not want a reply.

The `handlerRefcon` parameter provides 4 bytes of data to the handler; a common use for this parameter is to pass a pointer to additional data.

This method is primarily intended for Cocoa’s internal use. Note that *dispatching* an event means routing an event to an appropriate handler in the current application. You cannot use this method to *send* an event to other applications.
