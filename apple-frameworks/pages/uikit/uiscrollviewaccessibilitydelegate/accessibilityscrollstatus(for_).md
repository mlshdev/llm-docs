> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewaccessibilitydelegate/accessibilityscrollstatus(for:)](https://developer.apple.com/documentation/uikit/uiscrollviewaccessibilitydelegate/accessibilityscrollstatus(for:))

# accessibilityScrollStatus(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a string describing the content at the current offset in the scroll view.

## Declaration

```swift
optional func accessibilityScrollStatus(for scrollView: UIScrollView) -> String?
```

## Parameters

- `scrollView`: The scroll view containing the content.

<a id="return-value"></a>

## Return Value

A custom status string for the current offset.

<a id="Discussion"></a>

## Discussion

For example, in a user interface that scrolls through the books in a bookcase, you could return “Books 10 through 20”. By default, VoiceOver announces “Page *X* of *Y*” while scrolling.

Use the [accessibilityAttributedScrollStatus(for:)](accessibilityattributedscrollstatus%28for_%29.md) method if portions of your string should be spoken in a different language.

## See Also

### Providing descriptive information

- [accessibilityAttributedScrollStatus(for:)](accessibilityattributedscrollstatus%28for_%29.md): Returns an attributed string describing the content at the current offset in the scroll view.

# accessibilityScrollStatusForScrollView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns a string describing the content at the current offset in the scroll view.

## Declaration

```objectivec
- (NSString *) accessibilityScrollStatusForScrollView:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll view containing the content.

<a id="return-value"></a>

## Return Value

A custom status string for the current offset.

<a id="Discussion"></a>

## Discussion

For example, in a user interface that scrolls through the books in a bookcase, you could return “Books 10 through 20”. By default, VoiceOver announces “Page *X* of *Y*” while scrolling.

Use the [accessibilityAttributedScrollStatusForScrollView:](accessibilityattributedscrollstatus%28for_%29.md) method if portions of your string should be spoken in a different language.

## See Also

### Providing descriptive information

- [accessibilityAttributedScrollStatusForScrollView:](accessibilityattributedscrollstatus%28for_%29.md): Returns an attributed string describing the content at the current offset in the scroll view.
