> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/isdiscoverable](https://developer.apple.com/documentation/appintents/appintent/isdiscoverable)

# isDiscoverable

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A Boolean value that indicates whether system features can discover this app intent.

## Declaration

```swift
static var isDiscoverable: Bool { get }
```

## Mentioned In

- [Creating your first app intent](../creating-your-first-app-intent.md)

<a id="discussion"></a>

## Discussion

When the value of this property is `true`, system features like Siri, Spotlight, and the Shortcuts app can discover and use the app intent. When the value of the property is `false`, you can run the intent from your app’s interface or from a widget, but system features can’t access it. The default value of this property is `true`.

> **Note**

> App Shortcuts require this property to be `true` for the app intents they use.

## Default Implementations

### AppIntent Implementations

- [isDiscoverable](isdiscoverable-95nxm.md): A Boolean value that indicates whether system features can discover this app intent.

## See Also

### Configuring the metadata

- [title](title.md): A short, localized, human-readable string that conveys the app intent’s action.
- [description](description.md): A localized string that describes what the app intent does.
