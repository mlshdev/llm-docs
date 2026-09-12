> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalcopy(_:_:)](https://developer.apple.com/documentation/foundation/nsdecimalcopy(_:_:))

# NSDecimalCopy(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the value of a decimal number.

## Declaration

```swift
func NSDecimalCopy(_ destination: UnsafeMutablePointer<Decimal>, _ source: UnsafePointer<Decimal>)
```

## Parameters

- `destination`: A [Decimal](decimal.md) reference that receives the copied value.
- `source`: A source [Decimal](decimal.md) to copy.

<a id="Discussion"></a>

## Discussion

Copies the value in `source` to `destination`.

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).

## See Also

### Creating a decimal from another decimal

- [init(signOf:magnitudeOf:)](decimal/init%28signof_magnitudeof_%29.md): Creates and initializes a decimal with the sign and magnitude of the given decimals.

# NSDecimalCopy (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies the value of a decimal number.

## Declaration

```objectivec
extern void NSDecimalCopy(NSDecimal *destination, const NSDecimal *source);
```

## Parameters

- `destination`: A [NSDecimal](decimal.md) reference that receives the copied value.
- `source`: A source [NSDecimal](decimal.md) to copy.

<a id="Discussion"></a>

## Discussion

Copies the value in `source` to `destination`.

For more information, see [Number and Value Programming Topics](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/NumbersandValues/NumbersandValues.html#//apple_ref/doc/uid/10000038i).
