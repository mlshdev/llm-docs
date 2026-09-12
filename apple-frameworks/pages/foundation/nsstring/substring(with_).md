> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/substring(with:)](https://developer.apple.com/documentation/foundation/nsstring/substring(with:))

# substring(with:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string object containing the characters of the receiver that lie within a given range.

## Declaration

```swift
func substring(with range: NSRange) -> String
```

## Parameters

- `range`: A range. The range must not exceed the bounds of the receiver.

  Raises an [rangeException](../nsexceptionname/rangeexception.md) if (`aRange.location` \- 1) or (`aRange.location` \+ `aRange.length` \- 1) lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

A string object containing the characters of the receiver that lie within `aRange`.

<a id="Discussion"></a>

## Discussion

This method detects all invalid ranges (including those with negative lengths). For applications linked against macOS 10.6 and later, this error causes an exception; for applications linked against earlier releases, this error causes a warning, which is displayed just once per application execution.

## See Also

### Dividing Strings

- [components(separatedBy:)](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [components(separatedBy:)](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [trimmingCharacters(in:)](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substring(from:)](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substring(to:)](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

# substringWithRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string object containing the characters of the receiver that lie within a given range.

## Declaration

```objectivec
- (NSString *) substringWithRange:(NSRange) range;
```

## Parameters

- `range`: A range. The range must not exceed the bounds of the receiver.

  Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if (`aRange.location` \- 1) or (`aRange.location` \+ `aRange.length` \- 1) lies beyond the end of the receiver.

<a id="return-value"></a>

## Return Value

A string object containing the characters of the receiver that lie within `aRange`.

<a id="Discussion"></a>

## Discussion

This method detects all invalid ranges (including those with negative lengths). For applications linked against macOS 10.6 and later, this error causes an exception; for applications linked against earlier releases, this error causes a warning, which is displayed just once per application execution.

## See Also

### Dividing Strings

- [componentsSeparatedByString:](components%28separatedby_%29-238fy.md): Returns an array containing substrings from the receiver that have been divided by a given separator.
- [componentsSeparatedByCharactersInSet:](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [stringByTrimmingCharactersInSet:](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substringFromIndex:](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substringToIndex:](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.
