> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiounitparameterinfo/cfnamestring](https://developer.apple.com/documentation/audiotoolbox/audiounitparameterinfo/cfnamestring)

# cfNameString (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Only valid if `kAudioUnitParameterFlag_HasCFNameString` is set.

## Declaration

```swift
var cfNameString: Unmanaged<CFString>?
```

# cfNameString (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Only valid if `kAudioUnitParameterFlag_HasCFNameString` is set.

## Declaration

```objectivec
CFStringRef cfNameString;
```
