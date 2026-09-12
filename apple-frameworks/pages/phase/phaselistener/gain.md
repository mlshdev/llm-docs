> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaselistener/gain](https://developer.apple.com/documentation/phase/phaselistener/gain)

# gain (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Modifies the volume of all audio playback for the listener’s mixers.

## Declaration

```swift
var gain: Double { get set }
```

<a id="Discussion"></a>

## Discussion

For mixers that require a listener, this property modifies the volume of all audio the framework plays back through the listener by way of the listener’s associated mixers. The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the audio’s original volume.

# gain (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

Modifies the volume of all audio playback for the listener’s mixers.

## Declaration

```objectivec
@property (nonatomic, assign) double gain;
```

<a id="Discussion"></a>

## Discussion

For mixers that require a listener, this property modifies the volume of all audio the framework plays back through the listener by way of the listener’s associated mixers. The framework clamps the value to the range between `0` and `1`, where `0` silences the audio and `1` doesn’t modify the audio’s original volume.
