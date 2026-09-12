> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nstextcontentstoragedelegate/textcontentstorage(_:textparagraphwith:)](https://developer.apple.com/documentation/uikit/nstextcontentstoragedelegate/textcontentstorage(_:textparagraphwith:))

# textContentStorage(\_:textParagraphWith:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a custom paragraph for a range that you provide from the object’s attributed string.

## Declaration

```swift
optional func textContentStorage(_ textContentStorage: NSTextContentStorage, textParagraphWith range: NSRange) -> NSTextParagraph?
```

## Parameters

- `textContentStorage`: The object’s content manager.
- `range`: The [NSRange](../../foundation/nsrange-c.struct.md) that describes the extent of the string.

<a id="return-value"></a>

## Return Value

A new [NSTextParagraph](../nstextparagraph.md), or `nil`.

<a id="Discussion"></a>

## Discussion

When non-`nil`, `textContentStorage` uses the text paragraph instead of creating the standard [NSTextParagraph](../nstextparagraph.md) with the attributed substring in `range`. The attributed string for a custom text paragraph must have a length of `range.length`.

# textContentStorage:textParagraphWithRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+

Returns a custom paragraph for a range that you provide from the object’s attributed string.

## Declaration

```objectivec
- (NSTextParagraph *) textContentStorage:(NSTextContentStorage *) textContentStorage textParagraphWithRange:(NSRange) range;
```

## Parameters

- `textContentStorage`: The object’s content manager.
- `range`: The [NSRange](../../foundation/nsrange-c.struct.md) that describes the extent of the string.

<a id="return-value"></a>

## Return Value

A new [NSTextParagraph](../nstextparagraph.md), or `nil`.

<a id="Discussion"></a>

## Discussion

When non-`nil`, `textContentStorage` uses the text paragraph instead of creating the standard [NSTextParagraph](../nstextparagraph.md) with the attributed substring in `range`. The attributed string for a custom text paragraph must have a length of `range.length`.
