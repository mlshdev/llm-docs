> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftdata/persistentidentifier/entityname

# entityName

**Framework:** SwiftData  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The entity name for the associated model.

## Declaration

```swift
var entityName: String { get }
```

## See Also

### Accessing identity information

- [id](id-swift.property.md): The value that uniquely identifies the associated model within the containing store.
- [PersistentIdentifier.ID](id-swift.struct.md): A type that represents the stable identity of a SwiftData model.
- [storeIdentifier](storeidentifier.md): The identifier of the store that contains the associated model.
