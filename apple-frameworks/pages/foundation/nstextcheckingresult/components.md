> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nstextcheckingresult/components](https://developer.apple.com/documentation/foundation/nstextcheckingresult/components)

# components (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the components of a type checking result.

## Declaration

```swift
var components: [NSTextCheckingKey : String]? { get }
```

<a id="Discussion"></a>

## Discussion

Currently used by the transit checking result. The supported keys are located in [Keys for Transit Components](../keys-for-transit-components.md).

## See Also

### Related Documentation

- [transitInformationCheckingResult(range:components:)](transitinformationcheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified transit information.

# components (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A dictionary containing the components of a type checking result.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,NSString *> * components;
```

<a id="Discussion"></a>

## Discussion

Currently used by the transit checking result. The supported keys are located in [Keys for Transit Components](../keys-for-transit-components.md).

## See Also

### Related Documentation

- [transitInformationCheckingResultWithRange:components:](transitinformationcheckingresult%28range_components_%29.md): Creates and returns a text checking result with the specified transit information.
