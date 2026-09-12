> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityreadingcontent/accessibilityattributedpagecontent()](https://developer.apple.com/documentation/uikit/uiaccessibilityreadingcontent/accessibilityattributedpagecontent())

# accessibilityAttributedPageContent() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the styled text displayed on the current page.

## Declaration

```swift
@MainActor optional func accessibilityAttributedPageContent() -> NSAttributedString?
```

<a id="return-value"></a>

## Return Value

An attributed string that contains the text displayed on the current page.

<a id="Discussion"></a>

## Discussion

The system tries to call this method before calling the [accessibilityPageContent()](accessibilitypagecontent%28%29.md) method.

## See Also

### Accessing the content on a page

- [accessibilityLineNumber(for:)](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContent(forLineNumber:)](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContent(forLineNumber:)](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrame(forLineNumber:)](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityPageContent()](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.

# accessibilityAttributedPageContent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the styled text displayed on the current page.

## Declaration

```objectivec
- (NSAttributedString *) accessibilityAttributedPageContent;
```

<a id="return-value"></a>

## Return Value

An attributed string that contains the text displayed on the current page.

<a id="Discussion"></a>

## Discussion

The system tries to call this method before calling the [accessibilityPageContent](accessibilitypagecontent%28%29.md) method.

## See Also

### Accessing the content on a page

- [accessibilityLineNumberForPoint:](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContentForLineNumber:](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContentForLineNumber:](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrameForLineNumber:](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityPageContent](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.
