> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationshortcutitem/init(type:localizedtitle:)](https://developer.apple.com/documentation/uikit/uiapplicationshortcutitem/init(type:localizedtitle:))

# init(type:localizedTitle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an immutable Home Screen dynamic quick action with a user-visible title and no icon.

## Declaration

```swift
convenience init(type: String, localizedTitle: String)
```

## Parameters

- `type`: The required, app-defined type of the Home Screen quick action.
- `localizedTitle`: The required, user-visible title of the Home Screen quick action.

<a id="return-value"></a>

## Return Value

An immutable Home Screen dynamic quick action with a user-visible title and no icon.

## See Also

### Creating a Home Screen dynamic quick action

- [init(type:localizedTitle:localizedSubtitle:icon:userInfo:)](init%28type_localizedtitle_localizedsubtitle_icon_userinfo_%29.md): Creates an immutable Home Screen dynamic quick action with user-visible title, icon, and user info dictionary.

# initWithType:localizedTitle: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an immutable Home Screen dynamic quick action with a user-visible title and no icon.

## Declaration

```objectivec
- (instancetype) initWithType:(NSString *) type localizedTitle:(NSString *) localizedTitle;
```

## Parameters

- `type`: The required, app-defined type of the Home Screen quick action.
- `localizedTitle`: The required, user-visible title of the Home Screen quick action.

<a id="return-value"></a>

## Return Value

An immutable Home Screen dynamic quick action with a user-visible title and no icon.

## See Also

### Creating a Home Screen dynamic quick action

- [initWithType:localizedTitle:localizedSubtitle:icon:userInfo:](init%28type_localizedtitle_localizedsubtitle_icon_userinfo_%29.md): Creates an immutable Home Screen dynamic quick action with user-visible title, icon, and user info dictionary.
