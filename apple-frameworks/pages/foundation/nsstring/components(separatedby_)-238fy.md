> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/components(separatedby:)-238fy](https://developer.apple.com/documentation/foundation/nsstring/components(separatedby:)-238fy)

# components(separatedBy:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing substrings from the receiver that have been divided by a given separator.

## Declaration

```swift
func components(separatedBy separator: String) -> [String]
```

## Parameters

- `separator`: The separator string.

<a id="return-value"></a>

## Return Value

An `NSArray` object containing substrings from the receiver that have been divided by `separator`.

<a id="Discussion"></a>

## Discussion

The substrings in the array appear in the order they did in the receiver. Adjacent occurrences of the separator string produce empty strings in the result. Similarly, if the string begins or ends with the separator, the first or last substring, respectively, is empty. For example, this code fragment:

```objc
NSString *list = @"Karin, Carrie, David";
NSArray *listItems = [list componentsSeparatedByString:@", "];
```

produces the array `@[@"Karin", @"Carrie", @"David"]`.

If `list` begins with a comma and space—for example, `@", Norman, Stanley, Fletcher"`—the array has these contents: `@[@"", @"Norman", @"Stanley", @"Fletcher"]`.

If `list` has no separators—for example, `@"Karin"`—the array contains the string itself, in this case `@[@"Karin"]`.

## See Also

### Related Documentation

- [pathComponents](pathcomponents.md): The file-system path components of the receiver.
- [componentsJoined(by:)](../nsarray/componentsjoined%28by_%29.md): Constructs and returns an `NSString` object that is the result of interposing a given separator between the elements of the array.

### Dividing Strings

- [components(separatedBy:)](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [trimmingCharacters(in:)](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substring(from:)](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substring(with:)](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substring(to:)](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.

# componentsSeparatedByString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an array containing substrings from the receiver that have been divided by a given separator.

## Declaration

```objectivec
- (NSArray<NSString *> *) componentsSeparatedByString:(NSString *) separator;
```

## Parameters

- `separator`: The separator string.

<a id="return-value"></a>

## Return Value

An `NSArray` object containing substrings from the receiver that have been divided by `separator`.

<a id="Discussion"></a>

## Discussion

The substrings in the array appear in the order they did in the receiver. Adjacent occurrences of the separator string produce empty strings in the result. Similarly, if the string begins or ends with the separator, the first or last substring, respectively, is empty. For example, this code fragment:

```objc
NSString *list = @"Karin, Carrie, David";
NSArray *listItems = [list componentsSeparatedByString:@", "];
```

produces the array `@[@"Karin", @"Carrie", @"David"]`.

If `list` begins with a comma and space—for example, `@", Norman, Stanley, Fletcher"`—the array has these contents: `@[@"", @"Norman", @"Stanley", @"Fletcher"]`.

If `list` has no separators—for example, `@"Karin"`—the array contains the string itself, in this case `@[@"Karin"]`.

## See Also

### Related Documentation

- [pathComponents](pathcomponents.md): The file-system path components of the receiver.
- [componentsJoinedByString:](../nsarray/componentsjoined%28by_%29.md): Constructs and returns an `NSString` object that is the result of interposing a given separator between the elements of the array.

### Dividing Strings

- [componentsSeparatedByCharactersInSet:](components%28separatedby_%29-27x9g.md): Returns an array containing substrings from the receiver that have been divided by characters in a given set.
- [stringByTrimmingCharactersInSet:](trimmingcharacters%28in_%29.md): Returns a new string made by removing from both ends of the receiver characters contained in a given character set.
- [substringFromIndex:](substring%28from_%29.md): Returns a new string containing the characters of the receiver from the one at a given index to the end.
- [substringWithRange:](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.
- [substringToIndex:](substring%28to_%29.md): Returns a new string containing the characters of the receiver up to, but not including, the one at a given index.
