> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/compositorservices/cp_time](https://developer.apple.com/documentation/compositorservices/cp_time)

# cp_time

**Interface language:** Objective-C

**Framework:** Compositor Services  
**Kind:** Structure  
**Availability:** macOS 26.0+ · visionOS 1.0+

A Mach absolute time clock value.

## Declaration

```objectivec
struct cp_time;
```

<a id="overview"></a>

## Overview

Mach absolute time measures the number of ticks that have elapsed since an arbitrary point after system startup. Each value represents a unique point in time during the course of your app’s execution.

## Topics

### Instance Properties

- [cp_mach_abs_time](cp_time/cp_mach_abs_time.md): The Mach absolute time value.
