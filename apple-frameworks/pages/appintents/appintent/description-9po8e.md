> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintent/description-9po8e](https://developer.apple.com/documentation/appintents/appintent/description-9po8e)

# description

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A localized string that describes what the app intent does.

## Declaration

```swift
static var description: IntentDescription? { get }
```

<a id="discussion"></a>

## Discussion

If the app intent conforms to a schema, the schema provides a default implementation and value. If you implement this property, the system uses your custom value instead of the default value.
