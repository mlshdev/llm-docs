> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-5fs2j

# init(identifier:asyncGetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
convenience init<Entity>(identifier: String, asyncGetter: @escaping @Sendable (Entity) async throws -> Value) where Entity : AppEntity
```
