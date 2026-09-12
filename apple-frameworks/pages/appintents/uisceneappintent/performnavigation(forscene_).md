> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/uisceneappintent/performnavigation(forscene:)](https://developer.apple.com/documentation/appintents/uisceneappintent/performnavigation(forscene:))

# performNavigation(forScene:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Tells the app intent that the system is about to show the specified scene.

## Declaration

```swift
func performNavigation(forScene scene: UIScene)
```

## Parameters

- `scene`: The scene the system displays when the app runs in the foreground.

## Mentioned In

- [Directing app intents to your app’s scenes](../directing-app-intents-to-your-apps-scenes.md)

<a id="discussion"></a>

## Discussion

If the delegate for `scene` doesn’t implement the [scene(\_:willPerformAppIntent:)](../appintentscenedelegate/scene%28__willperformappintent_%29.md) method of the [AppIntentSceneDelegate](../appintentscenedelegate.md) protocol, the system calls this method before running the app intent. Use this method to perform any scene-related tasks before the system brings the scene to the foreground. For example, you might use this method to configure the views of the scene with the app intent’s content. The system calls this method before calling the app intent’s [perform()](../appintent/perform%28%29.md) method.

If you don’t implement this method in your app intent type, the default implementation does nothing.

## Default Implementations

### UISceneAppIntent Implementations

- [performNavigation(forScene:)](performnavigation%28forscene_%29-7qecn.md)
