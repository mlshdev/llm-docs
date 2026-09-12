> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityreadingcontent/accessibilitycontent(forlinenumber:)](https://developer.apple.com/documentation/uikit/uiaccessibilityreadingcontent/accessibilitycontent(forlinenumber:))

# accessibilityContent(forLineNumber:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text associated with the specified line number.

## Declaration

```swift
@MainActor func accessibilityContent(forLineNumber lineNumber: Int) -> String?
```

## Parameters

- `lineNumber`: A line number in the receiver’s content.

<a id="return-value"></a>

## Return Value

A string containing the text that is associated with the specified line number, or `nil` if the line number is invalid. By default, this function returns `nil`.

<a id="Discussion"></a>

## Discussion

The system tries to call the [accessibilityAttributedContent(forLineNumber:)](accessibilityattributedcontent%28forlinenumber_%29.md) method before calling this method.

## See Also

### Accessing the content on a page

- [accessibilityLineNumber(for:)](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContent(forLineNumber:)](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityFrame(forLineNumber:)](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent()](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent()](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.

# accessibilityContentForLineNumber: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the text associated with the specified line number.

## Declaration

```objectivec
- (NSString *) accessibilityContentForLineNumber:(NSInteger) lineNumber;
```

## Parameters

- `lineNumber`: A line number in the receiver’s content.

<a id="return-value"></a>

## Return Value

A string containing the text that is associated with the specified line number, or `nil` if the line number is invalid. By default, this function returns `nil`.

<a id="Discussion"></a>

## Discussion

The system tries to call the [accessibilityAttributedContentForLineNumber:](accessibilityattributedcontent%28forlinenumber_%29.md) method before calling this method.

## See Also

### Accessing the content on a page

- [accessibilityLineNumberForPoint:](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContentForLineNumber:](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityFrameForLineNumber:](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.
