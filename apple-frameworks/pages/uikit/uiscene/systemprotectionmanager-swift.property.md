> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/systemprotectionmanager-swift.property](https://developer.apple.com/documentation/uikit/uiscene/systemprotectionmanager-swift.property)

# systemProtectionManager (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The system protection manager associated with this scene.

## Declaration

```swift
var systemProtectionManager: UIScene.SystemProtectionManager? { get }
```

<a id="discussion"></a>

## Discussion

To check whether the scene requires user authentication, inspect the manager’s [isUserAuthenticationEnabled](systemprotectionmanager-swift.class/isuserauthenticationenabled.md) property.

## See Also

### Working with system protection manager

- [UIScene.SystemProtectionManager](systemprotectionmanager-swift.class.md): A class that represents the status of system protection for the scene.
- [systemProtectionDidChangeNotification](systemprotectiondidchangenotification.md): A notification posted when the system-protection attributes of a scene change.

# systemProtectionManager (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

The system protection manager associated with this scene.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) UISceneSystemProtectionManager * systemProtectionManager;
```

<a id="discussion"></a>

## Discussion

To check whether the scene requires user authentication, inspect the manager’s [userAuthenticationEnabled](systemprotectionmanager-swift.class/isuserauthenticationenabled.md) property.

## See Also

### Working with system protection manager

- [UISceneSystemProtectionManager](systemprotectionmanager-swift.class.md): A class that represents the status of system protection for the scene.
- [UISceneSystemProtectionDidChangeNotification](systemprotectiondidchangenotification.md): A notification posted when the system-protection attributes of a scene change.
