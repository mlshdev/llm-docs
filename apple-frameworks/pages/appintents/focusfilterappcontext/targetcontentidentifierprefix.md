> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/focusfilterappcontext/targetcontentidentifierprefix](https://developer.apple.com/documentation/appintents/focusfilterappcontext/targetcontentidentifierprefix)

# targetContentIdentifierPrefix

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

An identifier you provide to the system for use in scheme prefixes for Focus.

## Declaration

```swift
let targetContentIdentifierPrefix: String?
```

<a id="discussion"></a>

## Discussion

The system combines this prefix with the scheme `focus:` to prefix any `targetContentIdentifier` strings you provide for the system to evaluate against your app’s `sceneActivationConditions`.
