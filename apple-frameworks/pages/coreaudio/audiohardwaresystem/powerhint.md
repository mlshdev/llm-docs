> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/audiohardwaresystem/powerhint](https://developer.apple.com/documentation/coreaudio/audiohardwaresystem/powerhint)

# powerHint

**Framework:** Core Audio  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS 15.0+

An AudioHardwarePowerHint enum which allows a process to indicate how aggressive the system can be with optimizations that save power. The default value is none.

## Declaration

```swift
var powerHint: AudioHardwarePowerHint { get throws }
```

<a id="discussion"></a>

## Discussion

Note that the value of this property can be set in an application’s info.plist using the key, “AudioHardwarePowerHint”. The values for this key are the strings that correspond to the values in the Power Hints enum.
