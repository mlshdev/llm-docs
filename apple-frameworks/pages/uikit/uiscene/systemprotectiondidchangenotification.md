> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/systemprotectiondidchangenotification](https://developer.apple.com/documentation/uikit/uiscene/systemprotectiondidchangenotification)

# systemProtectionDidChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A notification posted when the system-protection attributes of a scene change.

## Declaration

```swift
nonisolated class let systemProtectionDidChangeNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

The object of the notification is the scene for which protection attributes changed.

## See Also

### Working with system protection manager

- [systemProtectionManager](systemprotectionmanager-swift.property.md): The system protection manager associated with this scene.
- [UIScene.SystemProtectionManager](systemprotectionmanager-swift.class.md): A class that represents the status of system protection for the scene.

# UISceneSystemProtectionDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A notification posted when the system-protection attributes of a scene change.

## Declaration

```objectivec
extern NSNotificationName const UISceneSystemProtectionDidChangeNotification;
```

<a id="discussion"></a>

## Discussion

The object of the notification is the scene for which protection attributes changed.

## See Also

### Working with system protection manager

- [systemProtectionManager](systemprotectionmanager-swift.property.md): The system protection manager associated with this scene.
- [UISceneSystemProtectionManager](systemprotectionmanager-swift.class.md): A class that represents the status of system protection for the scene.
