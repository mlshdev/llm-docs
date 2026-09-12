> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/string](https://developer.apple.com/documentation/appkit/nstextfinderclient/string)

# string (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Allows the client to specify a single string for searching.

## Declaration

```swift
optional var string: String { get }
```

<a id="Discussion"></a>

## Discussion

If the client cannot logically or efficiently flatten itself into a single string, then the [string(at:effectiveRange:endsWithSearchBoundary:)](string%28at_effectiverange_endswithsearchboundary_%29.md) and [stringLength()](stringlength%28%29.md) methods should be implemented instead.

## See Also

### String Searching

- [string(at:effectiveRange:endsWithSearchBoundary:)](string%28at_effectiverange_endswithsearchboundary_%29.md): Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.
- [stringLength()](stringlength%28%29.md): Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.

# string (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

Allows the client to specify a single string for searching.

## Declaration

```objectivec
@property (strong, readonly) NSString * string;
```

<a id="Discussion"></a>

## Discussion

If the client cannot logically or efficiently flatten itself into a single string, then the [stringAtIndex:effectiveRange:endsWithSearchBoundary:](string%28at_effectiverange_endswithsearchboundary_%29.md) and [stringLength](stringlength%28%29.md) methods should be implemented instead.

## See Also

### String Searching

- [stringAtIndex:effectiveRange:endsWithSearchBoundary:](string%28at_effectiverange_endswithsearchboundary_%29.md): Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.
- [stringLength](stringlength%28%29.md): Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.
