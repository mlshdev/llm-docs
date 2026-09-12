> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/addingpercentencoding(withallowedcharacters:)](https://developer.apple.com/documentation/foundation/nsstring/addingpercentencoding(withallowedcharacters:))

# addingPercentEncoding(withAllowedCharacters:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.

## Declaration

```swift
func addingPercentEncoding(withAllowedCharacters allowedCharacters: CharacterSet) -> String?
```

## Parameters

- `allowedCharacters`: The characters not replaced in the string. Typically, you specify one of the predefined character sets for a particular URL component, such as [urlPathAllowed](../nscharacterset/urlpathallowed.md) or [urlQueryAllowed](../nscharacterset/urlqueryallowed.md).

<a id="return-value"></a>

## Return Value

Returns the encoded string, or `nil` if the transformation is not possible.

<a id="Discussion"></a>

## Discussion

Entire URL strings cannot be percent-encoded, because each URL component specifies a different set of allowed characters. For example, the query component of a URL allows the “`@`” character, but that character must be percent-encoded in the password component.

UTF-8 encoding is used to determine the correct percent-encoded characters. Any characters in `allowedCharacters` outside of the 7-bit ASCII range are ignored.

> **Important**

>  You must not call this method on strings that are already percent-encoded. Calling this method on strings that are already percent-encoded will cause percent characters in a percent-encoded sequence to be percent-encoded twice.

## See Also

### Related Documentation

- [replacingPercentEscapes(using:)](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
- [addingPercentEscapes(using:)](addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.

### Working with URL Strings

- [removingPercentEncoding](removingpercentencoding.md): Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.

# stringByAddingPercentEncodingWithAllowedCharacters: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.

## Declaration

```objectivec
- (NSString *) stringByAddingPercentEncodingWithAllowedCharacters:(NSCharacterSet *) allowedCharacters;
```

## Parameters

- `allowedCharacters`: The characters not replaced in the string. Typically, you specify one of the predefined character sets for a particular URL component, such as [URLPathAllowedCharacterSet](../nscharacterset/urlpathallowed.md) or [URLQueryAllowedCharacterSet](../nscharacterset/urlqueryallowed.md).

<a id="return-value"></a>

## Return Value

Returns the encoded string, or `nil` if the transformation is not possible.

<a id="Discussion"></a>

## Discussion

Entire URL strings cannot be percent-encoded, because each URL component specifies a different set of allowed characters. For example, the query component of a URL allows the “`@`” character, but that character must be percent-encoded in the password component.

UTF-8 encoding is used to determine the correct percent-encoded characters. Any characters in `allowedCharacters` outside of the 7-bit ASCII range are ignored.

> **Important**

>  You must not call this method on strings that are already percent-encoded. Calling this method on strings that are already percent-encoded will cause percent characters in a percent-encoded sequence to be percent-encoded twice.

## See Also

### Related Documentation

- [stringByReplacingPercentEscapesUsingEncoding:](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
- [stringByAddingPercentEscapesUsingEncoding:](addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.

### Working with URL Strings

- [stringByRemovingPercentEncoding](removingpercentencoding.md): Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.
