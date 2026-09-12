> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/addresscomponents](https://developer.apple.com/documentation/foundation/nstextcheckingresult/addresscomponents)

# addressComponents (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The address dictionary of a type checking result.

## Declaration

```swift
var addressComponents: [NSTextCheckingKey : String]? { get }
```

<a id="Discussion"></a>

## Discussion

The dictionary keys are described in [Keys for Address Components](../keys-for-address-components.md).

## See Also

### Text Checking Results for Addresses

- [addressCheckingResult(range:components:)](addresscheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified address components.

# addressComponents (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The address dictionary of a type checking result.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,NSString *> * addressComponents;
```

<a id="Discussion"></a>

## Discussion

The dictionary keys are described in [Keys for Address Components](../keys-for-address-components.md).

## See Also

### Text Checking Results for Addresses

- [addressCheckingResultWithRange:components:](addresscheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified address components.
