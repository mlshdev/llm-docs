> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattercreatestringwithvalue(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattercreatestringwithvalue(_:_:_:_:))

# CFNumberFormatterCreateStringWithValue(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given number or value using the specified number formatter.

## Declaration

```swift
func CFNumberFormatterCreateStringWithValue(_ allocator: CFAllocator!, _ formatter: CFNumberFormatter!, _ numberType: CFNumberType, _ valuePtr: UnsafeRawPointer!) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `formatter`: The number formatter to use.
- `numberType`: The type of value that `valuePtr` references. Valid values are listed in [CFNumberType](cfnumbertype.md).
- `valuePtr`: A pointer to the value to be converted.

<a id="return-value"></a>

## Return Value

A new string that represents the given number or value formatted by `formatter`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString(\_:\_:\_:\_:\_:)](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber(\_:\_:\_:)](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode(\_:\_:\_:)](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString(\_:\_:\_:\_:\_:)](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.

# CFNumberFormatterCreateStringWithValue (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given number or value using the specified number formatter.

## Declaration

```objectivec
extern CFStringRefCFNumberFormatterCreateStringWithValue(CFAllocatorRef allocator, CFNumberFormatterRef formatter, CFNumberType numberType, const void *valuePtr);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `formatter`: The number formatter to use.
- `numberType`: The type of value that `valuePtr` references. Valid values are listed in [CFNumberType](cfnumbertype.md).
- `valuePtr`: A pointer to the value to be converted.

<a id="return-value"></a>

## Return Value

A new string that represents the given number or value formatted by `formatter`. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithNumber](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.
