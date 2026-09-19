> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/gamecontroller/gcstylus/input

# input (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

Gets the input profile for the stylus.

## Declaration

```swift
var input: (any GCDevicePhysicalInput)? { get }
```

## Mentioned In

- [Discovering and tracking spatial game controllers and styli](../discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="discussion"></a>

## Discussion

The input profile is represented as an object conforming to the `GCDevicePhysicalInput` protocol.  Use this object to discover available inputs on the stylus, including buttons and pressure sensors, and get notified when the state of those inputs change.

## See Also

### Getting input values and haptics

- [haptics](haptics.md): Gets the haptics profile for the stylus, if supported.

# input (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** visionOS 26.0+

Gets the input profile for the stylus.

## Declaration

```objectivec
@property (strong, readonly, nullable) id<GCDevicePhysicalInput> input;
```

## Mentioned In

- [Discovering and tracking spatial game controllers and styli](../discovering-and-tracking-spatial-game-controllers-and-styli.md)

<a id="discussion"></a>

## Discussion

The input profile is represented as an object conforming to the `GCDevicePhysicalInput` protocol.  Use this object to discover available inputs on the stylus, including buttons and pressure sensors, and get notified when the state of those inputs change.

## See Also

### Getting input values and haptics

- [haptics](haptics.md): Gets the haptics profile for the stylus, if supported.
