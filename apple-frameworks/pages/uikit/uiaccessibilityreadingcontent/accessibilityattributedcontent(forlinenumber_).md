> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityreadingcontent/accessibilityattributedcontent(forlinenumber:)](https://developer.apple.com/documentation/uikit/uiaccessibilityreadingcontent/accessibilityattributedcontent(forlinenumber:))

# accessibilityAttributedContent(forLineNumber:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the styled text associated with the specified line number.

## Declaration

```swift
@MainActor optional func accessibilityAttributedContent(forLineNumber lineNumber: Int) -> NSAttributedString?
```

## Parameters

- `lineNumber`: A line number in the receiver’s content.

<a id="return-value"></a>

## Return Value

An attributed string containing the text that is associated with the specified line number, or `nil` if the line number is invalid. By default, this function returns `nil`.

<a id="Discussion"></a>

## Discussion

The system tries to call this method before calling the [accessibilityContent(forLineNumber:)](accessibilitycontent%28forlinenumber_%29.md) method.

## See Also

### Accessing the content on a page

- [accessibilityLineNumber(for:)](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityContent(forLineNumber:)](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrame(forLineNumber:)](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent()](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent()](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.

# accessibilityAttributedContentForLineNumber: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Returns the styled text associated with the specified line number.

## Declaration

```objectivec
- (NSAttributedString *) accessibilityAttributedContentForLineNumber:(NSInteger) lineNumber;
```

## Parameters

- `lineNumber`: A line number in the receiver’s content.

<a id="return-value"></a>

## Return Value

An attributed string containing the text that is associated with the specified line number, or `nil` if the line number is invalid. By default, this function returns `nil`.

<a id="Discussion"></a>

## Discussion

The system tries to call this method before calling the [accessibilityContentForLineNumber:](accessibilitycontent%28forlinenumber_%29.md) method.

## See Also

### Accessing the content on a page

- [accessibilityLineNumberForPoint:](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityContentForLineNumber:](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrameForLineNumber:](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.
