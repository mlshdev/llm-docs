> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdisplaychangesummaryflags/setmodeflag](https://developer.apple.com/documentation/coregraphics/cgdisplaychangesummaryflags/setmodeflag)

# setModeFlag (Swift)

**Framework:** Core Graphics  
**Kind:** Type Property  
**Availability:** Mac Catalyst · macOS

The display mode has changed.

## Declaration

```swift
static var setModeFlag: CGDisplayChangeSummaryFlags { get }
```

## See Also

### Constants

- [beginConfigurationFlag](beginconfigurationflag.md): The display configuration is about to change.
- [movedFlag](movedflag.md): The location of the upper-left corner of the display in the global display coordinate space has changed.
- [setMainFlag](setmainflag.md): The display is now the main display.
- [addFlag](addflag.md): The display has been added to the active display list.
- [removeFlag](removeflag.md): The display has been removed from the active display list.
- [enabledFlag](enabledflag.md): The display has been enabled.
- [disabledFlag](disabledflag.md): The display has been disabled.
- [mirrorFlag](mirrorflag.md): The display is now mirroring another display.
- [unMirrorFlag](unmirrorflag.md): The display is no longer mirroring another display.
- [desktopShapeChangedFlag](desktopshapechangedflag.md)

# kCGDisplaySetModeFlag (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

The display mode has changed.

## Declaration

```objectivec
kCGDisplaySetModeFlag
```

## See Also

### Constants

- [kCGDisplayBeginConfigurationFlag](beginconfigurationflag.md): The display configuration is about to change.
- [kCGDisplayMovedFlag](movedflag.md): The location of the upper-left corner of the display in the global display coordinate space has changed.
- [kCGDisplaySetMainFlag](setmainflag.md): The display is now the main display.
- [kCGDisplayAddFlag](addflag.md): The display has been added to the active display list.
- [kCGDisplayRemoveFlag](removeflag.md): The display has been removed from the active display list.
- [kCGDisplayEnabledFlag](enabledflag.md): The display has been enabled.
- [kCGDisplayDisabledFlag](disabledflag.md): The display has been disabled.
- [kCGDisplayMirrorFlag](mirrorflag.md): The display is now mirroring another display.
- [kCGDisplayUnMirrorFlag](unmirrorflag.md): The display is no longer mirroring another display.
- [kCGDisplayDesktopShapeChangedFlag](desktopshapechangedflag.md)
