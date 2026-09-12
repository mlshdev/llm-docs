> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffenvelope/dwattacktime](https://developer.apple.com/documentation/forcefeedback/ffenvelope/dwattacktime)

# dwAttackTime (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The time, in microseconds, to reach the sustain level.

## Declaration

```swift
var dwAttackTime: DWORD
```

## See Also

### Instance Properties

- [dwAttackLevel](dwattacklevel.md): Amplitude for the start of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeLevel](dwfadelevel.md): Amplitude for the end of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeTime](dwfadetime.md): The time, in microseconds, to reach the fade level.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.

# dwAttackTime (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

The time, in microseconds, to reach the sustain level.

## Declaration

```objectivec
DWORD dwAttackTime;
```

## See Also

### Instance Properties

- [dwAttackLevel](dwattacklevel.md): Amplitude for the start of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeLevel](dwfadelevel.md): Amplitude for the end of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeTime](dwfadetime.md): The time, in microseconds, to reach the fade level.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
