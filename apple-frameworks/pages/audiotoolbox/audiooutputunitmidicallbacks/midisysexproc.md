> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiooutputunitmidicallbacks/midisysexproc

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
