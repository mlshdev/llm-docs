> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiounitparameternameinfo/outname

# outName (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When getting an audio unit property that uses this data structure for its value, the short version of the parameter name provided by the audio unit. The host application then owns the string and is responsible for releasing it.

## Declaration

```swift
var outName: Unmanaged<CFString>?
```

# outName (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

When getting an audio unit property that uses this data structure for its value, the short version of the parameter name provided by the audio unit. The host application then owns the string and is responsible for releasing it.

## Declaration

```objectivec
CFStringRef outName;
```
