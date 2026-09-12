> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/stringbyappendingformat:](https://developer.apple.com/documentation/foundation/nsstring/stringbyappendingformat:)

# stringByAppendingFormat:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string made by appending to the receiver a string constructed from a given format string and the following arguments.

## Declaration

```objectivec
- (NSString *) stringByAppendingFormat:(NSString *) format;
```

## Parameters

- `format`: A format string. See [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) for more information. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `format` is `nil`.

<a id="return-value"></a>

## Return Value

A string made by appending to the receiver a string constructed from `format` and the following arguments, in the manner of [stringWithFormat:](stringwithformat_.md).

<a id="discussion"></a>

## Discussion

Pass a comma-separated list of variadic arguments to substitute into `format`.

## See Also

### Combining Strings

- [stringByAppendingString:](appending%28__%29.md): Returns a new string made by appending a given string to the receiver.
- [stringByPaddingToLength:withString:startingAtIndex:](padding%28tolength_withpad_startingat_%29.md): Returns a new string formed from the receiver by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.
