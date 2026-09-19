> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uitabgroup/iscollapsedbydefault

# isCollapsedByDefault (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · visionOS 26.1+

Whether the group is initially displayed in a collapsed state in the sidebar.

## Declaration

```swift
var isCollapsedByDefault: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When true, the group renders collapsed the first time it appears in the sidebar. The user can expand the group manually, and any subsequent user interactions or customization changes take precedence over this default.

This property has no effect in contexts where groups are not collapsible, such as when `sidebarAppearance == .inline`.

Default is `NO`.

# collapsedByDefault (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 26.1+ · iPadOS 26.1+ · Mac Catalyst 26.1+ · visionOS 26.1+

Whether the group is initially displayed in a collapsed state in the sidebar.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isCollapsedByDefault) BOOL collapsedByDefault;
```

<a id="discussion"></a>

## Discussion

When true, the group renders collapsed the first time it appears in the sidebar. The user can expand the group manually, and any subsequent user interactions or customization changes take precedence over this default.

This property has no effect in contexts where groups are not collapsible, such as when `sidebarAppearance == .inline`.

Default is `NO`.
