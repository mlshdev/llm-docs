> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phasecardioiddirectivitymodelsubbandparameters/sharpness](https://developer.apple.com/documentation/phase/phasecardioiddirectivitymodelsubbandparameters/sharpness)

# sharpness (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount that the shape overlaps with bordering subbands.

## Declaration

```swift
var sharpness: Double { get set }
```

<a id="Discussion"></a>

## Discussion

This property condenses the shape of the [pattern](pattern.md) such that higher values extend the shape frontwards. Increasing sharpness for dipole (a [pattern](pattern.md) value of `1.0`), extends the shape frontwards and backwards.

The default value is `1.0`. Values greater than `1.0` increase sharpness. The framework clamps the value to the range `[1.0,` [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/double/greatestfinitemagnitude)`]`.

## See Also

### Shaping Directivity

- [pattern](pattern.md): A shape that determines the direction of sound.

# sharpness (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

The amount that the shape overlaps with bordering subbands.

## Declaration

```objectivec
@property (nonatomic) double sharpness;
```

<a id="Discussion"></a>

## Discussion

This property condenses the shape of the [pattern](pattern.md) such that higher values extend the shape frontwards. Increasing sharpness for dipole (a [pattern](pattern.md) value of `1.0`), extends the shape frontwards and backwards.

The default value is `1.0`. Values greater than `1.0` increase sharpness. The framework clamps the value to the range `[1.0,` [greatestFiniteMagnitude](https://developer.apple.com/documentation/swift/double/greatestfinitemagnitude)`]`.

## See Also

### Shaping Directivity

- [pattern](pattern.md): A shape that determines the direction of sound.
