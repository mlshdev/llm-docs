> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(format:locale:arguments:)](https://developer.apple.com/documentation/foundation/nsstring/init(format:locale:arguments:))

# init(format:locale:arguments:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.

## Declaration

```swift
convenience init(format: String, locale: Any?, arguments argList: CVaListPointer)
```

## Parameters

- `format`: A format string. See [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) for examples of how to use this method, and [String Format Specifiers](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265) for a list of format specifiers. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `format` is `nil`.
- `locale`: An [NSLocale](../nslocale.md) object specifying the locale to use. To use the current locale (specified by user preferences), pass \[[NSLocale](../nslocale.md) [current](../nslocale/current.md)\]. To use the system locale, pass `nil`.

  For legacy support, this may be an instance of `NSDictionary` containing locale information.
- `argList`: A list of arguments to substitute into `format`.

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by using `format` as a template into which values in `argList` are substituted according the locale information in `locale`. The returned object may be different from the original receiver.

<a id="Discussion"></a>

## Discussion

The following Objective-C code fragment illustrates how to create a string from `myArgs`, which is derived from a string object with the value “Cost:” and an int with the value 32:

```objc
va_list myArgs;
 
NSString *myString = [[NSString alloc] initWithFormat:@"%@: %d\n"
                                               locale:[NSLocale currentLocale]
                                            arguments:myArgs];
```

The resulting string has the value “`Cost: 32\n`”.

See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for more information.

## See Also

### Creating and Initializing Strings

- [init()](init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [init(bytes:length:encoding:)](init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [init(bytesNoCopy:length:encoding:freeWhenDone:)](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [init(characters:length:)](init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(charactersNoCopy:length:freeWhenDone:)](init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(string:)](init%28string_%29-210xa.md): Returns an `NSString` object initialized by copying the characters from another given string.
- [init(format:arguments:)](init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [init(data:encoding:)](init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [localizedUserNotificationString(forKey:arguments:)](localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [localizedStringWithFormat(\_:\_:)](localizedstringwithformat%28____%29.md)
- [unichar](../unichar.md): Type for UTF-16 code units.

# initWithFormat:locale:arguments: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.

## Declaration

```objectivec
- (instancetype) initWithFormat:(NSString *) format locale:(id) locale arguments:(va_list) argList;
```

## Parameters

- `format`: A format string. See [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) for examples of how to use this method, and [String Format Specifiers](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265) for a list of format specifiers. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `format` is `nil`.
- `locale`: An [NSLocale](../nslocale.md) object specifying the locale to use. To use the current locale (specified by user preferences), pass \[[NSLocale](../nslocale.md) [currentLocale](../nslocale/current.md)\]. To use the system locale, pass `nil`.

  For legacy support, this may be an instance of `NSDictionary` containing locale information.
- `argList`: A list of arguments to substitute into `format`.

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by using `format` as a template into which values in `argList` are substituted according the locale information in `locale`. The returned object may be different from the original receiver.

<a id="Discussion"></a>

## Discussion

The following Objective-C code fragment illustrates how to create a string from `myArgs`, which is derived from a string object with the value “Cost:” and an int with the value 32:

```objc
va_list myArgs;
 
NSString *myString = [[NSString alloc] initWithFormat:@"%@: %d\n"
                                               locale:[NSLocale currentLocale]
                                            arguments:myArgs];
```

The resulting string has the value “`Cost: 32\n`”.

See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for more information.

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
- [initWithData:encoding:](init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [stringWithFormat:](stringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted.
- [localizedStringWithFormat:](localizedstringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the current locale.
- [localizedUserNotificationStringForKey:arguments:](localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [stringWithCharacters:length:](stringwithcharacters_length_.md): Returns a string containing a given number of characters taken from a given C array of UTF-16 code units.
