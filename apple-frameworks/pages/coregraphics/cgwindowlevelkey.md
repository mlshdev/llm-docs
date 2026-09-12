> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowlevelkey](https://developer.apple.com/documentation/coregraphics/cgwindowlevelkey)

# CGWindowLevelKey (Swift)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Keys that represent the standard window levels in macOS. Quartz includes these keys to support application frameworks like Cocoa. Applications do not need to use them directly.

## Declaration

```swift
enum CGWindowLevelKey
```

## Topics

### Constants

- [CGWindowLevelKey.baseWindow](cgwindowlevelkey/basewindow.md)
- [CGWindowLevelKey.minimumWindow](cgwindowlevelkey/minimumwindow.md)
- [CGWindowLevelKey.desktopWindow](cgwindowlevelkey/desktopwindow.md)
- [CGWindowLevelKey.backstopMenu](cgwindowlevelkey/backstopmenu.md)
- [CGWindowLevelKey.normalWindow](cgwindowlevelkey/normalwindow.md)
- [CGWindowLevelKey.floatingWindow](cgwindowlevelkey/floatingwindow.md)
- [CGWindowLevelKey.tornOffMenuWindow](cgwindowlevelkey/tornoffmenuwindow.md)
- [CGWindowLevelKey.dockWindow](cgwindowlevelkey/dockwindow.md)
- [CGWindowLevelKey.mainMenuWindow](cgwindowlevelkey/mainmenuwindow.md)
- [CGWindowLevelKey.statusWindow](cgwindowlevelkey/statuswindow.md)
- [CGWindowLevelKey.modalPanelWindow](cgwindowlevelkey/modalpanelwindow.md)
- [CGWindowLevelKey.popUpMenuWindow](cgwindowlevelkey/popupmenuwindow.md)
- [CGWindowLevelKey.draggingWindow](cgwindowlevelkey/draggingwindow.md)
- [CGWindowLevelKey.screenSaverWindow](cgwindowlevelkey/screensaverwindow.md)
- [CGWindowLevelKey.maximumWindow](cgwindowlevelkey/maximumwindow.md)
- [CGWindowLevelKey.overlayWindow](cgwindowlevelkey/overlaywindow.md)
- [CGWindowLevelKey.helpWindow](cgwindowlevelkey/helpwindow.md)
- [CGWindowLevelKey.utilityWindow](cgwindowlevelkey/utilitywindow.md)
- [CGWindowLevelKey.desktopIconWindow](cgwindowlevelkey/desktopiconwindow.md)
- [CGWindowLevelKey.cursorWindow](cgwindowlevelkey/cursorwindow.md)
- [CGWindowLevelKey.assistiveTechHighWindow](cgwindowlevelkey/assistivetechhighwindow.md)
- [CGWindowLevelKey.numberOfWindowLevelKeys](cgwindowlevelkey/numberofwindowlevelkeys.md)

### Initializers

- [init(rawValue:)](cgwindowlevelkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGError](cgerror.md): A uniform type for result codes returned by functions in Core Graphics.
- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [CGEventField.mouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.

# CGWindowLevelKey (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration  
**Availability:** Mac Catalyst · macOS

Keys that represent the standard window levels in macOS. Quartz includes these keys to support application frameworks like Cocoa. Applications do not need to use them directly.

## Declaration

```objectivec
enum CGWindowLevelKey : int32_t;
```

## Topics

### Constants

- [kCGBaseWindowLevelKey](cgwindowlevelkey/basewindow.md)
- [kCGMinimumWindowLevelKey](cgwindowlevelkey/minimumwindow.md)
- [kCGDesktopWindowLevelKey](cgwindowlevelkey/desktopwindow.md)
- [kCGBackstopMenuLevelKey](cgwindowlevelkey/backstopmenu.md)
- [kCGNormalWindowLevelKey](cgwindowlevelkey/normalwindow.md)
- [kCGFloatingWindowLevelKey](cgwindowlevelkey/floatingwindow.md)
- [kCGTornOffMenuWindowLevelKey](cgwindowlevelkey/tornoffmenuwindow.md)
- [kCGDockWindowLevelKey](cgwindowlevelkey/dockwindow.md)
- [kCGMainMenuWindowLevelKey](cgwindowlevelkey/mainmenuwindow.md)
- [kCGStatusWindowLevelKey](cgwindowlevelkey/statuswindow.md)
- [kCGModalPanelWindowLevelKey](cgwindowlevelkey/modalpanelwindow.md)
- [kCGPopUpMenuWindowLevelKey](cgwindowlevelkey/popupmenuwindow.md)
- [kCGDraggingWindowLevelKey](cgwindowlevelkey/draggingwindow.md)
- [kCGScreenSaverWindowLevelKey](cgwindowlevelkey/screensaverwindow.md)
- [kCGMaximumWindowLevelKey](cgwindowlevelkey/maximumwindow.md)
- [kCGOverlayWindowLevelKey](cgwindowlevelkey/overlaywindow.md)
- [kCGHelpWindowLevelKey](cgwindowlevelkey/helpwindow.md)
- [kCGUtilityWindowLevelKey](cgwindowlevelkey/utilitywindow.md)
- [kCGDesktopIconWindowLevelKey](cgwindowlevelkey/desktopiconwindow.md)
- [kCGCursorWindowLevelKey](cgwindowlevelkey/cursorwindow.md)
- [kCGAssistiveTechHighWindowLevelKey](cgwindowlevelkey/assistivetechhighwindow.md)
- [kCGNumberOfWindowLevelKeys](cgwindowlevelkey/numberofwindowlevelkeys.md)

## See Also

### Enumerations

- [CGCaptureOptions](cgcaptureoptions.md): Configuration parameters that are used when capturing displays.
- [CGColorConversionInfoTransformType](cgcolorconversioninfotransformtype.md): Constants describing how a color conversion uses color spaces.
- [CGColorRenderingIntent](cgcolorrenderingintent.md): Handling options for colors that are not located within the destination color space of a graphics context.
- [CGConfigureOption](cgconfigureoption.md): The scope of the changes in a display configuration transaction.
- [CGDisplayChangeSummaryFlags](cgdisplaychangesummaryflags.md): The configuration parameters that are passed to a display reconfiguration callback function.
- [CGDisplayStreamFrameStatus](cgdisplaystreamframestatus.md): Describes a frame update event.
- [CGDisplayStreamUpdateRectType](cgdisplaystreamupdaterecttype.md): Use these constants to determine which rectangles your app is interested in.
- [CGError](cgerror.md): A uniform type for result codes returned by functions in Core Graphics.
- [CGEventField](cgeventfield.md): Constants used as keys to access specialized fields in low-level events.
- [CGEventFilterMask](cgeventfiltermask.md): Specify masks for classes of low-level events that can be filtered during event suppression states.
- [CGEventFlags](cgeventflags.md): Constants that indicate the modifier key state at the time an event is created, as well as other event-related states.
- [CGEventMouseSubtype](cgeventmousesubtype.md): Constants used with the [kCGMouseEventSubtype](cgeventfield/mouseeventsubtype.md) event field.
- [CGEventSourceStateID](cgeventsourcestateid.md): Constants that specify the possible source states of an event source.
- [CGEventSuppressionState](cgeventsuppressionstate.md): Specify the event suppression states that can occur after posting an event.
- [CGEventTapLocation](cgeventtaplocation.md): Constants that specify possible tapping points for events.
