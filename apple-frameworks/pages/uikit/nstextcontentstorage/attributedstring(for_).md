> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstorage/attributedstring(for:)](https://developer.apple.com/documentation/uikit/nstextcontentstorage/attributedstring(for:))

# attributedString(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a new attributed string for the text element.

## Declaration

```swift
func attributedString(for textElement: NSTextElement) -> NSAttributedString?
```

## Parameters

- `textElement`: The [NSTextElement](../nstextelement.md) to map into an attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../../foundation/nsattributedstring.md), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` if the method can’t map `textElement` to an [NSAttributedString](../../foundation/nsattributedstring.md).

## See Also

### Managing text elements

- [textElement(for:)](textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.

# attributedStringForTextElement: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a new attributed string for the text element.

## Declaration

```objectivec
- (NSAttributedString *) attributedStringForTextElement:(NSTextElement *) textElement;
```

## Parameters

- `textElement`: The [NSTextElement](../nstextelement.md) to map into an attributed string.

<a id="return-value"></a>

## Return Value

An [NSAttributedString](../../foundation/nsattributedstring.md), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` if the method can’t map `textElement` to an [NSAttributedString](../../foundation/nsattributedstring.md).

## See Also

### Managing text elements

- [textElementForAttributedString:](textelement%28for_%29.md): Returns the text element corresponding to object’s attributed string.
