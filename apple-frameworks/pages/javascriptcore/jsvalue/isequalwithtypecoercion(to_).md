> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/isequalwithtypecoercion(to:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/isequalwithtypecoercion(to:))

# isEqualWithTypeCoercion(to:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Compares the value to another for equivalence, allowing type conversion.

## Declaration

```swift
func isEqualWithTypeCoercion(to value: Any!) -> Bool
```

## Parameters

- `value`: The value to be compared against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the values are equivalent; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is analogous to the equality operator `==` in JavaScript: it first converts its operands to the same type (if they are not already of the same type), then applies a strict equality comparison to the result. JavaScript object values are equal if and only if they refer to the same object instance.

## See Also

### Comparing JavaScript Values

- [isEqual(to:)](isequal%28to_%29.md): Compares the value to another for strict equality.
- [isInstance(of:)](isinstance%28of_%29.md): Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.

# isEqualWithTypeCoercionToObject: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Compares the value to another for equivalence, allowing type conversion.

## Declaration

```objectivec
- (BOOL) isEqualWithTypeCoercionToObject:(id) value;
```

## Parameters

- `value`: The value to be compared against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the values are equivalent; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is analogous to the equality operator `==` in JavaScript: it first converts its operands to the same type (if they are not already of the same type), then applies a strict equality comparison to the result. JavaScript object values are equal if and only if they refer to the same object instance.

## See Also

### Comparing JavaScript Values

- [isEqualToObject:](isequal%28to_%29.md): Compares the value to another for strict equality.
- [isInstanceOf:](isinstance%28of_%29.md): Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.
