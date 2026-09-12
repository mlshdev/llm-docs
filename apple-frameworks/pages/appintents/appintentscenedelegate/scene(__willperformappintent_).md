> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintentscenedelegate/scene(_:willperformappintent:)](https://developer.apple.com/documentation/appintents/appintentscenedelegate/scene(_:willperformappintent:))

# scene(\_:willPerformAppIntent:)

**Framework:** AppIntents  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

Asks the scene delegate to prepare the scene for the specified app intent.

## Declaration

```swift
func scene(_ scene: UIScene, willPerformAppIntent appIntent: any UISceneAppIntent)
```

## Parameters

- `scene`: The scene that receives the app intent.
- `appIntent`: The app intent that the system is about to perform.

## Mentioned In

- [Directing app intents to your app’s scenes](../directing-app-intents-to-your-apps-scenes.md)

<a id="discussion"></a>

## Discussion

Implement this method in your scene delegate and use it to incorporate the specified app intent into the scene. For example, you might change the views of your scene to display an entity that the app intent contains. The system calls the app intent’s [perform()](../appintent/perform%28%29.md) method after this method returns.

If you don’t implement this method in your scene delegate, the system calls the [performNavigation(forScene:)](../uisceneappintent/performnavigation%28forscene_%29.md) method of the app intent to configure the scene instead.
