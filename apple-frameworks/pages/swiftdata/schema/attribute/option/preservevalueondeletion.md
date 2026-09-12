> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/schema/attribute/option/preservevalueondeletion](https://developer.apple.com/documentation/swiftdata/schema/attribute/option/preservevalueondeletion)

# preserveValueOnDeletion

**Framework:** SwiftData  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+ · Swift 5.9+

Preserves the property’s value in the persistent history when the context deletes the owning model.

## Declaration

```swift
static var preserveValueOnDeletion: Schema.Attribute.Option { get }
```

## Mentioned In

- [Fetching and filtering time-based model changes](../../../fetching-and-filtering-time-based-model-changes.md)

## See Also

### Accessing property options

- [allowsCloudEncryption](allowscloudencryption.md): Stores the property’s value in an encrypted form.
- [externalStorage](externalstorage.md): Stores the property’s value as binary data adjacent to the model storage.
- [spotlight](spotlight.md): Indexes the property’s value so it can appear in Spotlight search results.
- [unique](unique.md): Ensures the property’s value is unique across all models of the same type.
- [transformable(by:)](transformable%28by_%29-9d4xh.md): Transforms the property’s value between an in-memory form and a persisted form.
- [transformable(by:)](transformable%28by_%29-lunz.md)
- [ephemeral](ephemeral.md): Track changes to this property but do not persist
- [codable](codable.md): Uses the property’s codable representation to store the property.
