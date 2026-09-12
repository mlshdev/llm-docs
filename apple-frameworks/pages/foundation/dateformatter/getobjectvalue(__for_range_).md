> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/dateformatter/getobjectvalue(_:for:range:)](https://developer.apple.com/documentation/foundation/dateformatter/getobjectvalue(_:for:range:))

# getObjectValue(\_:for:range:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.

## Declaration

```swift
func getObjectValue(_ obj: AutoreleasingUnsafeMutablePointer<AnyObject?>?, for string: String, range rangep: UnsafeMutablePointer<NSRange>?) throws
```

## Parameters

- `obj`: If the receiver is able to parse `string`, upon return contains a date representation of `string`.
- `string`: The string to parse.
- `rangep`: If the receiver is able to parse `string`, upon return contains the range of `string` used to create the date.

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [string(for:)](../formatter/string%28for_%29.md): The default implementation of this method raises an exception.

### Converting Objects

- [date(from:)](date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [string(from:)](string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [localizedString(from:dateStyle:timeStyle:)](localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.

# getObjectValue:forString:range:error: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference a date representation of a specified string and its date range, as well as a Boolean value that indicates whether the system can parse the string.

## Declaration

```objectivec
- (BOOL) getObjectValue:(id*) obj forString:(NSString *) string range:(NSRange *) rangep error:(NSError **) error;
```

## Parameters

- `obj`: If the receiver is able to parse `string`, upon return contains a date representation of `string`.
- `string`: The string to parse.
- `rangep`: If the receiver is able to parse `string`, upon return contains the range of `string` used to create the date.
- `error`: If the receiver is unable to create a date by parsing `string`, upon return contains an NSError object that describes the problem.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver can create a date by parsing `string`, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

> **Handling Errors in Swift**

>  In Swift, this method returns `Void` and is marked with the `throws` keyword to indicate that it throws an error in cases of failure.
>
> You call this method in a `try` expression and handle any errors in the `catch` clauses of a `do` statement, as described in [Error Handling](https://docs.swift.org/swift-book/LanguageGuide/ErrorHandling.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) and `About Imported Cocoa Error Parameters`.

## See Also

### Related Documentation

- [stringForObjectValue:](../formatter/string%28for_%29.md): The default implementation of this method raises an exception.

### Converting Objects

- [dateFromString:](date%28from_%29.md): Returns a date representation of a specified string that the system interprets using the receiver’s current settings.
- [stringFromDate:](string%28from_%29.md): Returns a string representation of a specified date that the system formats using the receiver’s current settings.
- [localizedStringFromDate:dateStyle:timeStyle:](localizedstring%28from_datestyle_timestyle_%29.md): Returns a string representation of a specified date, that the system formats for the current locale using the specified date and time styles.
