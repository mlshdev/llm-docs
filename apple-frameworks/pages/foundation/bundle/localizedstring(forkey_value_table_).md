> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/bundle/localizedstring(forkey:value:table:)](https://developer.apple.com/documentation/foundation/bundle/localizedstring(forkey:value:table:))

# localizedString(forKey:value:table:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized version of the string designated by the specified key and residing in the specified table.

## Declaration

```swift
func localizedString(forKey key: String, value: String?, table tableName: String?) -> String
```

## Parameters

- `key`: The key for a string in the table identified by `tableName`.
- `value`: The value to return if `key` is `nil` or if a localized string for `key` can’t be found in the table.
- `tableName`: The receiver’s string table to search. If `tableName` is `nil` or is an empty string, the method attempts to use the table in `Localizable.strings`.

<a id="return-value"></a>

## Return Value

A localized version of the string designated by `key` in table `tableName`. This method returns the following when key is `nil` or not found in table:

- If `key` is `nil` and `value` is `nil`, returns an empty string.
- If `key` is `nil` and `value` is non-`nil`, returns value.
- If `key` is not found and `value` is `nil` or an empty string, returns `key`.
- If `key` is not found and `value` is non-`nil` and not empty, return `value`.

<a id="discussion"></a>

## Discussion

For more details about string localization and the specification of a `.strings` file, see “[String Resources](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html#//apple_ref/doc/uid/10000051i-CH6).”

Using the user default `NSShowNonLocalizedStrings`, you can alter the behavior of [localizedString(forKey:value:table:)](localizedstring%28forkey_value_table_%29.md) to log a message when the method can’t find a localized string. If you set this default to [true](https://developer.apple.com/documentation/swift/true) (in the global domain or in the application’s domain), then when the method can’t find a localized string in the table, it logs a message to the console and capitalizes `key` before returning it.

The following example cycles through a static array of keys when a button is clicked, gets the value for each key from a strings table named `Buttons.strings`, and sets the button title with the returned value:

```objc
- (void)changeTitle:(id)sender
{
    static int keyIndex = 0;
    NSBundle *thisBundle = [NSBundle bundleForClass:[self class]];
 
    NSString *locString = [thisBundle
        localizedStringForKey:assortedKeys[keyIndex++]
        value:@"No translation" table:@"Buttons"];
    [sender setTitle:locString];
    if (keyIndex == MAXSTRINGS) keyIndex=0;
}
```

## See Also

### Related Documentation

- [path(forResource:ofType:inDirectory:)](path%28forresource_oftype_indirectory_%29-swift.type.method.md): Returns the full pathname for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [paths(forResourcesOfType:inDirectory:)](paths%28forresourcesoftype_indirectory_%29-swift.type.method.md): Returns an array containing the pathnames for all bundle resources having the specified extension and residing in the bundle directory at the specified path.
- [paths(forResourcesOfType:inDirectory:)](paths%28forresourcesoftype_indirectory_%29-swift.method.md): Returns an array containing the pathnames for all bundle resources having the specified filename extension and residing in the resource subdirectory.
- [path(forResource:ofType:inDirectory:)](path%28forresource_oftype_indirectory_%29-swift.method.md): Returns the full pathname for the resource identified by the specified name and file extension and located in the specified bundle subdirectory.
- [path(forResource:ofType:)](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.

# localizedStringForKey:value:table: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a localized version of the string designated by the specified key and residing in the specified table.

## Declaration

```objectivec
- (NSString *) localizedStringForKey:(NSString *) key value:(NSString *) value table:(NSString *) tableName;
```

## Parameters

- `key`: The key for a string in the table identified by `tableName`.
- `value`: The value to return if `key` is `nil` or if a localized string for `key` can’t be found in the table.
- `tableName`: The receiver’s string table to search. If `tableName` is `nil` or is an empty string, the method attempts to use the table in `Localizable.strings`.

<a id="return-value"></a>

## Return Value

A localized version of the string designated by `key` in table `tableName`. This method returns the following when key is `nil` or not found in table:

- If `key` is `nil` and `value` is `nil`, returns an empty string.
- If `key` is `nil` and `value` is non-`nil`, returns value.
- If `key` is not found and `value` is `nil` or an empty string, returns `key`.
- If `key` is not found and `value` is non-`nil` and not empty, return `value`.

<a id="discussion"></a>

## Discussion

For more details about string localization and the specification of a `.strings` file, see “[String Resources](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/LoadingResources/Strings/Strings.html#//apple_ref/doc/uid/10000051i-CH6).”

Using the user default `NSShowNonLocalizedStrings`, you can alter the behavior of [localizedStringForKey:value:table:](localizedstring%28forkey_value_table_%29.md) to log a message when the method can’t find a localized string. If you set this default to [true](https://developer.apple.com/documentation/swift/true) (in the global domain or in the application’s domain), then when the method can’t find a localized string in the table, it logs a message to the console and capitalizes `key` before returning it.

The following example cycles through a static array of keys when a button is clicked, gets the value for each key from a strings table named `Buttons.strings`, and sets the button title with the returned value:

```objc
- (void)changeTitle:(id)sender
{
    static int keyIndex = 0;
    NSBundle *thisBundle = [NSBundle bundleForClass:[self class]];
 
    NSString *locString = [thisBundle
        localizedStringForKey:assortedKeys[keyIndex++]
        value:@"No translation" table:@"Buttons"];
    [sender setTitle:locString];
    if (keyIndex == MAXSTRINGS) keyIndex=0;
}
```

## See Also

### Related Documentation

- [pathForResource:ofType:inDirectory:](path%28forresource_oftype_indirectory_%29-swift.type.method.md): Returns the full pathname for the resource file identified by the specified name and extension and residing in a given bundle directory.
- [pathsForResourcesOfType:inDirectory:](paths%28forresourcesoftype_indirectory_%29-swift.type.method.md): Returns an array containing the pathnames for all bundle resources having the specified extension and residing in the bundle directory at the specified path.
- [pathsForResourcesOfType:inDirectory:](paths%28forresourcesoftype_indirectory_%29-swift.method.md): Returns an array containing the pathnames for all bundle resources having the specified filename extension and residing in the resource subdirectory.
- [pathForResource:ofType:inDirectory:](path%28forresource_oftype_indirectory_%29-swift.method.md): Returns the full pathname for the resource identified by the specified name and file extension and located in the specified bundle subdirectory.
- [pathForResource:ofType:](path%28forresource_oftype_%29.md): Returns the full pathname for the resource identified by the specified name and file extension.
