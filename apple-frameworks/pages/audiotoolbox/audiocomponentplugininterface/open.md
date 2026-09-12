> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/audiotoolbox/audiocomponentplugininterface/open](https://developer.apple.com/documentation/audiotoolbox/audiocomponentplugininterface/open)

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
