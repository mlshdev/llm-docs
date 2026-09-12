> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgeventmaskbit](https://developer.apple.com/documentation/coregraphics/cgeventmaskbit)

# CGEventMaskBit

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Macro  
**Availability:** Mac Catalyst · macOS

Generates an event mask for a single type of event.

## Declaration

```objectivec
#define CGEventMaskBit(eventType)
```

## Parameters

- `eventType`: An event type constant. Pass one of the constants listed in [CGEventType](cgeventtype.md).

<a id="return-value"></a>

## Return Value

An event mask that represents the specified event.

<a id="Discussion"></a>

## Discussion

This macro converts an event type constant into a mask. You can use this mask to specify that an event tap should observe the event. For more information, see [CGEventMask](cgeventmask.md).

## See Also

### Working With Event Taps

- [CGEventTapCreate](cgevent/tapcreate%28tap_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap.
- [CGEventTapCreateForPSN](cgevent/tapcreateforpsn%28processserialnumber_place_options_eventsofinterest_callback_userinfo_%29.md): Creates an event tap for a specified process.
- [CGEventTapEnable](cgevent/tapenable%28tap_enable_%29.md): Enables or disables an event tap.
- [CGEventTapIsEnabled](cgevent/tapisenabled%28tap_%29.md): Returns a Boolean value indicating whether an event tap is enabled.
- [CGEventTapPostEvent](cgevent/tappostevent%28__%29.md): Posts a Quartz event from an event tap into the event stream.
- [CGEventPost](cgevent/post%28tap_%29.md): Posts a Quartz event into the event stream at a specified location.
- [CGEventPostToPSN](cgevent/posttopsn%28processserialnumber_%29.md): Posts a Quartz event into the event stream for a specific application.
- [CGGetEventTapList](cggeteventtaplist%28______%29.md): Gets a list of currently installed event taps.
