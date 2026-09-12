> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/commonprefix(with:options:)](https://developer.apple.com/documentation/foundation/nsstring/commonprefix(with:options:))

# commonPrefix(with:options:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing characters the receiver and a given string have in common, starting from the beginning of each up to the first characters that aren’t equivalent.

## Declaration

```swift
func commonPrefix(with str: String, options mask: NSString.CompareOptions = []) -> String
```

## Parameters

- `str`: The string with which to compare the receiver.
- `mask`: Options for the comparison. The following search options may be specified by combining them with the C bitwise `OR` operator: `NSCaseInsensitiveSearch`, `NSLiteralSearch`. See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for details on these options.

<a id="return-value"></a>

## Return Value

A string containing characters the receiver and `aString` have in common, starting from the beginning of each up to the first characters that aren’t equivalent.

<a id="Discussion"></a>

## Discussion

The returned string is based on the characters of the receiver. For example, if the receiver is “Ma¨dchen” and `aString` is “Mädchenschule”, the string returned is “Ma¨dchen”, not “Mädchen”.

## See Also

### Related Documentation

- [hasPrefix(\_:)](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.

# commonPrefixWithString:options: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns a string containing characters the receiver and a given string have in common, starting from the beginning of each up to the first characters that aren’t equivalent.

## Declaration

```objectivec
- (NSString *) commonPrefixWithString:(NSString *) str options:(NSStringCompareOptions) mask;
```

## Parameters

- `str`: The string with which to compare the receiver.
- `mask`: Options for the comparison. The following search options may be specified by combining them with the C bitwise `OR` operator: `NSCaseInsensitiveSearch`, `NSLiteralSearch`. See [String Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/introStrings.html#//apple_ref/doc/uid/10000035i) for details on these options.

<a id="return-value"></a>

## Return Value

A string containing characters the receiver and `aString` have in common, starting from the beginning of each up to the first characters that aren’t equivalent.

<a id="Discussion"></a>

## Discussion

The returned string is based on the characters of the receiver. For example, if the receiver is “Ma¨dchen” and `aString` is “Mädchenschule”, the string returned is “Ma¨dchen”, not “Mädchen”.

## See Also

### Related Documentation

- [hasPrefix:](hasprefix%28__%29.md): Returns a Boolean value that indicates whether a given string matches the beginning characters of the receiver.
