> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/isequal(to:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Compares the value to another for strict equality.

## Declaration

```swift
func isEqual(to value: Any!) -> Bool
```

## Parameters

- `value`: The value to be compared against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the values are strictly equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is analogous to the identity or strict equality operator `===` in JavaScript.

## See Also

### Comparing JavaScript Values

- [isEqualWithTypeCoercion(to:)](isequalwithtypecoercion%28to_%29.md): Compares the value to another for equivalence, allowing type conversion.
- [isInstance(of:)](isinstance%28of_%29.md): Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.

# isEqualToObject: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Compares the value to another for strict equality.

## Declaration

```objectivec
- (BOOL) isEqualToObject:(id) value;
```

## Parameters

- `value`: The value to be compared against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the values are strictly equal; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is analogous to the identity or strict equality operator `===` in JavaScript.

## See Also

### Comparing JavaScript Values

- [isEqualWithTypeCoercionToObject:](isequalwithtypecoercion%28to_%29.md): Compares the value to another for equivalence, allowing type conversion.
- [isInstanceOf:](isinstance%28of_%29.md): Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.
