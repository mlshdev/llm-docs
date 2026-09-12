> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiooutputunitmidicallbacks/midisysexproc](https://developer.apple.com/documentation/audiotoolbox/audiooutputunitmidicallbacks/midisysexproc)

# MIDISysExProc (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
var MIDISysExProc: (UnsafeMutableRawPointer?, UnsafePointer<UInt8>, UInt32) -> Void
```

# MIDISysExProc (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
void (*)(void *, const unsigned char *, unsigned int) MIDISysExProc;
```
