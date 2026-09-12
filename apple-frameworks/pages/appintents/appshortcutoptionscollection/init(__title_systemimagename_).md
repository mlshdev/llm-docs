> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appshortcutoptionscollection/init(_:title:systemimagename:)](https://developer.apple.com/documentation/appintents/appshortcutoptionscollection/init(_:title:systemimagename:))

# init(\_:title:systemImageName:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Initializes a collection of options for App Shortcuts with the specified parameters.

## Declaration

```swift
init(_ dynamicOptionsProvider: Provider, title: LocalizedStringResource, systemImageName: String? = nil)
```

## Parameters

- `dynamicOptionsProvider`: The object that provides the dynamic options for an App Shortcut.
- `title`: A localized string that represents the title for the collection of dynamic options in the Shortcuts app.
- `systemImageName`: The name of the system image for the collection of App Shortcuts.
