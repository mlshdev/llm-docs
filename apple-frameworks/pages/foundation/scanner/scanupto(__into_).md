> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/scanupto(_:into:)](https://developer.apple.com/documentation/foundation/scanner/scanupto(_:into:))

# scanUpTo(\_:into:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.

## Declaration

```swift
func scanUpTo(_ string: String, into result: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `string`: The string to scan up to.
- `result`: Upon return, contains any characters that were scanned.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver scans any characters, otherwise [false](https://developer.apple.com/documentation/swift/false).

If the only scanned characters are in the [charactersToBeSkipped](characterstobeskipped.md) character set (which by default is the whitespace and newline character set), then this method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `stopString` is present in the receiver, then on return the scan location is set to the beginning of that string.

If `stopString` is the first string in the receiver, then the method returns [false](https://developer.apple.com/documentation/swift/false) and `stringValue` is not changed.

If the search string (`stopString`) isn’t present in the scanner’s source string, the remainder of the source string is put into `stringValue`, the receiver’s `scanLocation` is advanced to the end of the source string, and the method returns [true](https://developer.apple.com/documentation/swift/true).

Invoke this method with `NULL` as `stringValue` to simply scan up to a given string.

## See Also

### Scanning Characters and Strings

- [scanCharacters(from:into:)](scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanUpToCharacters(from:into:)](scanuptocharacters%28from_into_%29.md): Deprecated. Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.
- [scanString(\_:into:)](scanstring%28__into_%29.md): Deprecated. Scans a given string, returning an equivalent string object by reference if a match is found.

# scanUpToString:intoString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.

## Declaration

```objectivec
- (BOOL) scanUpToString:(NSString *) string intoString:(NSString **) result;
```

## Parameters

- `string`: The string to scan up to.
- `result`: Upon return, contains any characters that were scanned.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver scans any characters, otherwise [false](https://developer.apple.com/documentation/swift/false).

If the only scanned characters are in the [charactersToBeSkipped](characterstobeskipped.md) character set (which by default is the whitespace and newline character set), then this method returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `stopString` is present in the receiver, then on return the scan location is set to the beginning of that string.

If `stopString` is the first string in the receiver, then the method returns [false](https://developer.apple.com/documentation/swift/false) and `stringValue` is not changed.

If the search string (`stopString`) isn’t present in the scanner’s source string, the remainder of the source string is put into `stringValue`, the receiver’s `scanLocation` is advanced to the end of the source string, and the method returns [true](https://developer.apple.com/documentation/swift/true).

Invoke this method with `NULL` as `stringValue` to simply scan up to a given string.

## See Also

### Scanning Characters and Strings

- [scanCharactersFromSet:intoString:](scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanUpToCharactersFromSet:intoString:](scanuptocharacters%28from_into_%29.md): Deprecated. Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.
- [scanString:intoString:](scanstring%28__into_%29.md): Deprecated. Scans a given string, returning an equivalent string object by reference if a match is found.
