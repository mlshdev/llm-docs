> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videodriverkit/iouservideolevelcontrolrange

# IOUserVideoLevelControlRange

**Interface language:** Objective-C

**Framework:** VideoDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 27.0+ beta

A control that supports a range of floating-point values.

## Declaration

```objectivec
struct IOUserVideoLevelControlRange;
```

<a id="overview"></a>

## Overview

`m_min` is the minimum float value for the level control range. `m_max` is the maximum float value for the level control range.

## Topics

### Acccessing range limits

- [m_min](iouservideolevelcontrolrange/m_min.md): Beta.
- [m_max](iouservideolevelcontrolrange/m_max.md): Beta.

## See Also

### Creating a level control

- [Create](iouservideolevelcontrol/create.md): Beta. A static factory method that allocates and initializes a video level control.
- [init](iouservideolevelcontrol/init.md): Beta. Initializes an video level control.
- [IOUserVideoDriver](iouservideodriver.md): Beta. A video driver.
- [IOUserVideoObjectPropertyElement](videodriverkit/iouservideoobjectpropertyelement.md): Beta. An integer that identifies, along with the property selector and scope, a specific piece of information about a video object.
- [IOUserVideoObjectPropertyScope](videodriverkit/iouservideoobjectpropertyscope.md): Beta. A four character code which, along with the selector and element, identifies a specific piece of information about a video object.
