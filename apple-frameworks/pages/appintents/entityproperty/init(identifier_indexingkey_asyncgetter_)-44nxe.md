> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entityproperty/init(identifier:indexingkey:asyncgetter:)-44nxe

# init(identifier:indexingKey:asyncGetter:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
convenience init<Entity>(identifier: String, indexingKey: PartialKeyPath<CSSearchableItemAttributeSet>, asyncGetter: @escaping @Sendable (Entity) async throws -> Value) where Entity : AppEntity
```
