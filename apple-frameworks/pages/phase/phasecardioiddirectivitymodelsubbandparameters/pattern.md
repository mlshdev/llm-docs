> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecardioiddirectivitymodelsubbandparameters/pattern](https://developer.apple.com/documentation/phase/phasecardioiddirectivitymodelsubbandparameters/pattern)

# pattern (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A shape that determines the direction of sound.

## Declaration

```swift
var pattern: Double { get set }
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range `[0.0, 1.0]`. The default value is `0.0`, which creates an omnidirectional shape. The value `0.5` creates a cardioid shape. The value `1.0` creates a dipole shape.

## See Also

### Shaping Directivity

- [sharpness](sharpness.md): The amount that the shape overlaps with bordering subbands.

# pattern (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A shape that determines the direction of sound.

## Declaration

```objectivec
@property (nonatomic) double pattern;
```

<a id="Discussion"></a>

## Discussion

The framework clamps the value to the range `[0.0, 1.0]`. The default value is `0.0`, which creates an omnidirectional shape. The value `0.5` creates a cardioid shape. The value `1.0` creates a dipole shape.

## See Also

### Shaping Directivity

- [sharpness](sharpness.md): The amount that the shape overlaps with bordering subbands.
