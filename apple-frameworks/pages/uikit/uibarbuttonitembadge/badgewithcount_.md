> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uibarbuttonitembadge/badgewithcount:

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
