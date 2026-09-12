> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentparameterdependency/init(_:)](https://developer.apple.com/documentation/appintents/intentparameterdependency/init(_:))

# init(\_:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

## Declaration

```swift
convenience init<V0, P0>(_ k0: KeyPath<Intent, P0>) where V0 : _IntentValue, V0 : Sendable, P0 : IntentParameter<V0>
```
