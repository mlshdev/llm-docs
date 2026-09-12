> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/subtracting(_:)](https://developer.apple.com/documentation/foundation/nsdecimalnumber/subtracting(_:))

# subtracting(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Subtracts another given number from this one.

## Declaration

```swift
func subtracting(_ decimalNumber: NSDecimalNumber) -> NSDecimalNumber
```

## Parameters

- `decimalNumber`: The number to subtract from the receiver.

<a id="return-value"></a>

## Return Value

A new `NSDecimalNumber` object whose value is `decimalNumber` subtracted from the receiver.

<a id="Discussion"></a>

## Discussion

This method uses the default behavior when handling calculation errors and when rounding.

## See Also

### Related Documentation

- [defaultBehavior](defaultbehavior.md): The way arithmetic methods round off and handle error conditions.

### Performing Arithmetic

- [adding(\_:)](adding%28__%29.md): Adds this number to another given number.
- [multiplying(by:)](multiplying%28by_%29.md): Multiplies the number by another given number.
- [dividing(by:)](dividing%28by_%29.md): Divides the number by another given number.
- [raising(toPower:)](raising%28topower_%29.md): Raises the number to a given power.
- [multiplying(byPowerOf10:)](multiplying%28bypowerof10_%29.md): Multiplies the number by 10 raised to the given power.
- [adding(\_:withBehavior:)](adding%28__withbehavior_%29.md): Adds this number to another given number using the specified behavior.
- [subtracting(\_:withBehavior:)](subtracting%28__withbehavior_%29.md): Subtracts this a given number from this one using the specified behavior.
- [multiplying(by:withBehavior:)](multiplying%28by_withbehavior_%29.md): Multiplies this number by another given number using the specified behavior.
- [dividing(by:withBehavior:)](dividing%28by_withbehavior_%29.md): Divides this number by another given number using the specified behavior.
- [raising(toPower:withBehavior:)](raising%28topower_withbehavior_%29.md): Raises the number to a given power using the specified behavior.
- [multiplying(byPowerOf10:withBehavior:)](multiplying%28bypowerof10_withbehavior_%29.md): Multiplies the number by 10 raised to the given power using the specified behavior.

# decimalNumberBySubtracting: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Subtracts another given number from this one.

## Declaration

```objectivec
- (NSDecimalNumber *) decimalNumberBySubtracting:(NSDecimalNumber *) decimalNumber;
```

## Parameters

- `decimalNumber`: The number to subtract from the receiver.

<a id="return-value"></a>

## Return Value

A new `NSDecimalNumber` object whose value is `decimalNumber` subtracted from the receiver.

<a id="Discussion"></a>

## Discussion

This method uses the default behavior when handling calculation errors and when rounding.

## See Also

### Related Documentation

- [defaultBehavior](defaultbehavior.md): The way arithmetic methods round off and handle error conditions.

### Performing Arithmetic

- [decimalNumberByAdding:](adding%28__%29.md): Adds this number to another given number.
- [decimalNumberByMultiplyingBy:](multiplying%28by_%29.md): Multiplies the number by another given number.
- [decimalNumberByDividingBy:](dividing%28by_%29.md): Divides the number by another given number.
- [decimalNumberByRaisingToPower:](raising%28topower_%29.md): Raises the number to a given power.
- [decimalNumberByMultiplyingByPowerOf10:](multiplying%28bypowerof10_%29.md): Multiplies the number by 10 raised to the given power.
- [decimalNumberByAdding:withBehavior:](adding%28__withbehavior_%29.md): Adds this number to another given number using the specified behavior.
- [decimalNumberBySubtracting:withBehavior:](subtracting%28__withbehavior_%29.md): Subtracts this a given number from this one using the specified behavior.
- [decimalNumberByMultiplyingBy:withBehavior:](multiplying%28by_withbehavior_%29.md): Multiplies this number by another given number using the specified behavior.
- [decimalNumberByDividingBy:withBehavior:](dividing%28by_withbehavior_%29.md): Divides this number by another given number using the specified behavior.
- [decimalNumberByRaisingToPower:withBehavior:](raising%28topower_withbehavior_%29.md): Raises the number to a given power using the specified behavior.
- [decimalNumberByMultiplyingByPowerOf10:withBehavior:](multiplying%28bypowerof10_withbehavior_%29.md): Multiplies the number by 10 raised to the given power using the specified behavior.
