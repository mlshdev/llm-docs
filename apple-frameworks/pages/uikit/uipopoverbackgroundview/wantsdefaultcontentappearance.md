> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipopoverbackgroundview/wantsdefaultcontentappearance](https://developer.apple.com/documentation/uikit/uipopoverbackgroundview/wantsdefaultcontentappearance)

# wantsDefaultContentAppearance (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Determines whether the default content appearance should be used for the popover.

> The system no longer supports this feature.

## Declaration

```swift
class var wantsDefaultContentAppearance: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This method may be overridden to prevent the drawing of the content inset and drop shadow inside the popover. The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true), which means that the content inset and drop shadow will be drawn. Overriding this method simply means implementing it to return [false](https://developer.apple.com/documentation/swift/false), which would mean that the content inset and drop shadow will not be drawn.

# wantsDefaultContentAppearance (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 6.0+ (deprecated in 13.0) · iPadOS 6.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS  (deprecated in 13.0)

Determines whether the default content appearance should be used for the popover.

> The system no longer supports this feature.

## Declaration

```objectivec
@property (class, nonatomic, readonly) BOOL wantsDefaultContentAppearance;
```

<a id="Discussion"></a>

## Discussion

This method may be overridden to prevent the drawing of the content inset and drop shadow inside the popover. The default implementation of this method returns [true](https://developer.apple.com/documentation/swift/true), which means that the content inset and drop shadow will be drawn. Overriding this method simply means implementing it to return [false](https://developer.apple.com/documentation/swift/false), which would mean that the content inset and drop shadow will not be drawn.
