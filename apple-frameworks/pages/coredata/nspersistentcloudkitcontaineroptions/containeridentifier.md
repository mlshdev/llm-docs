> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspersistentcloudkitcontaineroptions/containeridentifier](https://developer.apple.com/documentation/coredata/nspersistentcloudkitcontaineroptions/containeridentifier)

# containerIdentifier (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The identifier of the CloudKit container associated with a given store description.

## Declaration

```swift
var containerIdentifier: String { get }
```

## See Also

### Creating Container Options

- [init(containerIdentifier:)](init%28containeridentifier_%29.md): Initializes container options using the given CloudKit container identifier.
- [databaseScope](databasescope-4c72t.md): The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.

# containerIdentifier (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The identifier of the CloudKit container associated with a given store description.

## Declaration

```objectivec
@property (copy, readonly) NSString * containerIdentifier;
```

## See Also

### Creating Container Options

- [initWithContainerIdentifier:](init%28containeridentifier_%29.md): Initializes container options using the given CloudKit container identifier.
- [databaseScope](databasescope-2784h.md): The database scope — public, private, or shared — to use for a specified store in a persistent CloudKit container.
