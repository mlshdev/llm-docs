> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/substring(to:)](https://developer.apple.com/documentation/foundation/nsstring/substring(to:))

# substring(to:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

## Declaration

```swift
func substring(to: Int) -> String
```

## Parameters

- `to`: An index. The value must lie within the bounds of the receiver, or be equal to the length of the receiver.

  Raises an [rangeException](../nsexceptionname/rangeexception.md) if (`anIndex` \- 1) lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

A new string containing the characters of the receiver up to, but not including, the one at `anIndex`. If `anIndex` is equal to the length of the string, returns a copy of the receiver.

## See Also

### Dividing Strings

- [components(separatedBy:)](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [components(separatedBy:)](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [trimmingCharacters(in:)](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substring(from:)](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substring(with:)](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.

# substringToIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

## Declaration

```objectivec
- (NSString *) substringToIndex:(NSUInteger) to;
```

## Parameters

- `to`: An index. The value must lie within the bounds of the receiver, or be equal to the length of the receiver.

  Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if (`anIndex` \- 1) lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

A new string containing the characters of the receiver up to, but not including, the one at `anIndex`. If `anIndex` is equal to the length of the string, returns a copy of the receiver.

## See Also

### Dividing Strings

- [componentsSeparatedByString:](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [componentsSeparatedByCharactersInSet:](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [stringByTrimmingCharactersInSet:](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substringFromIndex:](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substringWithRange:](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
