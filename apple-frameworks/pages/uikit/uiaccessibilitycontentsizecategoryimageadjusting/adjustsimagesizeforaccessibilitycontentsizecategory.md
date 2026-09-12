> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/adjustsimagesizeforaccessibilitycontentsizecategory](https://developer.apple.com/documentation/uikit/uiaccessibilitycontentsizecategoryimageadjusting/adjustsimagesizeforaccessibilitycontentsizecategory)

# adjustsImageSizeForAccessibilityContentSizeCategory (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the image size increases to support accessibility content size categories.

## Declaration

```swift
@MainActor var adjustsImageSizeForAccessibilityContentSizeCategory: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the current object scales its image to an appropriate accessibility content size category. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the current object displays its image at the regular content sizes.

# adjustsImageSizeForAccessibilityContentSizeCategory (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the image size increases to support accessibility content size categories.

## Declaration

```objectivec
@property (nonatomic) BOOL adjustsImageSizeForAccessibilityContentSizeCategory;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the current object scales its image to an appropriate accessibility content size category. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the current object displays its image at the regular content sizes.
