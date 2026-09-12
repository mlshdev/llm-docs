> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/numberformatter/getobjectvalue(_:for:range:)](https://developer.apple.com/documentation/foundation/numberformatter/getobjectvalue(_:for:range:))

# getObjectValue(\_:for:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a cell-content object after creating it from a range of characters in a given string.

## Declaration

```swift
func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, range rangep: UnsafeMutablePointer<NSRange>?) throws
```

## Parameters

- `obj`: On return, contains an instance of [NSDecimalNumber](../nsdecimalnumber.md) or [NSNumber](../nsnumber.md) based on the current value of the [generatesDecimalNumbers](generatesdecimalnumbers.md) property. Returns `nil` by reference if conversion failed.
- `string`: A string object with the range of characters specified in `rangep` that is used to create `anObject`.
- `rangep`: A range of characters in `aString`. On return, contains the actual range of characters used to create the object.

<a id="Discussion"></a>

## Discussion

If a string contains any characters other than numerical digits or locale-appropriate group or decimal separators, parsing will fail.

Any leading or trailing space separator characters in a string are ignored. For example, the strings “ 5”, “5 “, and “5” all produce the number `5`.

If there is an error, this method calls `control(_:didFailToFormatString:errorDescription:)` on the delegate.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Converting Between Numbers and Strings

- [number(from:)](number%28from_%29.md): Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.
- [string(from:)](string%28from_%29.md): Returns a string containing the formatted value of the provided number object.
- [localizedString(from:number:)](localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.

# getObjectValue:forString:range:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a cell-content object after creating it from a range of characters in a given string.

## Declaration

```objectivec
- (BOOL) getObjectValue:(id*) obj forString:(NSString *) string range:(NSRange *) rangep error:(NSError **) error;
```

## Parameters

- `obj`: On return, contains an instance of [NSDecimalNumber](../nsdecimalnumber.md) or [NSNumber](../nsnumber.md) based on the current value of the [generatesDecimalNumbers](generatesdecimalnumbers.md) property. Returns `nil` by reference if conversion failed.
- `string`: A string object with the range of characters specified in `rangep` that is used to create `anObject`.
- `rangep`: A range of characters in `aString`. On return, contains the actual range of characters used to create the object.
- `error`: If an error occurs, upon return contains an `NSError` object in the [NSCocoaErrorDomain](../nscocoaerrordomain.md) with code [NSFormattingError](../nsformattingerror-swift.var.md) that explains why the conversion failed. If you pass in `nil` for `error` you are indicating that you are not interested in error information.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the conversion from string to cell-content object was successful, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If a string contains any characters other than numerical digits or locale-appropriate group or decimal separators, parsing will fail.

Any leading or trailing space separator characters in a string are ignored. For example, the strings “ 5”, “5 “, and “5” all produce the number `5`.

If there is an error, this method calls `control(_:didFailToFormatString:errorDescription:)` on the delegate.

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Converting Between Numbers and Strings

- [numberFromString:](number%28from_%29.md): Returns an [NSNumber](../nsnumber.md) object created by parsing a given string.
- [stringFromNumber:](string%28from_%29.md): Returns a string containing the formatted value of the provided number object.
- [localizedStringFromNumber:numberStyle:](localizedstring%28from_number_%29.md): Returns a localized number string with the specified style.
