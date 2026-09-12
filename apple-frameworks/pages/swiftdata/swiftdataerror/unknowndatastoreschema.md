> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/swiftdata/swiftdataerror/unknowndatastoreschema](https://developer.apple.com/documentation/swiftdata/swiftdataerror/unknowndatastoreschema)

# unknownDataStoreSchema

**Framework:** SwiftData  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Swift 5.9+

An error that indicates the data store’s schema is not recognized.

## Declaration

```swift
static let unknownDataStoreSchema: SwiftDataError
```

<a id="discussion"></a>

## Discussion

This error occurs when a `ModelContainer` attempts to load a data store whose schema does not match the current schema or any schema defined in the provided migration plan.

When you encounter this error, the data store likely contains data from a schema version that your app no longer supports. To resolve this:

- Add the missing schema version to your `SchemaMigrationPlan`
- Provide a custom migration stage to handle the unrecognized schema
- Consider whether the data store should be recreated

This error is only thrown on processes linked on or after macOS 27 / iOS 27. On earlier versions, `loadIssueModelContainer` is thrown instead.
