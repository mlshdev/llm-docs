> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/initwithformat:](https://developer.apple.com/documentation/foundation/nsstring/initwithformat:)

# initWithFormat:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted.

## Declaration

```objectivec
- (instancetype) initWithFormat:(NSString *) format;
```

## Parameters

- `format`: A format string. See [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) for examples of how to use this method, and [String Format Specifiers](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265) for a list of format specifiers. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `format` is `nil`.

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by using `format` as a template into which the remaining argument values are substituted according to the system locale. The returned object may be different from the original receiver.

<a id="Discussion"></a>

## Discussion

Pass a comma-separated list of variadic arguments to substitute into `format`.

This method invokes [initWithFormat:locale:arguments:](init%28format_locale_arguments_%29.md) without applying any localization. This is useful, for example, when working with fixed-format representations of information that is written out and read back in at a later time.

> **Important**

>  When working with text that’s presented to the user, use the [localizedStringWithFormat:](localizedstringwithformat_.md) method, or the [initWithFormat:locale:](initwithformat_locale_.md) or [initWithFormat:locale:arguments:](init%28format_locale_arguments_%29.md) method, passing [currentLocale](../nslocale/current.md) as the locale.

## See Also

### Creating and Initializing Strings

- [string](string.md): Returns an empty string.
- [init](init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [initWithBytes:length:encoding:](init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [initWithBytesNoCopy:length:encoding:freeWhenDone:](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [initWithCharacters:length:](init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithCharactersNoCopy:length:freeWhenDone:](init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithString:](init%28string_%29-210xa.md): Returns an `NSString` object initialized by copying the characters from another given string.
- [initWithFormat:arguments:](init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [initWithFormat:locale:](initwithformat_locale_.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale.
- [initWithFormat:locale:arguments:](init%28format_locale_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.
- [initWithData:encoding:](init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [stringWithFormat:](stringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted.
- [localizedStringWithFormat:](localizedstringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the current locale.
- [localizedUserNotificationStringForKey:arguments:](localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [stringWithCharacters:length:](stringwithcharacters_length_.md): Returns a string containing a given number of characters taken from a given C array of UTF-16 code units.
