> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiounitparameterinfo/cfnamestring

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
