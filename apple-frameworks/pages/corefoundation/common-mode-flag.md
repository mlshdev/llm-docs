> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/common-mode-flag](https://developer.apple.com/documentation/corefoundation/common-mode-flag)

# Common Mode Flag (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

A run loop pseudo-mode that manages objects monitored in the “common” modes.

<a id="overview"></a>

## Overview

Run loops never run in this mode. This pseudo-mode is used only as a special set of sources, timers, and observers that is shared by other modes. See Managing Observers for more details.

## Topics

### Constants

- [commonModes](cfrunloopmode/commonmodes.md): Objects added to a run loop using this value as the mode are monitored by all run loop modes that have been declared as a member of the set of “common” modes with [CFRunLoopAddCommonMode(\_:\_:)](cfrunloopaddcommonmode%28____%29.md).

## See Also

### Constants

- [CFRunLoopRunInMode Exit Codes](cfrunloopruninmode_exit_codes.md): Return codes for `CFRunLoopRunInMode`, identifying the reason the run loop exited.
- [Default Run Loop Mode](default-run-loop-mode.md): Default run loop mode.

# Common Mode Flag (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

A run loop pseudo-mode that manages objects monitored in the “common” modes.

<a id="overview"></a>

## Overview

Run loops never run in this mode. This pseudo-mode is used only as a special set of sources, timers, and observers that is shared by other modes. See Managing Observers for more details.

## Topics

### Constants

- [kCFRunLoopCommonModes](cfrunloopmode/commonmodes.md): Objects added to a run loop using this value as the mode are monitored by all run loop modes that have been declared as a member of the set of “common” modes with [CFRunLoopAddCommonMode](cfrunloopaddcommonmode%28____%29.md).

## See Also

### Constants

- [CFRunLoopRunInMode Exit Codes](cfrunloopruninmode_exit_codes.md): Return codes for `CFRunLoopRunInMode`, identifying the reason the run loop exited.
- [Default Run Loop Mode](default-run-loop-mode.md): Default run loop mode.
