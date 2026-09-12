> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontaineroptions/databasescope-2784h](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions/databasescope-2784h)

# databaseScope

**Interface language:** Objective-C

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.

## Declaration

```objectivec
@property (nonatomic) CKDatabaseScope databaseScope;
```

## See Also

### Creating Container Options

- [initWithContainerIdentifier:](init%28containeridentifier_%29.md): Initializes container options using the given CloudKit container identifier.
- [containerIdentifier](containeridentifier.md): The identifier of the CloudKit container associated with a given store description.
