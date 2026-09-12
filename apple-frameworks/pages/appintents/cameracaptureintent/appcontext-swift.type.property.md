> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/cameracaptureintent/appcontext-swift.type.property](https://developer.apple.com/documentation/appintents/cameracaptureintent/appcontext-swift.type.property)

# appContext

**Framework:** App Intents  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

An app context that an app can use to pass necessary information to the sandboxed capture extension. The system will retrieve this app context when necessary and inject it for use during

## Declaration

```swift
static var appContext: Self.AppContext? { get async throws }
```
