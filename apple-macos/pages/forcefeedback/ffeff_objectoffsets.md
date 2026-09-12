> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffeff_objectoffsets](https://developer.apple.com/documentation/forcefeedback/ffeff_objectoffsets)

# FFEFF_OBJECTOFFSETS (Swift)

**Framework:** Force Feedback  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```swift
var FFEFF_OBJECTOFFSETS: UInt { get }
```

<a id="Discussion"></a>

## Discussion

OBJECT IDS cannot be used to identify trigger buttons in FFEFFECT.dwTriggerButton, and output axes in FFEFFECT.rgdwAxes\[n\]. Please use object offsets (FFJOFS\_\* constants), the only supported method.

## See Also

### Constants

- [E_PENDING](e_pending.md)
- [FF_DEGREES](ff_degrees.md)
- [FF_DOWNLOADSKIPPED](ff_downloadskipped.md)
- [FF_EFFECTRESTARTED](ff_effectrestarted.md)
- [FF_FALSE](ff_false.md)
- [FF_FFNOMINALMAX](ff_ffnominalmax.md)
- [FF_INFINITE](ff_infinite.md)
- [FF_OK](ff_ok.md)
- [FF_SECONDS](ff_seconds.md)
- [FF_TRUNCATED](ff_truncated.md)
- [FF_TRUNCATEDANDRESTARTED](ff_truncatedandrestarted.md)
- [FFERR_DEVICEFULL](fferr_devicefull.md)
- [FFERR_DEVICEPAUSED](fferr_devicepaused.md)
- [FFERR_DEVICERELEASED](fferr_devicereleased.md)
- [FFERR_EFFECTPLAYING](fferr_effectplaying.md)

# FFEFF_OBJECTOFFSETS (Objective-C)

**Framework:** Force Feedback  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

## Declaration

```objectivec
#define FFEFF_OBJECTOFFSETS
```

<a id="Discussion"></a>

## Discussion

OBJECT IDS cannot be used to identify trigger buttons in FFEFFECT.dwTriggerButton, and output axes in FFEFFECT.rgdwAxes\[n\]. Please use object offsets (FFJOFS\_\* constants), the only supported method.

## See Also

### Constants

- [E_PENDING](e_pending.md)
- [FF_DEGREES](ff_degrees.md)
- [FF_DOWNLOADSKIPPED](ff_downloadskipped.md)
- [FF_EFFECTRESTARTED](ff_effectrestarted.md)
- [FF_FALSE](ff_false.md)
- [FF_FFNOMINALMAX](ff_ffnominalmax.md)
- [FF_INFINITE](ff_infinite.md)
- [FF_OK](ff_ok.md)
- [FF_SECONDS](ff_seconds.md)
- [FF_TRUNCATED](ff_truncated.md)
- [FF_TRUNCATEDANDRESTARTED](ff_truncatedandrestarted.md)
- [FFERR_DEVICEFULL](fferr_devicefull.md)
- [FFERR_DEVICENOTREG](fferr_devicenotreg.md)
- [FFERR_DEVICEPAUSED](fferr_devicepaused.md)
- [FFERR_DEVICERELEASED](fferr_devicereleased.md)
