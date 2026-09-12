> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/forcefeedback/ffenvelope/dwattacklevel](https://developer.apple.com/documentation/forcefeedback/ffenvelope/dwattacklevel)

# dwAttackLevel (Swift)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Amplitude for the start of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.

## Declaration

```swift
var dwAttackLevel: DWORD
```

## See Also

### Instance Properties

- [dwAttackTime](dwattacktime.md): The time, in microseconds, to reach the sustain level.
- [dwFadeLevel](dwfadelevel.md): Amplitude for the end of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeTime](dwfadetime.md): The time, in microseconds, to reach the fade level.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.

# dwAttackLevel (Objective-C)

**Framework:** Force Feedback  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.2+

Amplitude for the start of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.

## Declaration

```objectivec
DWORD dwAttackLevel;
```

## See Also

### Instance Properties

- [dwAttackTime](dwattacktime.md): The time, in microseconds, to reach the sustain level.
- [dwFadeLevel](dwfadelevel.md): Amplitude for the end of the envelope, relative to the baseline, in the range from 0 through 10,000. If the effect’s type-specific data does not specify a baseline, the amplitude is relative to 0.
- [dwFadeTime](dwfadetime.md): The time, in microseconds, to reach the fade level.
- [dwSize](dwsize.md): Size, in bytes, of this structure. This member must be initialized before the structure is used.
