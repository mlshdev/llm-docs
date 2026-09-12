> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/padding(tolength:withpad:startingat:)](https://developer.apple.com/documentation/foundation/nsstring/padding(tolength:withpad:startingat:))

# padding(toLength:withPad:startingAt:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string formed from the receiver by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.

## Declaration

```swift
func padding(toLength newLength: Int, withPad padString: String, startingAt padIndex: Int) -> String
```

## Parameters

- `newLength`: The new length for the receiver.
- `padString`: The string with which to extend the receiver.
- `padIndex`: The index in `padString` from which to start padding.

<a id="return-value"></a>

## Return Value

A new string formed from the receiver by either removing characters from the end, or by appending as many occurrences of `padString` as necessary.

<a id="Discussion"></a>

## Discussion

Here are some examples of usage:

```objc
[@"abc" stringByPaddingToLength: 9 withString: @"." startingAtIndex:0];
    // Results in "abc......"
 
[@"abc" stringByPaddingToLength: 2 withString: @"." startingAtIndex:0];
    // Results in "ab"
 
[@"abc" stringByPaddingToLength: 9 withString: @". " startingAtIndex:1];
    // Results in "abc . . ."
    // Notice that the first character in the padding is " "
```

## See Also

### Combining Strings

- [appendingFormat(\_:\_:)](appendingformat%28____%29.md)
- [appending(\_:)](appending%28__%29.md): Returns a new string made by appending a given string to the receiver.

# stringByPaddingToLength:withString:startingAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string formed from the receiver by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.

## Declaration

```objectivec
- (NSString *) stringByPaddingToLength:(NSUInteger) newLength withString:(NSString *) padString startingAtIndex:(NSUInteger) padIndex;
```

## Parameters

- `newLength`: The new length for the receiver.
- `padString`: The string with which to extend the receiver.
- `padIndex`: The index in `padString` from which to start padding.

<a id="return-value"></a>

## Return Value

A new string formed from the receiver by either removing characters from the end, or by appending as many occurrences of `padString` as necessary.

<a id="Discussion"></a>

## Discussion

Here are some examples of usage:

```objc
[@"abc" stringByPaddingToLength: 9 withString: @"." startingAtIndex:0];
    // Results in "abc......"
 
[@"abc" stringByPaddingToLength: 2 withString: @"." startingAtIndex:0];
    // Results in "ab"
 
[@"abc" stringByPaddingToLength: 9 withString: @". " startingAtIndex:1];
    // Results in "abc . . ."
    // Notice that the first character in the padding is " "
```

## See Also

### Combining Strings

- [stringByAppendingFormat:](stringbyappendingformat_.md): Returns a string made by appending to the receiver a string constructed from a given format string and the following arguments.
- [stringByAppendingString:](appending%28__%29.md): Returns a new string made by appending a given string to the receiver.
