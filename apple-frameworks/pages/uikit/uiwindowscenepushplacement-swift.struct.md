> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscenepushplacement-swift.struct](https://developer.apple.com/documentation/uikit/uiwindowscenepushplacement-swift.struct)

# UIWindowScenePushPlacement

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A placement that indicates the system needs to present the window by pushing it onto another window.

## Declaration

```swift
struct UIWindowScenePushPlacement
```

<a id="overview"></a>

## Overview

Use this type of placement to push a new scene in place of an existing scene. The new scene appears in the same position as the original scene, hiding it. Closing the new scene makes the original scene reappear.

The following code shows how to launch a new scene in place of an original scene:

```swift
extension NSUserActivity {
    static let MyNewSceneActivityType = "com.example.my-activity-type"
}

func presentNewScene() {
    let options = UIWindowScene.ActivationRequestOptions()
    
    // Create the placement and specify which scene session you want to target.
    options.placement = UIWindowScenePushPlacement(target: originalScene.session)

    // Specify the activity type for the app delegate to launch the corresponding scene.
    let request = UISceneSessionActivationRequest(
        role: .windowApplication,
        userActivity: NSUserActivity(activityType: NSUserActivity.MyNewSceneActivityType),
        options: options
    )

    UIApplication.shared.activateSceneSession(for: request) { error in
        print(error)
    }
}
```

## Topics

### Creating a push placement

- [init(target:)](uiwindowscenepushplacement-swift.struct/init%28target_%29.md): Creates a push placement.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [UIWindowScenePlacement](uiwindowsceneplacement-swift.protocol.md)

## See Also

### Positioning windows

- [placement](uiwindowscene/activationrequestoptions/placement.md): The placement you prefer when the system activates the window scene.
- [UIWindowScenePlacement](uiwindowsceneplacement-swift.protocol.md): The placement of a window scene in the workspace.
- [UIWindowSceneProminentPlacement](uiwindowsceneprominentplacement-swift.struct.md): A placement that indicates the system should present the window more prominently than others in the space.
- [UIWindowSceneStandardPlacement](uiwindowscenestandardplacement-swift.struct.md): A placement that indicates the system should present the window using the default style of the system in the space.
