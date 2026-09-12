> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/fontattributes(in:)](https://developer.apple.com/documentation/foundation/nsattributedstring/fontattributes(in:))

# fontAttributes(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the font attributes in effect for the character at the specified location.

## Declaration

```swift
func fontAttributes(in range: NSRange) -> [NSAttributedString.Key : Any]
```

## Parameters

- `range`: The range.

<a id="return-value"></a>

## Return Value

A dictionary containing the font attributes for the range.

<a id="Discussion"></a>

## Discussion

The dictionary attributes are all those listed in `Character Attributes`, except [link](key/link.md), [paragraphStyle](key/paragraphstyle.md), and [attachment](key/attachment.md).

Use this method to obtain font attributes that are to be copied or pasted with “copy font” operations.

Raises an `NSRangeException` if any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Getting font attribute information

- [rulerAttributes(in:)](rulerattributes%28in_%29.md): Returns the ruler (paragraph) attributes in effect for the characters within the specified range.

# fontAttributesInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the font attributes in effect for the character at the specified location.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) fontAttributesInRange:(NSRange) range;
```

## Parameters

- `range`: The range.

<a id="return-value"></a>

## Return Value

A dictionary containing the font attributes for the range.

<a id="Discussion"></a>

## Discussion

The dictionary attributes are all those listed in `Character Attributes`, except [link](key/link.md), [paragraphStyle](key/paragraphstyle.md), and [attachment](key/attachment.md).

Use this method to obtain font attributes that are to be copied or pasted with “copy font” operations.

Raises an `NSRangeException` if any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Getting font attribute information

- [rulerAttributesInRange:](rulerattributes%28in_%29.md): Returns the ruler (paragraph) attributes in effect for the characters within the specified range.
