> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/adding(_:withbehavior:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/adding(_:withbehavior:))

# adding(\_:withBehavior:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds this number to another given number using the specified behavior.

## Declaration

```swift
func adding(_ decimalNumber: NSDecimalNumber, withBehavior behavior: (any NSDecimalNumberBehaviors)?) -> NSDecimalNumber
```

<a id="Discussion"></a>

## Discussion

`behavior` specifies the handling of calculation errors and rounding.

## See Also

### Performing Arithmetic

- [adding(\_:)](adding%28__%29.md): Adds this number to another given number.
- [subtracting(\_:)](subtracting%28__%29.md): Subtracts another given number from this one.
- [multiplying(by:)](multiplying%28by_%29.md): Multiplies the number by another given number.
- [dividing(by:)](dividing%28by_%29.md): Divides the number by another given number.
- [raising(toPower:)](raising%28topower_%29.md): Raises the number to a given power.
- [multiplying(byPowerOf10:)](multiplying%28bypowerof10_%29.md): Multiplies the number by 10 raised to the given power.
- [subtracting(\_:withBehavior:)](subtracting%28__withbehavior_%29.md): Subtracts this a given number from this one using the specified behavior.
- [multiplying(by:withBehavior:)](multiplying%28by_withbehavior_%29.md): Multiplies this number by another given number using the specified behavior.
- [dividing(by:withBehavior:)](dividing%28by_withbehavior_%29.md): Divides this number by another given number using the specified behavior.
- [raising(toPower:withBehavior:)](raising%28topower_withbehavior_%29.md): Raises the number to a given power using the specified behavior.
- [multiplying(byPowerOf10:withBehavior:)](multiplying%28bypowerof10_withbehavior_%29.md): Multiplies the number by 10 raised to the given power using the specified behavior.

# decimalNumberByAdding:withBehavior: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Adds this number to another given number using the specified behavior.

## Declaration

```objectivec
- (NSDecimalNumber *) decimalNumberByAdding:(NSDecimalNumber *) decimalNumber withBehavior:(id<NSDecimalNumberBehaviors>) behavior;
```

<a id="Discussion"></a>

## Discussion

`behavior` specifies the handling of calculation errors and rounding.

## See Also

### Performing Arithmetic

- [decimalNumberByAdding:](adding%28__%29.md): Adds this number to another given number.
- [decimalNumberBySubtracting:](subtracting%28__%29.md): Subtracts another given number from this one.
- [decimalNumberByMultiplyingBy:](multiplying%28by_%29.md): Multiplies the number by another given number.
- [decimalNumberByDividingBy:](dividing%28by_%29.md): Divides the number by another given number.
- [decimalNumberByRaisingToPower:](raising%28topower_%29.md): Raises the number to a given power.
- [decimalNumberByMultiplyingByPowerOf10:](multiplying%28bypowerof10_%29.md): Multiplies the number by 10 raised to the given power.
- [decimalNumberBySubtracting:withBehavior:](subtracting%28__withbehavior_%29.md): Subtracts this a given number from this one using the specified behavior.
- [decimalNumberByMultiplyingBy:withBehavior:](multiplying%28by_withbehavior_%29.md): Multiplies this number by another given number using the specified behavior.
- [decimalNumberByDividingBy:withBehavior:](dividing%28by_withbehavior_%29.md): Divides this number by another given number using the specified behavior.
- [decimalNumberByRaisingToPower:withBehavior:](raising%28topower_withbehavior_%29.md): Raises the number to a given power using the specified behavior.
- [decimalNumberByMultiplyingByPowerOf10:withBehavior:](multiplying%28bypowerof10_withbehavior_%29.md): Multiplies the number by 10 raised to the given power using the specified behavior.
