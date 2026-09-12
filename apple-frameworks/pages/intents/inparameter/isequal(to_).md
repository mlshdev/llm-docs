> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inparameter/isequal(to:)](https://developer.apple.com/documentation/intents/inparameter/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether the specified parameter object represents the same property as the current parameter object.

## Declaration

```swift
func isEqual(to parameter: INParameter) -> Bool
```

## Parameters

- `parameter`: The parameter object to compare to this one.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two parameter objects represent the same property of the interaction object, or [false](https://developer.apple.com/documentation/swift/false) if they do not.

# isEqualToParameter: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Returns a Boolean value indicating whether the specified parameter object represents the same property as the current parameter object.

## Declaration

```objectivec
- (BOOL) isEqualToParameter:(INParameter *) parameter;
```

## Parameters

- `parameter`: The parameter object to compare to this one.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the two parameter objects represent the same property of the interaction object, or [false](https://developer.apple.com/documentation/swift/false) if they do not.
