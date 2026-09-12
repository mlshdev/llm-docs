> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityreadingcontent/accessibilityframe(forlinenumber:)](https://developer.apple.com/documentation/uikit/uiaccessibilityreadingcontent/accessibilityframe(forlinenumber:))

# accessibilityFrame(forLineNumber:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the onscreen frame associated with the specified line number.

## Declaration

```swift
@MainActor func accessibilityFrame(forLineNumber lineNumber: Int) -> CGRect
```

## Parameters

- `lineNumber`: The line number.

<a id="return-value"></a>

## Return Value

The frame in the receiver that contains the specified line number, in screen coordinates. By default, this method returns `CGRectZero`.

<a id="Discussion"></a>

## Discussion

To determine the onscreen rectangle (or frame) of a line, you can use code such as the following:

**Swift**

```swift
let lineBounds: CGRect = // the bounds of the line in view space
let view: UIView = // the relevant view
return UIAccessibilityConvertFrameToScreenCoordinates(lineBounds, view)
```

**Objective-C**

```objc
CGRect lineBounds = // The bounds of the line in view space.
UIView *view = // The relevant view.
return UIAccessibilityConvertFrameToScreenCoordinates(lineBounds, view);
```

## See Also

### Related Documentation

- [convertToScreenCoordinates(\_:in:)](../uiaccessibility/converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

### Accessing the content on a page

- [accessibilityLineNumber(for:)](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContent(forLineNumber:)](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContent(forLineNumber:)](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityAttributedPageContent()](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent()](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.

# accessibilityFrameForLineNumber: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the onscreen frame associated with the specified line number.

## Declaration

```objectivec
- (CGRect) accessibilityFrameForLineNumber:(NSInteger) lineNumber;
```

## Parameters

- `lineNumber`: The line number.

<a id="return-value"></a>

## Return Value

The frame in the receiver that contains the specified line number, in screen coordinates. By default, this method returns `CGRectZero`.

<a id="Discussion"></a>

## Discussion

To determine the onscreen rectangle (or frame) of a line, you can use code such as the following:

**Swift**

```swift
let lineBounds: CGRect = // the bounds of the line in view space
let view: UIView = // the relevant view
return UIAccessibilityConvertFrameToScreenCoordinates(lineBounds, view)
```

**Objective-C**

```objc
CGRect lineBounds = // The bounds of the line in view space.
UIView *view = // The relevant view.
return UIAccessibilityConvertFrameToScreenCoordinates(lineBounds, view);
```

## See Also

### Related Documentation

- [UIAccessibilityConvertFrameToScreenCoordinates](../uiaccessibility/converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

### Accessing the content on a page

- [accessibilityLineNumberForPoint:](accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContentForLineNumber:](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContentForLineNumber:](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityAttributedPageContent](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.
