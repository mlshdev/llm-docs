> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wknotificationscene/init(controller:category:)](https://developer.apple.com/documentation/swiftui/wknotificationscene/init(controller:category:))

# init(controller:category:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 7.0+

Creates a scene that appears in response to receiving a specific category of remote or local notifications.

## Declaration

```swift
nonisolated init(controller: Controller.Type = Controller.self, category: String)
```

## Parameters

- `controller`: The type of [WKUserNotificationHostingController](../wkusernotificationhostingcontroller.md) to display upon receipt of the specified notification category.
- `category`: The category of notifications to listen for.

<a id="discussion"></a>

## Discussion

Use a watch notification instance to add support for one or more Apple Watch notification scenes that appear on receipt of the local or remote notification categories you specify. The example below, adds two notification scenes to the app declaration:

```swift
@main
struct PopQuizApp : App {
    var body: some Scene {
        MainScene {
            RootView()
        }

        WKNotificationScene(
            controller: QuizTimeController.self,
            category: "com.example.quiztime"
        )

        WKNotificationScene(
            controller: QuizResultsController.self,
            category: "com.example.results"
        )
    }
}
```

Each [WKNotificationScene](../wknotificationscene.md) declaration references a [WKUserNotificationHostingController](../wkusernotificationhostingcontroller.md) and a category string that you provide. The hosting controller displays your notification’s content view upon receipt of a local or a [PushKit](https://developer.apple.com/documentation/pushkit) notification. The category string you specify corresponds to the category name in the notification’s dictionary and describes a specific notification that contains the content displayed by the notification view.
