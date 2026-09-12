> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationshortcutitem/localizedtitle](https://developer.apple.com/documentation/uikit/uiapplicationshortcutitem/localizedtitle)

# localizedTitle (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The required, user-visible title for the Home Screen dynamic quick action.

## Declaration

```swift
var localizedTitle: String { get }
```

<a id="Discussion"></a>

## Discussion

Every Home Screen dynamic quick action must have a user-visible title.

If the title fits on one line, the system displays it as a single line quick action. If the title is too long for one line and you have not specified a [localizedSubtitle](localizedsubtitle.md) string, the system displays the title on two lines.

To internationalize the title for a Home Screen dynamic quick action, employ the [NSLocalizedString](../../foundation/nslocalizedstring.md) Foundation function, described in [Foundation Functions](../../foundation/foundation-functions.md), along with a `Localizable.strings` file in your Xcode project.

## See Also

### Inspecting a Home Screen dynamic quick action

- [localizedSubtitle](localizedsubtitle.md): The optional, user-visible subtitle for the Home Screen dynamic quick action.
- [type](type.md): A required, app-specific string that you employ to identify the type of quick action to perform.
- [icon](icon.md): The optional icon for the Home Screen dynamic quick action.
- [userInfo](userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home screen quick action.

# localizedTitle (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The required, user-visible title for the Home Screen dynamic quick action.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * localizedTitle;
```

<a id="Discussion"></a>

## Discussion

Every Home Screen dynamic quick action must have a user-visible title.

If the title fits on one line, the system displays it as a single line quick action. If the title is too long for one line and you have not specified a [localizedSubtitle](localizedsubtitle.md) string, the system displays the title on two lines.

To internationalize the title for a Home Screen dynamic quick action, employ the [NSLocalizedString](../../foundation/nslocalizedstring.md) Foundation function, described in [Foundation Functions](../../foundation/foundation-functions.md), along with a `Localizable.strings` file in your Xcode project.

## See Also

### Inspecting a Home Screen dynamic quick action

- [localizedSubtitle](localizedsubtitle.md): The optional, user-visible subtitle for the Home Screen dynamic quick action.
- [type](type.md): A required, app-specific string that you employ to identify the type of quick action to perform.
- [icon](icon.md): The optional icon for the Home Screen dynamic quick action.
- [userInfo](userinfo.md): Optional, app-specific information that you can provide for use when your app performs the Home screen quick action.
