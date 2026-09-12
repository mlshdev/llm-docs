> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityreadingcontent/accessibilitylinenumber(for:)](https://developer.apple.com/documentation/uikit/uiaccessibilityreadingcontent/accessibilitylinenumber(for:))

# accessibilityLineNumber(for:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the line number that contains the specified point.

## Declaration

```swift
@MainActor func accessibilityLineNumber(for point: CGPoint) -> Int
```

## Parameters

- `point`: A point within the bounds of the receiver’s view space, in screen coordinates. That is, a point for which `[self pointInside:point withEvent:event] == YES`.

<a id="return-value"></a>

## Return Value

The line number that contains the specified point or `NSNotFound` if the point indicates an empty area within the receiver’s rectangle. By default, this method returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method is called only when `point` is within the bounds of the view or element.

## See Also

### Related Documentation

- [convertToScreenCoordinates(\_:in:)](../uiaccessibility/converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

### Accessing the content on a page

- [accessibilityAttributedContent(forLineNumber:)](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContent(forLineNumber:)](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrame(forLineNumber:)](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent()](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent()](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.

# accessibilityLineNumberForPoint: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the line number that contains the specified point.

## Declaration

```objectivec
- (NSInteger) accessibilityLineNumberForPoint:(CGPoint) point;
```

## Parameters

- `point`: A point within the bounds of the receiver’s view space, in screen coordinates. That is, a point for which `[self pointInside:point withEvent:event] == YES`.

<a id="return-value"></a>

## Return Value

The line number that contains the specified point or `NSNotFound` if the point indicates an empty area within the receiver’s rectangle. By default, this method returns `NSNotFound`.

<a id="Discussion"></a>

## Discussion

This method is called only when `point` is within the bounds of the view or element.

## See Also

### Related Documentation

- [UIAccessibilityConvertFrameToScreenCoordinates](../uiaccessibility/converttoscreencoordinates%28__in_%29-9ziiu.md): Converts the specified rectangle from view coordinates to screen coordinates.

### Accessing the content on a page

- [accessibilityAttributedContentForLineNumber:](accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContentForLineNumber:](accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrameForLineNumber:](accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent](accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent](accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.
