> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/title](https://developer.apple.com/documentation/appintents/appintent/title)

# title

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A short, localized, human-readable string that conveys the app intent’s action.

## Declaration

```swift
static var title: LocalizedStringResource { get }
```

## Mentioned In

- [Responding to the Action button on Apple Watch Ultra](../actionbuttonarticle.md)
- [Creating your first app intent](../creating-your-first-app-intent.md)

<a id="discussion"></a>

## Discussion

Specify title strings using a verb followed by a noun in title case. For example, an action to open an album might have the title “Open Album”. If the app intent conforms to a schema, the schema provides this value.

## Default Implementations

### AppIntent Implementations

- [title](title-4a26m.md): A short, localized, human-readable string that conveys the app intent’s action.

## See Also

### Configuring the metadata

- [description](description.md): A localized string that describes what the app intent does.
- [isDiscoverable](isdiscoverable.md): A Boolean value that indicates whether system features can discover this app intent.
