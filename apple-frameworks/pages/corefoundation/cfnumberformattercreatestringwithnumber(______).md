> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattercreatestringwithnumber(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattercreatestringwithnumber(_:_:_:))

# CFNumberFormatterCreateStringWithNumber(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given number using the specified number formatter.

## Declaration

```swift
func CFNumberFormatterCreateStringWithNumber(_ allocator: CFAllocator!, _ formatter: CFNumberFormatter!, _ number: CFNumber!) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `formatter`: The number formatter to use.
- `number`: The number from which to create a string representation.

<a id="return-value"></a>

## Return Value

A new string that represents the given number in the specified format. Returns `NULL` if there was a problem creating the string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString(\_:\_:\_:\_:\_:)](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithValue(\_:\_:\_:\_:)](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode(\_:\_:\_:)](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString(\_:\_:\_:\_:\_:)](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.

# CFNumberFormatterCreateStringWithNumber (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given number using the specified number formatter.

## Declaration

```objectivec
extern CFStringRefCFNumberFormatterCreateStringWithNumber(CFAllocatorRef allocator, CFNumberFormatterRef formatter, CFNumberRef number);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `formatter`: The number formatter to use.
- `number`: The number from which to create a string representation.

<a id="return-value"></a>

## Return Value

A new string that represents the given number in the specified format. Returns `NULL` if there was a problem creating the string. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Formatting Values

- [CFNumberFormatterCreateNumberFromString](cfnumberformattercreatenumberfromstring%28__________%29.md): Returns a number object representing a given string.
- [CFNumberFormatterCreateStringWithValue](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.
