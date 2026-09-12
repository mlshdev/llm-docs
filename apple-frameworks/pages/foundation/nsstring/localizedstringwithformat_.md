> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/localizedstringwithformat:](https://developer.apple.com/documentation/foundation/nsstring/localizedstringwithformat:)

# localizedStringWithFormat:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the current locale.

## Declaration

```objectivec
+ (instancetype) localizedStringWithFormat:(NSString *) format;
```

## Parameters

- `format`: A format string. See [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) for examples of how to use this method, and [String Format Specifiers](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265) for a list of format specifiers. This value must not be `nil`.

  Raises an `NSInvalidArgumentException` if `format` is `nil`.

<a id="return-value"></a>

## Return Value

A string created by using `format` as a template into which the following argument values are substituted according to the formatting information in the current locale.

<a id="Discussion"></a>

## Discussion

Pass a comma-separated list of variadic arguments to substitute into `format`.

This method is equivalent to using [initWithFormat:locale:](initwithformat_locale_.md) and passing the current locale as the locale argument.

As an example of formatting, this method replaces the decimal according to the locale in `%f` and `%d` substitutions, and calls [descriptionWithLocale:](../nsnumber/description%28withlocale_%29.md) instead of [description](../../objectivec/nsobject-swift.class/description%28%29.md) where necessary.

This code excerpt creates a string from another string and a float:

```objc
NSString *myString = [NSString localizedStringWithFormat:@"%@:  %f\n", @"Cost", 1234.56];
```

The resulting string has the value “`Cost: 1234.560000\n`” if the locale is `en_US`, and “`Cost: 1234,560000\n`” if the locale is `fr_FR`.

See [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) for more information.

## See Also

### Creating and Initializing Strings

- [string](string.md): Returns an empty string.
- [init](init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [initWithBytes:length:encoding:](init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [initWithBytesNoCopy:length:encoding:freeWhenDone:](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [initWithCharacters:length:](init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithCharactersNoCopy:length:freeWhenDone:](init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithString:](init%28string_%29-210xa.md): Returns an `NSString` object initialized by copying the characters from another given string.
- [initWithFormat:](initwithformat_.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted.
- [initWithFormat:arguments:](init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [initWithFormat:locale:](initwithformat_locale_.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale.
- [initWithFormat:locale:arguments:](init%28format_locale_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.
- [initWithData:encoding:](init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [stringWithFormat:](stringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted.
- [localizedUserNotificationStringForKey:arguments:](localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [stringWithCharacters:length:](stringwithcharacters_length_.md): Returns a string containing a given number of characters taken from a given C array of UTF-16 code units.
