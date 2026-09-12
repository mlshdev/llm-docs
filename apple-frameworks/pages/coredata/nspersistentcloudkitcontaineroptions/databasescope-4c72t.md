> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontaineroptions/databasescope-4c72t](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions/databasescope-4c72t)

# databaseScope

**Framework:** CoreData  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.

## Declaration

```swift
var databaseScope: CKDatabase.Scope { get set }
```

## See Also

### Creating Container Options

- [init(containerIdentifier:)](init%28containeridentifier_%29.md): Initializes container options using the given CloudKit container identifier.
- [containerIdentifier](containeridentifier.md): The identifier of the CloudKit container associated with a given store description.
