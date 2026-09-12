> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/url(forkey:)](https://developer.apple.com/documentation/foundation/userdefaults/url(forkey:))

# url(forKey:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the URL associated with the specified key.

## Declaration

```swift
func url(forKey defaultName: String) -> URL?
```

## Parameters

- `defaultName`: The key to retrieve from the defaults database.

<a id="return-value"></a>

## Return Value

The URL associated with `defaultName`, or `nil` if the key isn’t present in the defaults database.

<a id="discussion"></a>

## Discussion

This method uses the data for the specified key to create and return a URL type. If the key is present but the method can’t use it to create a URL, this method returns `nil`. If a file URL contains a tilde (~) character in its path, this method replaces the tilde with an expanded path. If you saved a bookmark URL for the key previously, use the [URLByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:](../nsurl/urlbyresolvingbookmarkdata_options_relativetourl_bookmarkdataisstale_error_.md) method to resolve the bookmark data and retrieve an equivalent file URL.

## See Also

### Getting the value of a key

- [bool(forKey:)](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integer(forKey:)](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [float(forKey:)](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [double(forKey:)](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [string(forKey:)](string%28forkey_%29.md): Returns the string associated with the specified key.
- [stringArray(forKey:)](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [data(forKey:)](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [object(forKey:)](object%28forkey_%29.md): Returns the object associated with the specified key.
- [array(forKey:)](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionary(forKey:)](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation()](dictionaryrepresentation%28%29.md): Returns a dictionary with the union of all key-value pairs found from all domains.

# URLForKey: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the URL associated with the specified key.

## Declaration

```objectivec
- (NSURL *) URLForKey:(NSString *) defaultName;
```

## Parameters

- `defaultName`: The key to retrieve from the defaults database.

<a id="return-value"></a>

## Return Value

The URL associated with `defaultName`, or `nil` if the key isn’t present in the defaults database.

<a id="discussion"></a>

## Discussion

This method uses the data for the specified key to create and return a URL type. If the key is present but the method can’t use it to create a URL, this method returns `nil`. If a file URL contains a tilde (~) character in its path, this method replaces the tilde with an expanded path. If you saved a bookmark URL for the key previously, use the [URLByResolvingBookmarkData:options:relativeToURL:bookmarkDataIsStale:error:](../nsurl/urlbyresolvingbookmarkdata_options_relativetourl_bookmarkdataisstale_error_.md) method to resolve the bookmark data and retrieve an equivalent file URL.

## See Also

### Getting the value of a key

- [boolForKey:](bool%28forkey_%29.md): Returns the Boolean value associated with the specified key.
- [integerForKey:](integer%28forkey_%29.md): Returns the integer value associated with the specified key.
- [floatForKey:](float%28forkey_%29.md): Returns the floating-point value associated with the specified key.
- [doubleForKey:](double%28forkey_%29.md): Returns the double value associated with the specified key.
- [stringForKey:](string%28forkey_%29.md): Returns the string associated with the specified key.
- [stringArrayForKey:](stringarray%28forkey_%29.md): Returns the array of strings associated with the specified key.
- [dataForKey:](data%28forkey_%29.md): Returns the data object associated with the specified key.
- [objectForKey:](object%28forkey_%29.md): Returns the object associated with the specified key.
- [arrayForKey:](array%28forkey_%29.md): Returns the array associated with the specified key.
- [dictionaryForKey:](dictionary%28forkey_%29.md): Returns the dictionary object associated with the specified key.
- [dictionaryRepresentation](dictionaryrepresentation%28%29.md): Returns a dictionary with the union of all key-value pairs found from all domains.
