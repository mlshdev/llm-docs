> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appentitydefinition/resolved(from:)-2fld0](https://developer.apple.com/documentation/appintentstesting/appentitydefinition/resolved(from:)-2fld0)

# resolved(from:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Resolves an entity from an exported intent file through the entity type’s transferable conformance.

## Declaration

```swift
func resolved(from file: IntentFile) async throws -> AnyAppEntity
```

## Parameters

- `file`: The `<doc://com.apple.documentation/documentation/appintents/intentfile>` containing the exported entity data.

<a id="return-value"></a>

## Return Value

The resolved entity.

<a id="discussion"></a>

## Discussion

Use this to verify the import direction — that an [IntentFile](https://developer.apple.com/documentation/appintents/intentfile) produced by `AnyAppEntity/exported(as:)-swift.method` (or constructed from test data) can be resolved back into an entity through the same pipeline used at runtime.

> **Throws**

> If the entity type does not support the file’s content type.

```swift
let file = try await entity.exported(as: .json)
let resolved = try await coffeeOrderDef.resolved(from: file)
```
