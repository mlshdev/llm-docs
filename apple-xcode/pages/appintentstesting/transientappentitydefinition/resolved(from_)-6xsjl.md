> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/transientappentitydefinition/resolved(from:)-6xsjl](https://developer.apple.com/documentation/appintentstesting/transientappentitydefinition/resolved(from:)-6xsjl)

# resolved(from:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Resolves a transient entity from an exported `IntentFile` through the entity type’s `Transferable` conformance.

## Declaration

```swift
func resolved(from file: IntentFile) async throws -> AnyTransientAppEntity
```

## Parameters

- `file`: The `IntentFile` containing the exported entity data.

<a id="return-value"></a>

## Return Value

The resolved transient entity.

<a id="discussion"></a>

## Discussion

Use this to verify the import direction — that an `IntentFile` produced by `AnyTransientAppEntity/exported(as:)-swift.method` (or constructed from test data) can be resolved back into a transient entity through the same pipeline used at runtime.

> **Throws**

> If the entity type does not support the file’s content type.

```swift
let file = try await transientEntity.exported(as: .json)
let resolved = try await sessionEntityDef.resolved(from: file)
```
