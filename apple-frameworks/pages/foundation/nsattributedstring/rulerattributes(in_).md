> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/rulerattributes(in:)](https://developer.apple.com/documentation/foundation/nsattributedstring/rulerattributes(in:))

# rulerAttributes(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the ruler (paragraph) attributes in effect for the characters within the specified range.

## Declaration

```swift
func rulerAttributes(in range: NSRange) -> [NSAttributedString.Key : Any]
```

## Parameters

- `range`: The range.

<a id="return-value"></a>

## Return Value

A dictionary containing the ruler attributes in the range.

<a id="Discussion"></a>

## Discussion

The only ruler attribute currently defined is that named by [paragraphStyle](key/paragraphstyle.md). Use this method to obtain attributes that are to be copied or pasted with “copy ruler” operations.

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Getting font attribute information

- [fontAttributes(in:)](fontattributes%28in_%29.md): Returns the font attributes in effect for the character at the specified location.

# rulerAttributesInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the ruler (paragraph) attributes in effect for the characters within the specified range.

## Declaration

```objectivec
- (NSDictionary<NSString *,id> *) rulerAttributesInRange:(NSRange) range;
```

## Parameters

- `range`: The range.

<a id="return-value"></a>

## Return Value

A dictionary containing the ruler attributes in the range.

<a id="Discussion"></a>

## Discussion

The only ruler attribute currently defined is that named by [paragraphStyle](key/paragraphstyle.md). Use this method to obtain attributes that are to be copied or pasted with “copy ruler” operations.

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Getting font attribute information

- [fontAttributesInRange:](fontattributes%28in_%29.md): Returns the font attributes in effect for the character at the specified location.
