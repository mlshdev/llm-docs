> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfnumberformattercreatenumberfromstring(_:_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfnumberformattercreatenumberfromstring(_:_:_:_:_:))

# CFNumberFormatterCreateNumberFromString(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a number object representing a given string.

## Declaration

```swift
func CFNumberFormatterCreateNumberFromString(_ allocator: CFAllocator!, _ formatter: CFNumberFormatter!, _ string: CFString!, _ rangep: UnsafeMutablePointer<CFRange>!, _ options: CFOptionFlags) -> CFNumber!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `formatter`: The number formatter to use.
- `string`: The string to parse.
- `rangep`: A reference to a range that specifies the substring of  `string` to be parsed. If `NULL`, the whole string is parsed. On return, contains the range of the actual extent of the parse (may be less than the given range).
- `options`: Specifies various configuration options to change the behavior of the parse. Currently, [parseIntegersOnly](cfnumberformatteroptionflags/parseintegersonly.md) is the only possible value for this parameter.

<a id="return-value"></a>

## Return Value

A new number that represents the given string. Returns `NULL` if there was a problem creating the number. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Formatting Values

- [CFNumberFormatterCreateStringWithNumber(\_:\_:\_:)](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue(\_:\_:\_:\_:)](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode(\_:\_:\_:)](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString(\_:\_:\_:\_:\_:)](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.

# CFNumberFormatterCreateNumberFromString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a number object representing a given string.

## Declaration

```objectivec
extern CFNumberRefCFNumberFormatterCreateNumberFromString(CFAllocatorRef allocator, CFNumberFormatterRef formatter, CFStringRef string, CFRange *rangep, CFOptionFlags options);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or [kCFAllocatorDefault](kcfallocatordefault.md) to use the current default allocator.
- `formatter`: The number formatter to use.
- `string`: The string to parse.
- `rangep`: A reference to a range that specifies the substring of  `string` to be parsed. If `NULL`, the whole string is parsed. On return, contains the range of the actual extent of the parse (may be less than the given range).
- `options`: Specifies various configuration options to change the behavior of the parse. Currently, [kCFNumberFormatterParseIntegersOnly](cfnumberformatteroptionflags/parseintegersonly.md) is the only possible value for this parameter.

<a id="return-value"></a>

## Return Value

A new number that represents the given string. Returns `NULL` if there was a problem creating the number. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Formatting Values

- [CFNumberFormatterCreateStringWithNumber](cfnumberformattercreatestringwithnumber%28______%29.md): Returns a string representation of the given number using the specified number formatter.
- [CFNumberFormatterCreateStringWithValue](cfnumberformattercreatestringwithvalue%28________%29.md): Returns a string representation of the given number or value using the specified number formatter.
- [CFNumberFormatterGetDecimalInfoForCurrencyCode](cfnumberformattergetdecimalinfoforcurrencycode%28______%29.md): Returns the number of fraction digits that should be displayed, and the rounding increment, for a given currency.
- [CFNumberFormatterGetValueFromString](cfnumberformattergetvaluefromstring%28__________%29.md): Returns a number or value representing a given string.
