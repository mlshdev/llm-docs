> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiounitreverb/wetdrymix](https://developer.apple.com/documentation/avfaudio/avaudiounitreverb/wetdrymix)

# wetDryMix (Swift)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The blend of the wet and dry signals.

## Declaration

```swift
var wetDryMix: Float { get set }
```

<a id="Discussion"></a>

## Discussion

You specify the blend as a percentage. The range is `0%` through `100%`, where `0%` represents all dry.

# wetDryMix (Objective-C)

**Framework:** AVFAudio  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

The blend of the wet and dry signals.

## Declaration

```objectivec
@property (nonatomic) float wetDryMix;
```

<a id="Discussion"></a>

## Discussion

You specify the blend as a percentage. The range is `0%` through `100%`, where `0%` represents all dry.
