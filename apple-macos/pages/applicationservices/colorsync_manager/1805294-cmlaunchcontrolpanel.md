> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805294-cmlaunchcontrolpanel](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805294-cmlaunchcontrolpanel)

# CMLaunchControlPanel

**Interface language:** Objective-C

**Framework:** Application Services

Launches the ColorSync preferences pane.

## Declaration

```objectivec
CMError CMLaunchControlPanel (
   UInt32 flags
);
```

## Parameters

- `flags`: A value that specifies how the preferences pane is launched. You currently must pass a value of 0 for this parameter.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

When your application calls the function `CMLaunchControlPanel`, any changes made by the user will not be available (through calls such as `CMGetDefaultProfileBySpace`) until the user closes the ColorSync preferences pane. There is currently no ColorSync function that determines if the ColorSync preferences pane has been closed, but you can use the Process Manager API for this purpose.

## See Also

### Miscellaneous

- [CMGetColorSyncVersion](1805293-cmgetcolorsyncversion.md): Gets ColorSync version information.
