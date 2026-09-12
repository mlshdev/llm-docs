> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameterinfo/unitname](https://developer.apple.com/documentation/audiotoolbox/audiounitparameterinfo/unitname)

# unitName (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If `kAudioUnitParameterUnit_CustomUnit` is set, this field must contain a valid `CFString` object. Only valid if `kAudioUnitParameterUnit_CustomUnit` is set.

## Declaration

```swift
var unitName: Unmanaged<CFString>?
```

# unitName (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

If `kAudioUnitParameterUnit_CustomUnit` is set, this field must contain a valid `CFString` object. Only valid if `kAudioUnitParameterUnit_CustomUnit` is set.

## Declaration

```objectivec
CFStringRef unitName;
```
