> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintenterror/permissionrequired/location(precise:)](https://developer.apple.com/documentation/appintents/appintenterror/permissionrequired/location(precise:))

# location(precise:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The person needs to allow the app to access their location.

## Declaration

```swift
static func location(precise: Bool = false) -> AppIntentError
```

<a id="discussion"></a>

## Discussion

The error message differs based on whether a person needs to give the app access to their precise or approximate location.
