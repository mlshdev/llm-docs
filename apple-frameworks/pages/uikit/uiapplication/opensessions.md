> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/opensessions](https://developer.apple.com/documentation/uikit/uiapplication/opensessions)

# openSessions (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The sessions whose scenes are either currently active or archived by the system.

## Declaration

```swift
var openSessions: Set<UISceneSession> { get }
```

<a id="Discussion"></a>

## Discussion

An archived session doesn’t have a connected scene, but a snapshot of its UI does appear in the app switcher. When the user selects that UI in the app switcher, the system asks your app to recreate the UI from the session information.

## See Also

### Getting scene information

- [supportsMultipleScenes](supportsmultiplescenes.md): A Boolean value that indicates whether the app may display multiple scenes simultaneously.
- [connectedScenes](connectedscenes.md): The app’s currently connected scenes.

# openSessions (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The sessions whose scenes are either currently active or archived by the system.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<UISceneSession *> * openSessions;
```

<a id="Discussion"></a>

## Discussion

An archived session doesn’t have a connected scene, but a snapshot of its UI does appear in the app switcher. When the user selects that UI in the app switcher, the system asks your app to recreate the UI from the session information.

## See Also

### Getting scene information

- [supportsMultipleScenes](supportsmultiplescenes.md): A Boolean value that indicates whether the app may display multiple scenes simultaneously.
- [connectedScenes](connectedscenes.md): The app’s currently connected scenes.
