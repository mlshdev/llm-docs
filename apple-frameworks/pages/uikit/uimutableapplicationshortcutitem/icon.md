> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableapplicationshortcutitem/icon](https://developer.apple.com/documentation/uikit/uimutableapplicationshortcutitem/icon)

# icon (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The optional icon for the Home Screen dynamic mutable quick action.

## Declaration

```swift
@NSCopying var icon: UIApplicationShortcutIcon? { get set }
```

<a id="Discussion"></a>

## Discussion

Quick action icons are template (alpha-channel-only) images that you typically provide as part of an asset catalog. For more information, see [UIApplicationShortcutIcon](../uiapplicationshortcuticon.md).

## See Also

### Inspecting a Home Screen dynamic mutable quick action

- [localizedTitle](localizedtitle.md): The required, user-visible title for the Home Screen dynamic mutable quick action.
- [localizedSubtitle](localizedsubtitle.md): The optional, user-visible subtitle for the Home Screen dynamic mutable quick action.
- [type](type.md): A required, app-specific string that you can employ to identify the type of quick action to perform.
- [userInfo](userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home Screen dynamic mutable quick action.

# icon (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The optional icon for the Home Screen dynamic mutable quick action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) UIApplicationShortcutIcon * icon;
```

<a id="Discussion"></a>

## Discussion

Quick action icons are template (alpha-channel-only) images that you typically provide as part of an asset catalog. For more information, see [UIApplicationShortcutIcon](../uiapplicationshortcuticon.md).

## See Also

### Inspecting a Home Screen dynamic mutable quick action

- [localizedTitle](localizedtitle.md): The required, user-visible title for the Home Screen dynamic mutable quick action.
- [localizedSubtitle](localizedsubtitle.md): The optional, user-visible subtitle for the Home Screen dynamic mutable quick action.
- [type](type.md): A required, app-specific string that you can employ to identify the type of quick action to perform.
- [userInfo](userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home Screen dynamic mutable quick action.
