> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/scanuptocharacters(from:into:)](https://developer.apple.com/documentation/foundation/scanner/scanuptocharacters(from:into:))

# scanUpToCharacters(from:into:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.

## Declaration

```swift
func scanUpToCharacters(from set: CharacterSet, into result: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `set`: The set of characters up to which to scan.
- `result`: Upon return, contains the characters scanned.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver scanned any characters, otherwise [false](https://developer.apple.com/documentation/swift/false).

If the only scanned characters are in the [charactersToBeSkipped](characterstobeskipped.md) character set (which is the whitespace and newline character set by default), then returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoke this method with `NULL` as `stringValue` to simply scan up to a given set of characters.

If no characters in `stopSet` are present in the scanner’s source string, the remainder of the source string is put into `stringValue`, the receiver’s `scanLocation` is advanced to the end of the source string, and the method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Scanning Characters and Strings

- [scanCharacters(from:into:)](scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanString(\_:into:)](scanstring%28__into_%29.md): Deprecated. Scans a given string, returning an equivalent string object by reference if a match is found.
- [scanUpTo(\_:into:)](scanupto%28__into_%29.md): Deprecated. Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.

# scanUpToCharactersFromSet:intoString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.

## Declaration

```objectivec
- (BOOL) scanUpToCharactersFromSet:(NSCharacterSet *) set intoString:(NSString **) result;
```

## Parameters

- `set`: The set of characters up to which to scan.
- `result`: Upon return, contains the characters scanned.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the receiver scanned any characters, otherwise [false](https://developer.apple.com/documentation/swift/false).

If the only scanned characters are in the [charactersToBeSkipped](characterstobeskipped.md) character set (which is the whitespace and newline character set by default), then returns [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Invoke this method with `NULL` as `stringValue` to simply scan up to a given set of characters.

If no characters in `stopSet` are present in the scanner’s source string, the remainder of the source string is put into `stringValue`, the receiver’s `scanLocation` is advanced to the end of the source string, and the method returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Scanning Characters and Strings

- [scanCharactersFromSet:intoString:](scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanString:intoString:](scanstring%28__into_%29.md): Deprecated. Scans a given string, returning an equivalent string object by reference if a match is found.
- [scanUpToString:intoString:](scanupto%28__into_%29.md): Deprecated. Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.
