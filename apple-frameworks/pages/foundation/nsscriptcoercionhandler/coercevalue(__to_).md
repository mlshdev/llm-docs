> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptcoercionhandler/coercevalue(_:to:)](https://developer.apple.com/documentation/foundation/nsscriptcoercionhandler/coercevalue(_:to:))

# coerceValue(\_:to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an object of a given class representing a given value.

## Declaration

```swift
func coerceValue(_ value: Any, to toClass: AnyClass) -> Any?
```

## Parameters

- `value`: The value to coerce.
- `toClass`: The class with which to represent `value`.

<a id="return-value"></a>

## Return Value

An object of the class `toClass` representing the value specified by `value`. Returns `nil` if an error occurs.

## See Also

### Working with handlers

- [registerCoercer(\_:selector:toConvertFrom:to:)](registercoercer%28__selector_toconvertfrom_to_%29.md): Registers a given object (typically a class) to handle coercions (conversions) from one given class to another.

# coerceValue:toClass: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns an object of a given class representing a given value.

## Declaration

```objectivec
- (id) coerceValue:(id) value toClass:(Class) toClass;
```

## Parameters

- `value`: The value to coerce.
- `toClass`: The class with which to represent `value`.

<a id="return-value"></a>

## Return Value

An object of the class `toClass` representing the value specified by `value`. Returns `nil` if an error occurs.

## See Also

### Working with handlers

- [registerCoercer:selector:toConvertFromClass:toClass:](registercoercer%28__selector_toconvertfrom_to_%29.md): Registers a given object (typically a class) to handle coercions (conversions) from one given class to another.
