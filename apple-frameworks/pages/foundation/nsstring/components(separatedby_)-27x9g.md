> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/components(separatedby:)-27x9g](https://developer.apple.com/documentation/foundation/nsstring/components(separatedby:)-27x9g)

# components(separatedBy:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing substrings from the receiver that have been divided by characters in a given set.

## Declaration

```swift
func components(separatedBy separator: CharacterSet) -> [String]
```

## Parameters

- `separator`: A character set containing the characters to use to split the receiver. Must not be `nil`.

<a id="return-value"></a>

## Return Value

An `NSArray` object containing substrings from the receiver that have been divided by characters in `separator`.

<a id="Discussion"></a>

## Discussion

The substrings in the array appear in the order they did in the receiver. Adjacent occurrences of the separator characters produce empty strings in the result. Similarly, if the string begins or ends with separator characters, the first or last substring, respectively, is empty.

## See Also

### Dividing Strings

- [components(separatedBy:)](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [trimmingCharacters(in:)](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substring(from:)](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substring(with:)](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substring(to:)](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

# componentsSeparatedByCharactersInSet: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing substrings from the receiver that have been divided by characters in a given set.

## Declaration

```objectivec
- (NSArray<NSString *> *) componentsSeparatedByCharactersInSet:(NSCharacterSet *) separator;
```

## Parameters

- `separator`: A character set containing the characters to use to split the receiver. Must not be `nil`.

<a id="return-value"></a>

## Return Value

An `NSArray` object containing substrings from the receiver that have been divided by characters in `separator`.

<a id="Discussion"></a>

## Discussion

The substrings in the array appear in the order they did in the receiver. Adjacent occurrences of the separator characters produce empty strings in the result. Similarly, if the string begins or ends with separator characters, the first or last substring, respectively, is empty.

## See Also

### Dividing Strings

- [componentsSeparatedByString:](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [stringByTrimmingCharactersInSet:](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substringFromIndex:](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substringWithRange:](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substringToIndex:](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.
