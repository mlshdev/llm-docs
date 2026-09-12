> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/1533520-component-wrapping-options](https://developer.apple.com/documentation/corefoundation/1533520-component-wrapping-options)

# Component Wrapping Options

**Interface languages:** Swift, Objective-C

**Framework:** Core Foundation  
**Kind:** API Collection

The wrapping option specifies overflow behavior for calendar components in calendrical calculations

<a id="overview"></a>

## Overview

The wrapping option specifies overflow behavior for calendar components in calendrical calculations—see [CFCalendarAddComponents](cfcalendaraddcomponents.md) and [CFCalendarGetComponentDifference](cfcalendargetcomponentdifference.md).

## Topics

### Constants

- [kCFCalendarComponentsWrap](kcfcalendarcomponentswrap.md): Specifies that the components specified for calendar components should be incremented and wrap around to zero/one on overflow, but should not cause higher units to be incremented.

## See Also

### Constants

- [CFCalendarUnit](cfcalendarunit.md): CFCalendarUnit constants are used to specify calendrical units, such as day or month, in various calendar calculations.
