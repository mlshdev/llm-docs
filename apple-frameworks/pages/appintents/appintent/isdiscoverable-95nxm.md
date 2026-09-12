> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/isdiscoverable-95nxm](https://developer.apple.com/documentation/appintents/appintent/isdiscoverable-95nxm)

# isDiscoverable

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A Boolean value that indicates whether system features can discover this app intent.

## Declaration

```swift
static var isDiscoverable: Bool { get }
```

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, system features like Siri, Spotlight, and the Shortcuts app can discover and use the app intent. When the value of the property is `false`, you can run the intent from your app’s interface or from a widget, but system features can’t access it. The default value of this property is `true`.

> **Note**

> App Shortcuts require this property to be `true` for the app intents they use.
