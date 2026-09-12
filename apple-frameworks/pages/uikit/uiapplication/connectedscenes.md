> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/connectedscenes](https://developer.apple.com/documentation/uikit/uiapplication/connectedscenes)

# connectedScenes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The app’s currently connected scenes.

## Declaration

```swift
var connectedScenes: Set<UIScene> { get }
```

<a id="Discussion"></a>

## Discussion

Connected scenes are those that are in memory and potentially doing active work. A connected scene may be in the foreground or background, and it may be onscreen or offscreen.

## See Also

### Getting scene information

- [supportsMultipleScenes](supportsmultiplescenes.md): A Boolean value that indicates whether the app may display multiple scenes simultaneously.
- [openSessions](opensessions.md): The sessions whose scenes are either currently active or archived by the system.

# connectedScenes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

The app’s currently connected scenes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSSet<UIScene *> * connectedScenes;
```

<a id="Discussion"></a>

## Discussion

Connected scenes are those that are in memory and potentially doing active work. A connected scene may be in the foreground or background, and it may be onscreen or offscreen.

## See Also

### Getting scene information

- [supportsMultipleScenes](supportsmultiplescenes.md): A Boolean value that indicates whether the app may display multiple scenes simultaneously.
- [openSessions](opensessions.md): The sessions whose scenes are either currently active or archived by the system.
