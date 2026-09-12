> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/colorsync_manager/1805293-cmgetcolorsyncversion](https://developer.apple.com/documentation/applicationservices/colorsync_manager/1805293-cmgetcolorsyncversion)

# CMGetColorSyncVersion

**Interface language:** Objective-C

**Framework:** Application Services

Gets ColorSync version information.

## Declaration

```objectivec
CMError CMGetColorSyncVersion (
   UInt32 *version
);
```

## Parameters

- `version`: On output, points to the version of ColorSync installed on the system.

<a id="return_value"></a>

## Return Value

A `CMError` value. See [Result Codes](../colorsync_manager.md#1670295).

<a id="overview"></a>

## Overview

`CMGetColorSyncVersion` relieves you from having to call `Gestalt` to find out the version of ColorSync installed on the system.

## See Also

### Miscellaneous

- [CMLaunchControlPanel](1805294-cmlaunchcontrolpanel.md): Launches the ColorSync preferences pane.
