> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudioenvironmentnode/nextavailableinputbus](https://developer.apple.com/documentation/avfaudio/avaudioenvironmentnode/nextavailableinputbus)

# nextAvailableInputBus (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An unused input bus.

## Declaration

```swift
var nextAvailableInputBus: AVAudioNodeBus { get }
```

<a id="Discussion"></a>

## Discussion

This method finds and returns the first input bus that doesn’t have a connection with a node.

# nextAvailableInputBus (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

An unused input bus.

## Declaration

```objectivec
@property (nonatomic, readonly) AVAudioNodeBus nextAvailableInputBus;
```

<a id="Discussion"></a>

## Discussion

This method finds and returns the first input bus that doesn’t have a connection with a node.
