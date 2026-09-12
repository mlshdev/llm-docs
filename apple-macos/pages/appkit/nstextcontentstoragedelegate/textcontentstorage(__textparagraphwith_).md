> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextcontentstoragedelegate/textcontentstorage(_:textparagraphwith:)](https://developer.apple.com/documentation/appkit/nstextcontentstoragedelegate/textcontentstorage(_:textparagraphwith:))

# textContentStorage(\_:textParagraphWith:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a custom `NSTextParagraph` for the specified range in the content storage’s attributed string.

## Declaration

```swift
optional func textContentStorage(_ textContentStorage: NSTextContentStorage, textParagraphWith range: NSRange) -> NSTextParagraph?
```

## Parameters

- `textContentStorage`: The object’s content manager.
- `range`: The [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) that describes the extent of the string.

<a id="return-value"></a>

## Return Value

A new [NSTextParagraph](../nstextparagraph.md), or `nil`.

<a id="discussion"></a>

## Discussion

When non-nil, `textContentStorage` uses the text paragraph instead of creating the standard [NSTextParagraph](../nstextparagraph.md) with the attributed substring in range. The attributed string for a custom text paragraph must have `range.length`.

Returns a custom paragraph for a range that you provide from the object’s attributed string.

<a id="Discussion"></a>

## Discussion

When non-`nil`, `textContentStorage` uses the text paragraph instead of creating the standard [NSTextParagraph](../nstextparagraph.md) with the attributed substring in range. The attributed string for a custom text paragraph must have a length of `range.length`.

# textContentStorage:textParagraphWithRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns a custom `NSTextParagraph` for the specified range in the content storage’s attributed string.

## Declaration

```objectivec
- (NSTextParagraph *) textContentStorage:(NSTextContentStorage *) textContentStorage textParagraphWithRange:(NSRange) range;
```

## Parameters

- `textContentStorage`: The object’s content manager.
- `range`: The [NSRange](https://developer.apple.com/documentation/foundation/nsrange-c.struct) that describes the extent of the string.

<a id="return-value"></a>

## Return Value

A new [NSTextParagraph](../nstextparagraph.md), or `nil`.

<a id="discussion"></a>

## Discussion

When non-nil, `textContentStorage` uses the text paragraph instead of creating the standard [NSTextParagraph](../nstextparagraph.md) with the attributed substring in range. The attributed string for a custom text paragraph must have `range.length`.

Returns a custom paragraph for a range that you provide from the object’s attributed string.

<a id="Discussion"></a>

## Discussion

When non-`nil`, `textContentStorage` uses the text paragraph instead of creating the standard [NSTextParagraph](../nstextparagraph.md) with the attributed substring in range. The attributed string for a custom text paragraph must have a length of `range.length`.
