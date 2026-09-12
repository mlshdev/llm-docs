> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstorage/textelement(for:)](https://developer.apple.com/documentation/uikit/nstextcontentstorage/textelement(for:))

# textElement(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text element corresponding to object’s attributed string.

## Declaration

```swift
func textElement(for attributedString: NSAttributedString) -> NSTextElement?
```

## Parameters

- `attributedString`: The attributed string to map into an [NSTextElement](../nstextelement.md).

<a id="return-value"></a>

## Return Value

An [NSTextElement](../nstextelement.md), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` when `attributedString` contains attributes not mappable to [NSTextElement](../nstextelement.md).

## See Also

### Managing text elements

- [attributedString(for:)](attributedstring%28for_%29.md): Returns a new attributed string for the text element.

# textElementForAttributedString: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns the text element corresponding to object’s attributed string.

## Declaration

```objectivec
- (NSTextElement *) textElementForAttributedString:(NSAttributedString *) attributedString;
```

## Parameters

- `attributedString`: The attributed string to map into an [NSTextElement](../nstextelement.md).

<a id="return-value"></a>

## Return Value

An [NSTextElement](../nstextelement.md), or `nil`.

<a id="Discussion"></a>

## Discussion

Returns `nil` when `attributedString` contains attributes not mappable to [NSTextElement](../nstextelement.md).

## See Also

### Managing text elements

- [attributedStringForTextElement:](attributedstring%28for_%29.md): Returns a new attributed string for the text element.
