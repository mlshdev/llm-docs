> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextfinderclient/string(at:effectiverange:endswithsearchboundary:)](https://developer.apple.com/documentation/appkit/nstextfinderclient/string(at:effectiverange:endswithsearchboundary:))

# string(at:effectiveRange:endsWithSearchBoundary:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.

## Declaration

```swift
optional func string(at characterIndex: Int, effectiveRange outRange: NSRangePointer, endsWithSearchBoundary outFlag: UnsafeMutablePointer<ObjCBool>) -> String
```

## Parameters

- `characterIndex`: The given character index the client should return.
- `outRange`: Returns, by reference, the “effective range” of that substring in the full conceptually concatenated string
- `outFlag`: Returns, by-reference, whether the substring ends with a “search boundary”, meaning that NSTextFinder should not attempt to find any matches that overlap this boundary.

<a id="return-value"></a>

## Return Value

Returns the found string.

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for more information.

## See Also

### String Searching

- [string](string.md): Allows the client to specify a single string for searching.
- [stringLength()](stringlength%28%29.md): Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.

# stringAtIndex:effectiveRange:endsWithSearchBoundary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the found string that is created by conceptually mapping its content to a single string, which is composed of a concatenation of all its substrings.

## Declaration

```objectivec
- (NSString *) stringAtIndex:(NSUInteger) characterIndex effectiveRange:(NSRangePointer) outRange endsWithSearchBoundary:(BOOL *) outFlag;
```

## Parameters

- `characterIndex`: The given character index the client should return.
- `outRange`: Returns, by reference, the “effective range” of that substring in the full conceptually concatenated string
- `outFlag`: Returns, by-reference, whether the substring ends with a “search boundary”, meaning that NSTextFinder should not attempt to find any matches that overlap this boundary.

<a id="return-value"></a>

## Return Value

Returns the found string.

<a id="Discussion"></a>

## Discussion

See [NSTextFinder](../nstextfinder.md) for more information.

## See Also

### String Searching

- [string](string.md): Allows the client to specify a single string for searching.
- [stringLength](stringlength%28%29.md): Returns the full length of the conceptually concatenated string return by the `stringAtIndex:effectiveRange:endsWithSearchBoundary:` method.
