> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath/get(as:)

# get(as:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Resolves the value at this path, fetching it from the app if it was deferred.

## Declaration

```swift
func get<T>(as type: T.Type = T.self) async throws -> T where T : IntentValueConvertible
```
