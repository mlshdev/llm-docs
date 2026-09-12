> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutablestring/applytransform(_:reverse:range:updatedrange:)](https://developer.apple.com/documentation/foundation/nsmutablestring/applytransform(_:reverse:range:updatedrange:))

# applyTransform(\_:reverse:range:updatedRange:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Transliterates the receiver by applying a specified ICU string transform.

## Declaration

```swift
func applyTransform(_ transform: StringTransform, reverse: Bool, range: NSRange, updatedRange resultingRange: NSRangePointer?) -> Bool
```

## Parameters

- `transform`: The transformation to apply. For a list of possible values, see [String Transformations](../string-transformations.md). If the specified transform does not exist, the receiver is not modified, and this method returns [false](https://developer.apple.com/documentation/swift/false).
- `reverse`: Whether an inverse transform should be used. If the specified transform does not have an inverse, the receiver is not modified, and this method returns [false](https://developer.apple.com/documentation/swift/false).
- `range`: The range of the string to transform. `range` must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `aRange` lies beyond the end of the string.
- `resultingRange`: If the transform was successfully applied, upon return contains the range of the transformed string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the transform was successfully applied. Otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In addition to the provided transformation constants, you may use any valid ICU transform ID as defined in the [ICU User Guide](http://userguide.icu-project.org/transforms/general). However, arbitrary ICU transform rules are not supported.

## See Also

### Modifying a String

- [append(\_:)](append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [deleteCharacters(in:)](deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insert(\_:at:)](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrences(of:with:options:range:)](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString(\_:)](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.

# applyTransform:reverse:range:updatedRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Transliterates the receiver by applying a specified ICU string transform.

## Declaration

```objectivec
- (BOOL) applyTransform:(NSStringTransform) transform reverse:(BOOL) reverse range:(NSRange) range updatedRange:(NSRangePointer) resultingRange;
```

## Parameters

- `transform`: The transformation to apply. For a list of possible values, see [String Transformations](../string-transformations.md). If the specified transform does not exist, the receiver is not modified, and this method returns [false](https://developer.apple.com/documentation/swift/false).
- `reverse`: Whether an inverse transform should be used. If the specified transform does not have an inverse, the receiver is not modified, and this method returns [false](https://developer.apple.com/documentation/swift/false).
- `range`: The range of the string to transform. `range` must not exceed the bounds of the receiver.

  > **Important**

  >  Raises an `NSRangeException` if any part of `aRange` lies beyond the end of the string.
- `resultingRange`: If the transform was successfully applied, upon return contains the range of the transformed string.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the transform was successfully applied. Otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

In addition to the provided transformation constants, you may use any valid ICU transform ID as defined in the [ICU User Guide](http://userguide.icu-project.org/transforms/general). However, arbitrary ICU transform rules are not supported.

## See Also

### Modifying a String

- [appendFormat:](appendformat_.md): Adds a constructed string to the receiver.
- [appendString:](append%28__%29.md): Adds to the end of the receiver the characters of a given string.
- [deleteCharactersInRange:](deletecharacters%28in_%29.md): Removes from the receiver the characters in a given range.
- [insertString:atIndex:](insert%28__at_%29.md): Inserts into the receiver the characters of a given string at a given location.
- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29.md): Replaces the characters from `range` with those in `aString`.
- [replaceOccurrencesOfString:withString:options:range:](replaceoccurrences%28of_with_options_range_%29.md): Replaces all occurrences of a given string in a given range with another given string, returning the number of replacements.
- [setString:](setstring%28__%29.md): Replaces the characters of the receiver with those in a given string.
