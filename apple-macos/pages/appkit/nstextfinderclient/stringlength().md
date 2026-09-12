> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/stringlength()](https://developer.apple.com/documentation/appkit/nstextfinderclient/stringlength())

# stringLength() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.

## Declaration

```swift
optional func stringLength() -> Int
```

<a id="return-value"></a>

## Return Value

Returns the full length of the conceptually concatenated string in the second model, that is, the sum of the lengths of all of its substrings.

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for more information.

## See Also

### String Searching

- [string](string.md): Allows the client to specify a single string for searching.
- [string(at:effectiveRange:endsWithSearchBoundary:)](string%28at_effectiverange_endswithsearchboundary_%29.md): Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.

# stringLength (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.

## Declaration

```objectivec
- (NSUInteger) stringLength;
```

<a id="return-value"></a>

## Return Value

Returns the full length of the conceptually concatenated string in the second model, that is, the sum of the lengths of all of its substrings.

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for more information.

## See Also

### String Searching

- [string](string.md): Allows the client to specify a single string for searching.
- [stringAtIndex:effectiveRange:endsWithSearchBoundary:](string%28at_effectiverange_endswithsearchboundary_%29.md): Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.
