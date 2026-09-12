> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/addresscheckingresult(range:components:)](https://developer.apple.com/documentation/foundation/nstextcheckingresult/addresscheckingresult(range:components:))

# addressCheckingResult(range:components:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified address components.

## Declaration

```swift
class func addressCheckingResult(range: NSRange, components: [NSTextCheckingKey : String]) -> NSTextCheckingResult
```

## Parameters

- `range`: The range of the detected result.
- `components`: A dictionary containing the address components. The dictionary keys are described in [Keys for Address Components](../keys-for-address-components.md).

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [address](checkingtype/address.md).

## See Also

### Text Checking Results for Addresses

- [addressComponents](addresscomponents.md): The address dictionary of a type checking result.

# addressCheckingResultWithRange:components: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a text checking result with the specified address components.

## Declaration

```objectivec
+ (NSTextCheckingResult *) addressCheckingResultWithRange:(NSRange) range components:(NSDictionary<NSString *,NSString *> *) components;
```

## Parameters

- `range`: The range of the detected result.
- `components`: A dictionary containing the address components. The dictionary keys are described in [Keys for Address Components](../keys-for-address-components.md).

<a id="return-value"></a>

## Return Value

Returns an `NSTextCheckingResult` with the specified [range](range.md) and a [resultType](resulttype.md) of [NSTextCheckingTypeAddress](checkingtype/address.md).

## See Also

### Text Checking Results for Addresses

- [addressComponents](addresscomponents.md): The address dictionary of a type checking result.
