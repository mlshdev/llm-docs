> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiotoolbox/audiocomponentplugininterface/open

# Open (Swift)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```swift
var Open: (UnsafeMutableRawPointer, AudioComponentInstance) -> OSStatus
```

# Open (Objective-C)

**Framework:** Audio Toolbox  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

## Declaration

```objectivec
int (*)(void *, struct OpaqueAudioComponentInstance *) Open;
```

```objectivec
int (*)(void *, struct ComponentInstanceRecord *) Open;
```
