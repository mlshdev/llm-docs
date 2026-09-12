> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentityidentifier/init(id:)](https://developer.apple.com/documentation/appintents/syncableentityidentifier/init(id:))

# init(id:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an identifier where the local and stable IDs are identical.

## Declaration

```swift
init(id: LocalID)
```

<a id="discussion"></a>

## Discussion

Use this for entities whose identifiers are already stable across devices, such as server-assigned UUIDs or globally unique identifiers.

<a id="Example"></a>

## Example

```swift
struct Article: AppEntity, SyncableEntity {
    var id: SyncableEntityIdentifier<UUID, UUID>

    init(id: UUID, title: String) {
        self.id = SyncableEntityIdentifier(id: id)
        self.title = title
    }
}
```
