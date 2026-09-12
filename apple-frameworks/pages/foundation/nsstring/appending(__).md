> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/appending(_:)](https://developer.apple.com/documentation/foundation/nsstring/appending(_:))

# appending(\_:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made by appending a given string to the receiver.

## Declaration

```swift
func appending(_ aString: String) -> String
```

## Parameters

- `aString`: The string to append to the receiver. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `aString` is `nil`.

<a id="return-value"></a>

## Return Value

A new string made by appending `aString` to the receiver.

<a id="Discussion"></a>

## Discussion

This code excerpt, for example:

```objc
NSString *errorTag = @"Error: ";
NSString *errorString = @"premature end of file.";
NSString *errorMessage = [errorTag stringByAppendingString:errorString];
```

produces the string “`Error: premature end of file.`”.

## See Also

### Combining Strings

- [appendingFormat(\_:\_:)](appendingformat%28____%29.md)
- [padding(toLength:withPad:startingAt:)](padding%28tolength_withpad_startingat_%29.md): Returns a new string formed from the receiver by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.

# stringByAppendingString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a new string made by appending a given string to the receiver.

## Declaration

```objectivec
- (NSString *) stringByAppendingString:(NSString *) aString;
```

## Parameters

- `aString`: The string to append to the receiver. This value must not be `nil`.

  > **Important**

  >  Raises an `NSInvalidArgumentException` if `aString` is `nil`.

<a id="return-value"></a>

## Return Value

A new string made by appending `aString` to the receiver.

<a id="Discussion"></a>

## Discussion

This code excerpt, for example:

```objc
NSString *errorTag = @"Error: ";
NSString *errorString = @"premature end of file.";
NSString *errorMessage = [errorTag stringByAppendingString:errorString];
```

produces the string “`Error: premature end of file.`”.

## See Also

### Related Documentation

- [stringByAppendingFormat:](stringbyappendingformat_.md): Returns a string made by appending to the receiver a string constructed from a given format string and the following arguments.

### Combining Strings

- [stringByAppendingFormat:](stringbyappendingformat_.md): Returns a string made by appending to the receiver a string constructed from a given format string and the following arguments.
- [stringByPaddingToLength:withString:startingAtIndex:](padding%28tolength_withpad_startingat_%29.md): Returns a new string formed from the receiver by either removing characters from the end, or by appending as many occurrences as necessary of a given pad string.
