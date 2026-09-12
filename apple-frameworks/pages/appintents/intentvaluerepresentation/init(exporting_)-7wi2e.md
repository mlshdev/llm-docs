> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvaluerepresentation/init(exporting:)-7wi2e](https://developer.apple.com/documentation/appintents/intentvaluerepresentation/init(exporting:)-7wi2e)

# init(exporting:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Creates a value representation that exports an entity to an `IntentPerson`.

## Declaration

```swift
init(exporting: @escaping @Sendable (Item) async throws -> IntentValue)
```

## Parameters

- `exporting`: A closure that converts an entity to an IntentPerson. This closure is called when the system needs to transfer your entity across process boundaries or export it for use by other apps or system features.

<a id="discussion"></a>

## Discussion

Use this initializer when you only need to export your entity to an IntentPerson, without supporting import back into your entity type.

<a id="Example"></a>

## Example

```swift
struct ContactEntity: AppEntity, Transferable {
    static var transferRepresentation: some TransferRepresentation {
        IntentValueRepresentation(
            exporting: { entity in
                IntentPerson(
                    identifier: .applicationDefined(entity.id),
                    name: .displayName(entity.name),
                    handle: .init(emailAddress: entity.email)
                )
            }
        )
    }
}
```
