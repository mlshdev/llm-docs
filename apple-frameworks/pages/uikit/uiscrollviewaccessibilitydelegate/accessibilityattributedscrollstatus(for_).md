> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscrollviewaccessibilitydelegate/accessibilityattributedscrollstatus(for:)](https://developer.apple.com/documentation/uikit/uiscrollviewaccessibilitydelegate/accessibilityattributedscrollstatus(for:))

# accessibilityAttributedScrollStatus(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns an attributed string describing the content at the current offset in the scroll view.

## Declaration

```swift
optional func accessibilityAttributedScrollStatus(for scrollView: UIScrollView) -> NSAttributedString?
```

## Parameters

- `scrollView`: The scroll view containing the content.

<a id="return-value"></a>

## Return Value

An attributed string describing the content.

<a id="Discussion"></a>

## Discussion

Your implementation of this method returns a description of the content that’s currently visible in the scroll view. Use this method (instead of the [accessibilityScrollStatus(for:)](accessibilityscrollstatus%28for_%29.md) method) when you want to include attributes that specify which language to use when speaking the text. For more information, see [UIAccessibilitySpeechAttributeLanguage](../uiaccessibilityspeechattributelanguage.md).

## See Also

### Providing descriptive information

- [accessibilityScrollStatus(for:)](accessibilityscrollstatus%28for_%29.md): Returns a string describing the content at the current offset in the scroll view.

# accessibilityAttributedScrollStatusForScrollView: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns an attributed string describing the content at the current offset in the scroll view.

## Declaration

```objectivec
- (NSAttributedString *) accessibilityAttributedScrollStatusForScrollView:(UIScrollView *) scrollView;
```

## Parameters

- `scrollView`: The scroll view containing the content.

<a id="return-value"></a>

## Return Value

An attributed string describing the content.

<a id="Discussion"></a>

## Discussion

Your implementation of this method returns a description of the content that’s currently visible in the scroll view. Use this method (instead of the [accessibilityScrollStatusForScrollView:](accessibilityscrollstatus%28for_%29.md) method) when you want to include attributes that specify which language to use when speaking the text. For more information, see [UIAccessibilitySpeechAttributeLanguage](../uiaccessibilityspeechattributelanguage.md).

## See Also

### Providing descriptive information

- [accessibilityScrollStatusForScrollView:](accessibilityscrollstatus%28for_%29.md): Returns a string describing the content at the current offset in the scroll view.
