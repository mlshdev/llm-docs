> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/cameracaptureintent/updateappcontext(_:)](https://developer.apple.com/documentation/appintents/cameracaptureintent/updateappcontext(_:))

# updateAppContext(\_:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

Whenever the in-app context for this intent changes any process containing this intent can call this method to provide updated state to the system.

## Declaration

```swift
static func updateAppContext(_ newContext: Self.AppContext?) async throws
```

<a id="discussion"></a>

## Discussion

Note: The size of data `newContext` uses when encoded with JSONEncoder can not exceed 4kB
