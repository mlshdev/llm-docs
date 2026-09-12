> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/soundanalysis/snclassifysoundrequest/windowduration](https://developer.apple.com/documentation/soundanalysis/snclassifysoundrequest/windowduration)

# windowDuration (Swift)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The duration of the audio buffer the request sends to the underlying sound classifier for each prediction.

## Declaration

```swift
var windowDuration: CMTime { get set }
```

<a id="Discussion"></a>

## Discussion

Configure the window duration with a value that satisfies the request’s [windowDurationConstraint](windowdurationconstraint-5no60.md).

The request sends larger audio buffer windows less frequently, which can make the classifications more accurate, but less precise in indicating when they occur. Requests with smaller buffer window durations sharpen the time resolution of each prediction, but send smaller audio buffers to the sound classifier.

## See Also

### Configuring a Request

- [overlapFactor](overlapfactor.md): The amount of overlap between successive analysis windows when the model operates on a fixed-size audio block.

# windowDuration (Objective-C)

**Framework:** Sound Analysis  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The duration of the audio buffer the request sends to the underlying sound classifier for each prediction.

## Declaration

```objectivec
@property (assign, readwrite) CMTime windowDuration;
```

<a id="Discussion"></a>

## Discussion

Configure the window duration with a value that satisfies the request’s [windowDurationConstraint](windowdurationconstraint-5no60.md).

The request sends larger audio buffer windows less frequently, which can make the classifications more accurate, but less precise in indicating when they occur. Requests with smaller buffer window durations sharpen the time resolution of each prediction, but send smaller audio buffers to the sound classifier.

## See Also

### Configuring a Request

- [overlapFactor](overlapfactor.md): The amount of overlap between successive analysis windows when the model operates on a fixed-size audio block.
