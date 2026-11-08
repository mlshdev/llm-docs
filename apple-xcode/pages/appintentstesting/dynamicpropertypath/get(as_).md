> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-ee1c8cbf0f44; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath/get(as:)

# get(as:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.2+ · iPadOS 27.2+ · Mac Catalyst 27.2+ · macOS 27.2+ · tvOS 27.2+ · visionOS 27.2+ · watchOS 27.2+

Resolves the value at this path, fetching it from the app if any hop along the way is deferred.

## Declaration

```swift
func get<T>(as type: T.Type = T.self) async throws -> T where T : IntentValueConvertible
```

<a id="discussion"></a>

## Discussion

A single terminal `get()` resolves an entire chain of deferred properties — each deferred hop is fetched in turn — so you don’t need to `get()` every intermediate value yourself.
