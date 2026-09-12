> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-1bnq3](https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:title:asyncgetter:)-1bnq3)

# init(identifier:title:asyncGetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
convenience init<Entity>(identifier: String, title: LocalizedStringResource, asyncGetter: @escaping @Sendable (Entity) async throws -> Value) where Entity : AppEntity
```
