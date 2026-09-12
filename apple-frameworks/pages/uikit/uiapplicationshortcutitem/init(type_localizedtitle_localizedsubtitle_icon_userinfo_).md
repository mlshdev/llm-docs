> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationshortcutitem/init(type:localizedtitle:localizedsubtitle:icon:userinfo:)](https://developer.apple.com/documentation/uikit/uiapplicationshortcutitem/init(type:localizedtitle:localizedsubtitle:icon:userinfo:))

# init(type:localizedTitle:localizedSubtitle:icon:userInfo:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an immutable Home Screen dynamic quick action with user-visible title, icon, and user info dictionary.

## Declaration

```swift
init(type: String, localizedTitle: String, localizedSubtitle: String?, icon: UIApplicationShortcutIcon?, userInfo: [String : any NSSecureCoding]? = nil)
```

## Parameters

- `type`: The required, app-defined type of the Home Screen quick action.
- `localizedTitle`: The required, user-visible title of the Home Screen quick action.
- `localizedSubtitle`: The optional, user-visible subtitle of the Home Screen quick action.
- `icon`: The optional icon for the Home Screen quick action.
- `userInfo`: App-defined information about the Home Screen quick action, to be used by your app to implement the action.

  > **Important**

  >  This method throws an exception if the value of this parameter isn’t property-list-encodable. For more information, see [Serializing Property Lists](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Articles/serializing.html#//apple_ref/doc/uid/20000952) in [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i) and see [PropertyListSerialization](../../foundation/propertylistserialization.md).

  One common, important use for this dictionary is to specify the version of your app. If a user installs an update for your app but hasn’t yet launched the update, pressing your Home Screen icon shows the dynamic quick actions for the previously-installed version. Including the app version in the `userInfo` dictionary lets you gracefully handle this scenario.

<a id="return-value"></a>

## Return Value

An immutable Home Screen dynamic quick action item with a user-visible title, optional subtitle, optional icon, and optional user info dictionary.

## See Also

### Creating a Home Screen dynamic quick action

- [init(type:localizedTitle:)](init%28type_localizedtitle_%29.md): Creates an immutable Home Screen dynamic quick action with a user-visible title and no icon.

# initWithType:localizedTitle:localizedSubtitle:icon:userInfo: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates an immutable Home Screen dynamic quick action with user-visible title, icon, and user info dictionary.

## Declaration

```objectivec
- (instancetype) initWithType:(NSString *) type localizedTitle:(NSString *) localizedTitle localizedSubtitle:(NSString *) localizedSubtitle icon:(UIApplicationShortcutIcon *) icon userInfo:(NSDictionary<NSString *,id<NSSecureCoding>> *) userInfo;
```

## Parameters

- `type`: The required, app-defined type of the Home Screen quick action.
- `localizedTitle`: The required, user-visible title of the Home Screen quick action.
- `localizedSubtitle`: The optional, user-visible subtitle of the Home Screen quick action.
- `icon`: The optional icon for the Home Screen quick action.
- `userInfo`: App-defined information about the Home Screen quick action, to be used by your app to implement the action.

  > **Important**

  >  This method throws an exception if the value of this parameter isn’t property-list-encodable. For more information, see [Serializing Property Lists](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Articles/serializing.html#//apple_ref/doc/uid/20000952) in [Archives and Serializations Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Archiving/Archiving.html#//apple_ref/doc/uid/10000047i) and see [NSPropertyListSerialization](../../foundation/propertylistserialization.md).

  One common, important use for this dictionary is to specify the version of your app. If a user installs an update for your app but hasn’t yet launched the update, pressing your Home Screen icon shows the dynamic quick actions for the previously-installed version. Including the app version in the `userInfo` dictionary lets you gracefully handle this scenario.

<a id="return-value"></a>

## Return Value

An immutable Home Screen dynamic quick action item with a user-visible title, optional subtitle, optional icon, and optional user info dictionary.

## See Also

### Creating a Home Screen dynamic quick action

- [initWithType:localizedTitle:](init%28type_localizedtitle_%29.md): Creates an immutable Home Screen dynamic quick action with a user-visible title and no icon.
