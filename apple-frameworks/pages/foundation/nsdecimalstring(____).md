> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalstring(_:_:)](https://developer.apple.com/documentation/foundation/nsdecimalstring(_:_:))

# NSDecimalString(\_:\_:) (Swift)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of the decimal value appropriate for the specified locale.

## Declaration

```swift
func NSDecimalString(_ dcm: UnsafePointer<Decimal>, _ locale: Any?) -> String
```

## Parameters

- `dcm`: The decimal value to represent.
- `locale`: Either an instance of [NSLocale](nslocale.md) or a dictionary with a string value corresponding to the [decimalSeparator](nslocale/key/decimalseparator.md) key.

# NSDecimalString (Objective-C)

**Framework:** Foundation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string representation of the decimal value appropriate for the specified locale.

## Declaration

```objectivec
extern NSString *NSDecimalString(const NSDecimal *dcm, id locale);
```

## Parameters

- `dcm`: The decimal value to represent.
- `locale`: Either an instance of [NSLocale](nslocale.md) or a dictionary with a string value corresponding to the [NSLocaleDecimalSeparator](nslocale/key/decimalseparator.md) key.
