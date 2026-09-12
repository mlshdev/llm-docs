> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshadersgraph/mpsgraphresizenearestroundingmode](https://developer.apple.com/documentation/metalperformanceshadersgraph/mpsgraphresizenearestroundingmode)

# MPSGraphResizeNearestRoundingMode (Swift)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The rounding mode to use when using nearest resize mode.

## Declaration

```swift
enum MPSGraphResizeNearestRoundingMode
```

## Topics

### Enumeration Cases

- [MPSGraphResizeNearestRoundingMode.ceil](mpsgraphresizenearestroundingmode/ceil.md): Rounds values toward +inf.
- [MPSGraphResizeNearestRoundingMode.floor](mpsgraphresizenearestroundingmode/floor.md): Rounds values toward -inf.
- [MPSGraphResizeNearestRoundingMode.roundPreferCeil](mpsgraphresizenearestroundingmode/roundpreferceil.md): Rounds values to the nearest integer value, with 0.5f offset rounding toward +inf.
- [MPSGraphResizeNearestRoundingMode.roundPreferFloor](mpsgraphresizenearestroundingmode/roundpreferfloor.md): Rounds values to the nearest integer value, with 0.5f rounding toward -inf.
- [MPSGraphResizeNearestRoundingMode.roundToEven](mpsgraphresizenearestroundingmode/roundtoeven.md): Rounds values to the nearest integer value, with 0.5f rounding toward the closest even value.
- [MPSGraphResizeNearestRoundingMode.roundToOdd](mpsgraphresizenearestroundingmode/roundtoodd.md): Rounds values to the nearest integer value, with 0.5f rounding toward the closest odd value.

### Initializers

- [init(rawValue:)](mpsgraphresizenearestroundingmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MPSGraphResizeNearestRoundingMode (Objective-C)

**Framework:** Metal Performance Shaders Graph  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The rounding mode to use when using nearest resize mode.

## Declaration

```objectivec
enum MPSGraphResizeNearestRoundingMode : NSUInteger;
```

## Topics

### Enumeration Cases

- [MPSGraphResizeNearestRoundingModeCeil](mpsgraphresizenearestroundingmode/ceil.md): Rounds values toward +inf.
- [MPSGraphResizeNearestRoundingModeFloor](mpsgraphresizenearestroundingmode/floor.md): Rounds values toward -inf.
- [MPSGraphResizeNearestRoundingModeRoundPreferCeil](mpsgraphresizenearestroundingmode/roundpreferceil.md): Rounds values to the nearest integer value, with 0.5f offset rounding toward +inf.
- [MPSGraphResizeNearestRoundingModeRoundPreferFloor](mpsgraphresizenearestroundingmode/roundpreferfloor.md): Rounds values to the nearest integer value, with 0.5f rounding toward -inf.
- [MPSGraphResizeNearestRoundingModeRoundToEven](mpsgraphresizenearestroundingmode/roundtoeven.md): Rounds values to the nearest integer value, with 0.5f rounding toward the closest even value.
- [MPSGraphResizeNearestRoundingModeRoundToOdd](mpsgraphresizenearestroundingmode/roundtoodd.md): Rounds values to the nearest integer value, with 0.5f rounding toward the closest odd value.
