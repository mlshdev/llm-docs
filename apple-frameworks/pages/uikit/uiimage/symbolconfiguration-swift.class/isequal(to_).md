> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimage/symbolconfiguration-swift.class/isequal(to:)](https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration-swift.class/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the configuration objects are equivalent.

## Declaration

```swift
func isEqual(to otherConfiguration: UIImage.SymbolConfiguration?) -> Bool
```

## Parameters

- `otherConfiguration`: The other configuration object. Specify `nil` to compare the current configuration object to the configuration object in the [unspecified](unspecified.md) property.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the trait collections and image configuration values of both objects match; otherwise, [false](https://developer.apple.com/documentation/swift/false).

# isEqualToConfiguration: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a Boolean value that indicates whether the configuration objects are equivalent.

## Declaration

```objectivec
- (BOOL) isEqualToConfiguration:(UIImageSymbolConfiguration *) otherConfiguration;
```

## Parameters

- `otherConfiguration`: The other configuration object. Specify `nil` to compare the current configuration object to the configuration object in the [unspecifiedConfiguration](unspecified.md) property.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the trait collections and image configuration values of both objects match; otherwise, [false](https://developer.apple.com/documentation/swift/false).
