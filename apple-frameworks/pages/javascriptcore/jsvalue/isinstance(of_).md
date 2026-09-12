> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/isinstance(of:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/isinstance(of:))

# isInstance(of:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.

## Declaration

```swift
func isInstance(of value: Any!) -> Bool
```

## Parameters

- `value`: The value to be compared against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this value inherits from `value`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is analogous to the `instanceof` operator in JavaScript: it tests for the presence of the specified value’s constructor prototype in this value’s prototype chain.

## See Also

### Comparing JavaScript Values

- [isEqual(to:)](isequal%28to_%29.md): Compares the value to another for strict equality.
- [isEqualWithTypeCoercion(to:)](isequalwithtypecoercion%28to_%29.md): Compares the value to another for equivalence, allowing type conversion.

# isInstanceOf: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.

## Declaration

```objectivec
- (BOOL) isInstanceOf:(id) value;
```

## Parameters

- `value`: The value to be compared against.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this value inherits from `value`; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method is analogous to the `instanceof` operator in JavaScript: it tests for the presence of the specified value’s constructor prototype in this value’s prototype chain.

## See Also

### Comparing JavaScript Values

- [isEqualToObject:](isequal%28to_%29.md): Compares the value to another for strict equality.
- [isEqualWithTypeCoercionToObject:](isequalwithtypecoercion%28to_%29.md): Compares the value to another for equivalence, allowing type conversion.
