> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/localizedusernotificationstring(forkey:arguments:)](https://developer.apple.com/documentation/foundation/nsstring/localizedusernotificationstring(forkey:arguments:))

# localizedUserNotificationString(forKey:arguments:) (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Returns a localized string intended for display in a notification alert.

## Declaration

```swift
class func localizedUserNotificationString(forKey key: String, arguments: [Any]?) -> String
```

## Parameters

- `key`: The key to use when looking up the string in the app’s `Localizable.strings` file.
- `arguments`: An array of values to substitute for escaped characters in the string.

<a id="return-value"></a>

## Return Value

A string whose value is created dynamically from a localized string resource. If a string resource corresponding to the specified `key` cannot be found, this method returns `key`.

<a id="Discussion"></a>

## Discussion

When configuring the content of a local notification using the User Notifications framework, use this method to create strings whose contents are stored in your app’s `Localizable.strings` file. When the notification is about to be displayed, the string object uses the key and arguments you specify to load the appropriate localized version of the string. If the localized string has any escaped character sequences—that is, special characters proceeded by a percent (%) sign—those character sequences are replaced by the values in the `arguments` parameter.

For information about how strings are formatted, see [String Resources](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html#//apple_ref/doc/uid/10000051i-CH6) in [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

## See Also

### Creating and Initializing Strings

- [init()](init%28%29.md): Returns an initialized `NSString` object that contains no characters.
- [init(bytes:length:encoding:)](init%28bytes_length_encoding_%29.md): Returns an initialized `NSString` object containing a given number of bytes from a given buffer of bytes interpreted in a given encoding.
- [init(bytesNoCopy:length:encoding:freeWhenDone:)](init%28bytesnocopy_length_encoding_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of bytes from a given buffer of bytes interpreted in a given encoding, and optionally frees the buffer.
- [init(characters:length:)](init%28characters_length_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(charactersNoCopy:length:freeWhenDone:)](init%28charactersnocopy_length_freewhendone_%29.md): Returns an initialized `NSString` object that contains a given number of characters from a given C array of UTF-16 code units.
- [init(string:)](init%28string_%29-210xa.md): Returns an `NSString` object initialized by copying the characters from another given string.
- [init(format:arguments:)](init%28format_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted without any localization.
- [init(format:locale:arguments:)](init%28format_locale_arguments_%29.md): Returns an `NSString` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information. This method is meant to be called from within a variadic function, where the argument list will be available.
- [init(data:encoding:)](init%28data_encoding_%29.md): Returns an `NSString` object initialized by converting given data into UTF-16 code units using a given encoding.
- [localizedStringWithFormat(\_:\_:)](localizedstringwithformat%28____%29.md)
- [unichar](../unichar.md): Type for UTF-16 code units.

# localizedUserNotificationStringForKey:arguments: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · visionOS 1.0+ · watchOS 3.0+

Returns a localized string intended for display in a notification alert.

## Declaration

```objectivec
+ (NSString *) localizedUserNotificationStringForKey:(NSString *) key arguments:(NSArray *) arguments;
```

## Parameters

- `key`: The key to use when looking up the string in the app’s `Localizable.strings` file.
- `arguments`: An array of values to substitute for escaped characters in the string.

<a id="return-value"></a>

## Return Value

A string whose value is created dynamically from a localized string resource. If a string resource corresponding to the specified `key` cannot be found, this method returns `key`.

<a id="Discussion"></a>

## Discussion

When configuring the content of a local notification using the User Notifications framework, use this method to create strings whose contents are stored in your app’s `Localizable.strings` file. When the notification is about to be displayed, the string object uses the key and arguments you specify to load the appropriate localized version of the string. If the localized string has any escaped character sequences—that is, special characters proceeded by a percent (%) sign—those character sequences are replaced by the values in the `arguments` parameter.

For information about how strings are formatted, see [String Resources](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html#//apple_ref/doc/uid/10000051i-CH6) in [Resource Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Introduction/Introduction.html#//apple_ref/doc/uid/10000051i).

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
- [localizedStringWithFormat:](localizedstringwithformat_.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the current locale.
- [stringWithCharacters:length:](stringwithcharacters_length_.md): Returns a string containing a given number of characters taken from a given C array of UTF-16 code units.
