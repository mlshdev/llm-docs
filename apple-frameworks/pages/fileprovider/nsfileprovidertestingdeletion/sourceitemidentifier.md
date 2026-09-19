> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingdeletion/sourceitemidentifier

# sourceItemIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The unique identifier for the source item.

## Declaration

```swift
var sourceItemIdentifier: NSFileProviderItemIdentifier { get }
```

## See Also

### Accessing the Operation’s Data

- [targetSide](targetside.md): The target location for the delete operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.
- [domainVersion](domainversion.md): The domain’s version when the source location deleted the item.

# sourceItemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The unique identifier for the source item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderItemIdentifier sourceItemIdentifier;
```

## See Also

### Accessing the Operation’s Data

- [targetSide](targetside.md): The target location for the delete operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.
- [domainVersion](domainversion.md): The domain’s version when the source location deleted the item.
