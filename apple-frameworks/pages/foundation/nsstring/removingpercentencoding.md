> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/removingpercentencoding](https://developer.apple.com/documentation/foundation/nsstring/removingpercentencoding)

# removingPercentEncoding (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.

## Declaration

```swift
var removingPercentEncoding: String? { get }
```

<a id="return-value"></a>

## Return Value

A new string with the percent-encoded sequences removed, or `nil` if the receiver contains an invalid percent-encoding sequence.

<a id="discussion"></a>

## Discussion

> **Important**

>  You must call this method only on strings that you know to be percent-encoded. Calling this method on strings that are not percent-encoded can lead to misinterpreting a percent character as the beginning of a percent-encoded sequence.

## See Also

### Related Documentation

- [replacingPercentEscapes(using:)](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
- [addingPercentEscapes(using:)](addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.

### Working with URL Strings

- [addingPercentEncoding(withAllowedCharacters:)](addingpercentencoding%28withallowedcharacters_%29.md): Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.

# stringByRemovingPercentEncoding (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made from the receiver by replacing all percent encoded sequences with the matching UTF-8 characters.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * stringByRemovingPercentEncoding;
```

<a id="return-value"></a>

## Return Value

A new string with the percent-encoded sequences removed, or `nil` if the receiver contains an invalid percent-encoding sequence.

<a id="discussion"></a>

## Discussion

> **Important**

>  You must call this method only on strings that you know to be percent-encoded. Calling this method on strings that are not percent-encoded can lead to misinterpreting a percent character as the beginning of a percent-encoded sequence.

## See Also

### Related Documentation

- [stringByReplacingPercentEscapesUsingEncoding:](replacingpercentescapes%28using_%29.md): Deprecated. Returns a new string made by replacing in the receiver all percent escapes with the matching characters as determined by a given encoding.
- [stringByAddingPercentEscapesUsingEncoding:](addingpercentescapes%28using_%29.md): Deprecated. Returns a representation of the receiver using a given encoding to determine the percent escapes necessary to convert the receiver into a legal URL string.

### Working with URL Strings

- [stringByAddingPercentEncodingWithAllowedCharacters:](addingpercentencoding%28withallowedcharacters_%29.md): Returns a new string made from the receiver by replacing all characters not in the specified set with percent-encoded characters.
