> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/resolved(from:)-7c04a](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/resolved(from:)-7c04a)

# resolved(from:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Resolves an entity from a transferable intent value type through the entity type’s transferable conformance.

## Declaration

```swift
func resolved<T>(from value: T) async throws -> AnyAppEntity where T : IntentValueConvertible, T : Transferable
```

## Parameters

- `value`: The transferable intent value (e.g., an `IntentPerson` instance).

<a id="return-value"></a>

## Return Value

The resolved entity.

<a id="discussion"></a>

## Discussion

The value is serialized through its `TransferRepresentation` and resolved into the entity type through the same pipeline used at runtime.

> **Throws**

> If the entity type does not support the given value type.

```swift
let person = try await entity.exported(as: IntentPerson.self)
let resolved = try await personEntityDef.resolved(from: person)
```
