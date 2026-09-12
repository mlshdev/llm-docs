> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/description](https://developer.apple.com/documentation/appintents/appintent/description)

# description

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A localized string that describes what the app intent does.

## Declaration

```swift
static var description: IntentDescription? { get }
```

## Mentioned In

- [Creating your first app intent](../creating-your-first-app-intent.md)

<a id="discussion"></a>

## Discussion

If the app intent conforms to a schema, the schema provides a default implementation and value. If you implement this property, the system uses your custom value instead of the default value.

## Default Implementations

### AppIntent Implementations

- [description](description-9po8e.md): A localized string that describes what the app intent does.

## See Also

### Configuring the metadata

- [title](title.md): A short, localized, human-readable string that conveys the app intent’s action.
- [isDiscoverable](isdiscoverable.md): A Boolean value that indicates whether system features can discover this app intent.
