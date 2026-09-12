> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextdocumentproxy/setmarkedtext(_:selectedrange:)](https://developer.apple.com/documentation/uikit/uitextdocumentproxy/setmarkedtext(_:selectedrange:))

# setMarkedText(\_:selectedRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Inserts the provided text and marks it to indicate that it’s part of an active input session.

## Declaration

```swift
func setMarkedText(_ markedText: String, selectedRange: NSRange)
```

## Mentioned In

- [Handling text interactions in custom keyboards](../handling-text-interactions-in-custom-keyboards.md)

<a id="Discussion"></a>

## Discussion

Setting marked text either replaces the existing marked text or, if none is present, inserts it in place of the current selection.

## See Also

### Managing marked text

- [unmarkText()](unmarktext%28%29.md): Unmarks the currently marked text.

# setMarkedText:selectedRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

Inserts the provided text and marks it to indicate that it’s part of an active input session.

## Declaration

```objectivec
- (void) setMarkedText:(NSString *) markedText selectedRange:(NSRange) selectedRange;
```

## Mentioned In

- [Handling text interactions in custom keyboards](../handling-text-interactions-in-custom-keyboards.md)

<a id="Discussion"></a>

## Discussion

Setting marked text either replaces the existing marked text or, if none is present, inserts it in place of the current selection.

## See Also

### Managing marked text

- [unmarkText](unmarktext%28%29.md): Unmarks the currently marked text.
