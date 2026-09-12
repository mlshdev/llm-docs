> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/uisceneappintent/uiscene](https://developer.apple.com/documentation/appintents/uisceneappintent/uiscene)

# uiScene

**Framework:** AppIntents  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The scene that is handling the app intent.

## Declaration

```swift
var uiScene: UIScene? { get }
```

## Mentioned In

- [Directing app intents to your app’s scenes](../directing-app-intents-to-your-apps-scenes.md)

<a id="discussion"></a>

## Discussion

When the system selects a scene for your app intent, it assigns the scene to this property so your app intent can access it. Check the value of this property only in your app intent’s [perform()](../appintent/perform%28%29.md) method. If the system didn’t associate the app intent with a scene, the value of this property is `nil`.
