> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilityreadingcontent](https://developer.apple.com/documentation/uikit/uiaccessibilityreadingcontent)

# UIAccessibilityReadingContent (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Methods to implement for an object that represents content that users read, such as a book or an article.

## Declaration

```swift
protocol UIAccessibilityReadingContent
```

<a id="overview"></a>

## Overview

To give VoiceOver users a superior, continuous reading experience, you can implement this protocol on an element that represents readable content, characterize it with the [causesPageTurn](uiaccessibilitytraits/causespageturn.md) trait, and use the [UIAccessibilityScrollDirection.next](uiaccessibilityscrolldirection/next.md) and [UIAccessibilityScrollDirection.previous](uiaccessibilityscrolldirection/previous.md) constants to enable page turning.

## Topics

### Accessing the content on a page

- [accessibilityLineNumber(for:)](uiaccessibilityreadingcontent/accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContent(forLineNumber:)](uiaccessibilityreadingcontent/accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContent(forLineNumber:)](uiaccessibilityreadingcontent/accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrame(forLineNumber:)](uiaccessibilityreadingcontent/accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent()](uiaccessibilityreadingcontent/accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent()](uiaccessibilityreadingcontent/accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.

## See Also

### Behaviors

- [UIAccessibilityFocus](../objectivec/uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityIdentification](uiaccessibilityidentification.md): Methods that associate a unique identifier with elements in your user interface.
- [UIAccessibilityContentSizeCategoryImageAdjusting](uiaccessibilitycontentsizecategoryimageadjusting.md): Methods to determine when to adjust images for different content size categories.
- [UIAccessibilityTextualContext](uiaccessibilitytextualcontext.md): Constants that describe a named context that helps identify and classify the type of text inside an element.

# UIAccessibilityReadingContent (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Methods to implement for an object that represents content that users read, such as a book or an article.

## Declaration

```objectivec
@protocol UIAccessibilityReadingContent
```

<a id="overview"></a>

## Overview

To give VoiceOver users a superior, continuous reading experience, you can implement this protocol on an element that represents readable content, characterize it with the [UIAccessibilityTraitCausesPageTurn](uiaccessibilitytraits/causespageturn.md) trait, and use the [UIAccessibilityScrollDirectionNext](uiaccessibilityscrolldirection/next.md) and [UIAccessibilityScrollDirectionPrevious](uiaccessibilityscrolldirection/previous.md) constants to enable page turning.

## Topics

### Accessing the content on a page

- [accessibilityLineNumberForPoint:](uiaccessibilityreadingcontent/accessibilitylinenumber%28for_%29.md): Returns the line number that contains the specified point.
- [accessibilityAttributedContentForLineNumber:](uiaccessibilityreadingcontent/accessibilityattributedcontent%28forlinenumber_%29.md): Returns the styled text associated with the specified line number.
- [accessibilityContentForLineNumber:](uiaccessibilityreadingcontent/accessibilitycontent%28forlinenumber_%29.md): Returns the text associated with the specified line number.
- [accessibilityFrameForLineNumber:](uiaccessibilityreadingcontent/accessibilityframe%28forlinenumber_%29.md): Returns the onscreen frame associated with the specified line number.
- [accessibilityAttributedPageContent](uiaccessibilityreadingcontent/accessibilityattributedpagecontent%28%29.md): Returns the styled text displayed on the current page.
- [accessibilityPageContent](uiaccessibilityreadingcontent/accessibilitypagecontent%28%29.md): Returns the text displayed on the current page.

## See Also

### Behaviors

- [UIAccessibilityFocus](../objectivec/uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityIdentification](uiaccessibilityidentification.md): Methods that associate a unique identifier with elements in your user interface.
- [UIAccessibilityContentSizeCategoryImageAdjusting](uiaccessibilitycontentsizecategoryimageadjusting.md): Methods to determine when to adjust images for different content size categories.
- [UIAccessibilityTextualContext](uiaccessibilitytextualcontext.md): Constants that describe a named context that helps identify and classify the type of text inside an element.
