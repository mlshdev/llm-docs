> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/number(from:)](https://developer.apple.com/documentation/foundation/numberformatter/number(from:))

# number(from:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.

## Declaration

```swift
func number(from string: String) -> NSNumber?
```

## Parameters

- `string`: An [NSString](../nsstring.md) object that is parsed to generate the returned number object.

<a id="return-value"></a>

## Return Value

An [NSNumber](../nsnumber.md) object created by parsing `string` using the receiver’s format, or `nil` if no single number could be parsed.

<a id="Discussion"></a>

## Discussion

If a string contains any characters other than numerical digits or locale-appropriate group or decimal separators, parsing will fail.

Any leading or trailing space separator characters in a string are ignored. For example, the strings “ 5”, “5 “, and “5” all produce the number `5`.

## See Also

### Converting Between Numbers and Strings

- [getObjectValue(\_:for:range:)](getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [string(from:)](string%28from_%29.md): Returns a string containing the formatted value of the provided number object.
- [localizedString(from:number:)](localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.

# numberFromString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.

## Declaration

```objectivec
- (NSNumber *) numberFromString:(NSString *) string;
```

## Parameters

- `string`: An [NSString](../nsstring.md) object that is parsed to generate the returned number object.

<a id="return-value"></a>

## Return Value

An [NSNumber](../nsnumber.md) object created by parsing `string` using the receiver’s format, or `nil` if no single number could be parsed.

<a id="Discussion"></a>

## Discussion

If a string contains any characters other than numerical digits or locale-appropriate group or decimal separators, parsing will fail.

Any leading or trailing space separator characters in a string are ignored. For example, the strings “ 5”, “5 “, and “5” all produce the number `5`.

## See Also

### Converting Between Numbers and Strings

- [getObjectValue:forString:range:error:](getobjectvalue%28__for_range_%29.md): Returns by reference a cell-content object after creating it from a range of characters in a given string.
- [stringFromNumber:](string%28from_%29.md): Returns a string containing the formatted value of the provided number object.
- [localizedStringFromNumber:numberStyle:](localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.
