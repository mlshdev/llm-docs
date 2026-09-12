> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimutableapplicationshortcutitem/localizedsubtitle](https://developer.apple.com/documentation/uikit/uimutableapplicationshortcutitem/localizedsubtitle)

# localizedSubtitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The optional, user-visible subtitle for the Home Screen dynamic mutable quick action.

## Declaration

```swift
var localizedSubtitle: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If you specify a subtitle for a mutable quick action, the system then displays the title on a single line (potentially with an ellipsis character), no matter how long the title is.

To internationalize the subtitle for a Home Screen mutable, dynamic quick action, employ the [NSLocalizedString](../../foundation/nslocalizedstring.md) Foundation function, described in [Foundation Functions](../../foundation/foundation-functions.md), along with a `Localized.strings` file in your Xcode project.

## See Also

### Inspecting a Home Screen dynamic mutable quick action

- [localizedTitle](localizedtitle.md): The required, user-visible title for the Home Screen dynamic mutable quick action.
- [type](type.md): A required, app-specific string that you can employ to identify the type of quick action to perform.
- [icon](icon.md): The optional icon for the Home Screen dynamic mutable quick action.
- [userInfo](userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home Screen dynamic mutable quick action.

# localizedSubtitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The optional, user-visible subtitle for the Home Screen dynamic mutable quick action.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * localizedSubtitle;
```

<a id="Discussion"></a>

## Discussion

If you specify a subtitle for a mutable quick action, the system then displays the title on a single line (potentially with an ellipsis character), no matter how long the title is.

To internationalize the subtitle for a Home Screen mutable, dynamic quick action, employ the [NSLocalizedString](../../foundation/nslocalizedstring.md) Foundation function, described in [Foundation Functions](../../foundation/foundation-functions.md), along with a `Localized.strings` file in your Xcode project.

## See Also

### Inspecting a Home Screen dynamic mutable quick action

- [localizedTitle](localizedtitle.md): The required, user-visible title for the Home Screen dynamic mutable quick action.
- [type](type.md): A required, app-specific string that you can employ to identify the type of quick action to perform.
- [icon](icon.md): The optional icon for the Home Screen dynamic mutable quick action.
- [userInfo](userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home Screen dynamic mutable quick action.
