> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwindowscene/activationconfiguration/init(useractivity:options:preview:)](https://developer.apple.com/documentation/uikit/uiwindowscene/activationconfiguration/init(useractivity:options:preview:))

# init(userActivity:options:preview:)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS

Creates an activation configuration.

## Declaration

```swift
convenience init(userActivity: NSUserActivity, options: UIWindowScene.ActivationRequestOptions? = nil, preview: UITargetedPreview? = nil)
```

## Parameters

- `userActivity`: The user activity used to request a scene.
- `options`: Options for customizing the scene request. If you don’t provide options, the system uses the default options.
- `preview`: An optional targeted preview that the system uses to animate the transition to the new scene.
