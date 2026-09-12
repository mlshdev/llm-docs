> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/scanner/scanstring(_:into:)](https://developer.apple.com/documentation/foundation/scanner/scanstring(_:into:))

# scanString(\_:into:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 13.0) · iPadOS 2.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Scans a given string, returning an equivalent string object by reference if a match is found.

## Declaration

```swift
func scanString(_ string: String, into result: AutoreleasingUnsafeMutablePointer<NSString?>?) -> Bool
```

## Parameters

- `string`: The string for which to scan at the current scan location.
- `result`: Upon return, if the receiver contains a string equivalent to `string` at the current scan location, contains a string equivalent to `string`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `string` matches the characters at the scan location, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `string` is present at the current scan location, then the current scan location is advanced to after the string; otherwise the scan location does not change.

Invoke this method with `NULL` as `stringValue` to simply scan past a given string.

## See Also

### Scanning Characters and Strings

- [scanCharacters(from:into:)](scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanUpToCharacters(from:into:)](scanuptocharacters%28from_into_%29.md): Deprecated. Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.
- [scanUpTo(\_:into:)](scanupto%28__into_%29.md): Deprecated. Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.

# scanString:intoString: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Scans a given string, returning an equivalent string object by reference if a match is found.

## Declaration

```objectivec
- (BOOL) scanString:(NSString *) string intoString:(NSString **) result;
```

## Parameters

- `string`: The string for which to scan at the current scan location.
- `result`: Upon return, if the receiver contains a string equivalent to `string` at the current scan location, contains a string equivalent to `string`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if `string` matches the characters at the scan location, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If `string` is present at the current scan location, then the current scan location is advanced to after the string; otherwise the scan location does not change.

Invoke this method with `NULL` as `stringValue` to simply scan past a given string.

## See Also

### Scanning Characters and Strings

- [scanCharactersFromSet:intoString:](scancharacters%28from_into_%29.md): Deprecated. Scans the string as long as characters from a given character set are encountered, accumulating characters into a string that’s returned by reference.
- [scanUpToCharactersFromSet:intoString:](scanuptocharacters%28from_into_%29.md): Deprecated. Scans the string until a character from a given character set is encountered, accumulating characters into a string that’s returned by reference.
- [scanUpToString:intoString:](scanupto%28__into_%29.md): Deprecated. Scans the string until a given string is encountered, accumulating characters into a string that’s returned by reference.
