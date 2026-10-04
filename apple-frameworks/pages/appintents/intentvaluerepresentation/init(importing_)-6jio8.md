> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/intentvaluerepresentation/init(importing:)-6jio8

# init(importing:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta · watchOS 27.2+ beta

Creates a value representation that imports an `IntentPerson` into an entity.

## Declaration

```swift
init(importing: @escaping @Sendable (IntentValue) async throws -> Item)
```

## Parameters

- `importing`: A closure that converts an IntentPerson to an entity.

<a id="discussion"></a>

## Discussion

Use this initializer when your entity can be created from an `IntentPerson`, but has no meaningful representation to export back out. The entity’s metadata declares `IntentPerson` as importable only, and the entity is never offered for export as a person.

<a id="Example"></a>

## Example

```swift
struct ContactEntity: AppEntity, Transferable {
    static var transferRepresentation: some TransferRepresentation {
        ValueRepresentation(
            importing: { person in
                guard case let .applicationDefined(id) = person.identifier?.value else {
                    throw ImportError.missingIdentifier
                }
                return ContactEntity(
                    id: id,
                    name: person.name.displayString,
                    email: person.handle?.value ?? ""
                )
            }
        )
    }
}
```
