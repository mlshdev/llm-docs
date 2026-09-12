> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibarbuttonitembadge/badgewithcount:](https://developer.apple.com/documentation/uikit/uibarbuttonitembadge/badgewithcount:)

# badgeWithCount:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Creates a badge with the specified `count`.

## Declaration

```objectivec
+ (instancetype) badgeWithCount:(NSUInteger) count;
```

<a id="discussion"></a>

## Discussion

The count is localized when shown, and will update when the app’s locale changes.
