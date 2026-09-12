> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting](https://developer.apple.com/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting)

# UIAccessibilityContentSizeCategoryImageAdjusting (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Methods to determine when to adjust images for different content size categories.

## Declaration

```swift
protocol UIAccessibilityContentSizeCategoryImageAdjusting : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Objects adopt this protocol when they support scaling image assets to the size required by the accessibility content size categories. Typically, an object sets the [adjustsImageSizeForAccessibilityContentSizeCategory](uiaccessibilitycontentsizecategoryimageadjusting/adjustsimagesizeforaccessibilitycontentsizecategory.md) property to [true](https://developer.apple.com/documentation/swift/true) only when its image contains vector data that can scale well to the larger sizes required for accessibility.

## Topics

### Preferring accessibility-specific images

- [adjustsImageSizeForAccessibilityContentSizeCategory](uiaccessibilitycontentsizecategoryimageadjusting/adjustsimagesizeforaccessibilitycontentsizecategory.md): A Boolean value that indicates whether the image size increases to support accessibility content size categories.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextAttachment](nstextattachment.md)
- [UIButton](uibutton.md)
- [UIImageView](uiimageview.md)

## See Also

### Behaviors

- [UIAccessibilityFocus](../objectivec/uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityIdentification](uiaccessibilityidentification.md): Methods that associate a unique identifier with elements in your user interface.
- [UIAccessibilityReadingContent](uiaccessibilityreadingcontent.md): Methods to implement for an object that represents content that users read, such as a book or an article.
- [UIAccessibilityTextualContext](uiaccessibilitytextualcontext.md): Constants that describe a named context that helps identify and classify the type of text inside an element.

# UIAccessibilityContentSizeCategoryImageAdjusting (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Methods to determine when to adjust images for different content size categories.

## Declaration

```objectivec
@protocol UIAccessibilityContentSizeCategoryImageAdjusting <NSObject>
```

<a id="overview"></a>

## Overview

Objects adopt this protocol when they support scaling image assets to the size required by the accessibility content size categories. Typically, an object sets the [adjustsImageSizeForAccessibilityContentSizeCategory](uiaccessibilitycontentsizecategoryimageadjusting/adjustsimagesizeforaccessibilitycontentsizecategory.md) property to [true](https://developer.apple.com/documentation/swift/true) only when its image contains vector data that can scale well to the larger sizes required for accessibility.

## Topics

### Preferring accessibility-specific images

- [adjustsImageSizeForAccessibilityContentSizeCategory](uiaccessibilitycontentsizecategoryimageadjusting/adjustsimagesizeforaccessibilitycontentsizecategory.md): A Boolean value that indicates whether the image size increases to support accessibility content size categories.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [NSTextAttachment](nstextattachment.md)
- [UIButton](uibutton.md)
- [UIImageView](uiimageview.md)

## See Also

### Behaviors

- [UIAccessibilityFocus](../objectivec/uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityIdentification](uiaccessibilityidentification.md): Methods that associate a unique identifier with elements in your user interface.
- [UIAccessibilityReadingContent](uiaccessibilityreadingcontent.md): Methods to implement for an object that represents content that users read, such as a book or an article.
- [UIAccessibilityTextualContext](uiaccessibilitytextualcontext.md): Constants that describe a named context that helps identify and classify the type of text inside an element.
