> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityproperty/init(identifier:asyncgetter:)-5fs2j](https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:asyncgetter:)-5fs2j)

# init(identifier:asyncGetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
convenience init<Entity>(identifier: String, asyncGetter: @escaping @Sendable (Entity) async throws -> Value) where Entity : AppEntity
```
