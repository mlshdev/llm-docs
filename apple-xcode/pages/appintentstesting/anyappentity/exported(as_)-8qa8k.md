> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/anyappentity/exported(as:)-8qa8k](https://developer.apple.com/documentation/appintentstesting/anyappentity/exported(as:)-8qa8k)

# exported(as:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Exports this entity’s content as an `IntentFile`.

## Declaration

```swift
func exported(as contentType: UTType? = nil) async throws -> IntentFile
```

## Parameters

- `contentType`: The desired export format (e.g., `.json`, `.png`). Pass `nil` to use the entity’s default representation.

<a id="return-value"></a>

## Return Value

The exported content as an `IntentFile`.

<a id="discussion"></a>

## Discussion

When no content type is specified, the entity’s first registered `TransferRepresentation` is used.

The returned file contains the exported data and, when available, a sandbox-extended file URL that can be passed directly as a parameter to another intent.

> **Throws**

> If the entity does not conform to `Transferable` or does not support the requested format.
