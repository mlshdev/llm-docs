> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/init(string:)-210xa](https://developer.apple.com/documentation/foundation/nsstring/init(string:)-210xa)

# init(string:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by copying the characters from another given string.

## Declaration

```swift
convenience init(string aString: String)
```

## Parameters

- `aString`: The string from which to copy characters. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `aString` is `nil`.

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by copying the characters from `aString`. The returned object may be different from the original receiver.

## See Also

### Creating and Initializing Strings

- [init()](init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [init(bytes:length:encoding:)](init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [init(bytesNoCopy:length:encoding:freeWhenDone:)](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [init(characters:length:)](init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(charactersNoCopy:length:freeWhenDone:)](init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(format:arguments:)](init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [init(format:locale:arguments:)](init%28format_locale_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.
- [init(data:encoding:)](init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [localizedUserNotificationString(forKey:arguments:)](localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [localizedStringWithFormat(\_:\_:)](localizedstringwithformat%28____%29.md)
- [unichar](../unichar.md): Type for UTF-16 code units.

# initWithString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an `NSString` object initialized by copying the characters from another given string.

## Declaration

```objectivec
- (instancetype) initWithString:(NSString *) aString;
```

## Parameters

- `aString`: The string from which to copy characters. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `aString` is `nil`.

<a id="return-value"></a>

## Return Value

An `NSString` object initialized by copying the characters from `aString`. The returned object may be different from the original receiver.

## See Also

### Related Documentation

- [stringWithString:](stringwithstring_.md): Returns a string created by copying the characters from another given string.

### Creating and Initializing Strings

- [string](string.md): Returns an empty string.
- [init](init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [initWithBytes:length:encoding:](init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [initWithBytesNoCopy:length:encoding:freeWhenDone:](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [initWithCharacters:length:](init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithCharactersNoCopy:length:freeWhenDone:](init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [initWithFormat:](initwithformat_.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted.
- [initWithFormat:arguments:](init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [initWithFormat:locale:](initwithformat_locale_.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale.
- [initWithFormat:locale:arguments:](init%28format_locale_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.
- [initWithData:encoding:](init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [stringWithFormat:](stringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted.
- [localizedStringWithFormat:](localizedstringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the current locale.
- [localizedUserNotificationStringForKey:arguments:](localizedusernotificationstring%28forkey_arguments_%29.md): Returns a localized string intended for display in a notification alert.
- [stringWithCharacters:length:](stringwithcharacters_length_.md): Returns a string containing a given number of characters taken from a given C array of UTF-16 code units.
