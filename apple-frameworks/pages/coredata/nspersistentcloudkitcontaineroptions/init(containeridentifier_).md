> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontaineroptions/init(containeridentifier:)](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions/init(containeridentifier:))

# init(containerIdentifier:) (Swift)

**Framework:** Core Data  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes container options using the given CloudKit container identifier.

## Declaration

```swift
init(containerIdentifier: String)
```

## See Also

### Creating Container Options

- [containerIdentifier](containeridentifier.md): The identifier of the CloudKit container associated with a given store description.
- [databaseScope](databasescope-4c72t.md): The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.

# initWithContainerIdentifier: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Initializes container options using the given CloudKit container identifier.

## Declaration

```objectivec
- (instancetype) initWithContainerIdentifier:(NSString *) containerIdentifier;
```

## See Also

### Creating Container Options

- [containerIdentifier](containeridentifier.md): The identifier of the CloudKit container associated with a given store description.
- [databaseScope](databasescope-2784h.md): The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.
