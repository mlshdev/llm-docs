> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingdeletion/targetitemidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingdeletion/targetitemidentifier)

# targetItemIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The unique identifier for the target item.

## Declaration

```swift
var targetItemIdentifier: NSFileProviderItemIdentifier { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItemIdentifier](sourceitemidentifier.md): The unique identifier for the source item.
- [targetSide](targetside.md): The target location for the delete operation.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.
- [domainVersion](domainversion.md): The domain’s version when the source location deleted the item.

# targetItemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The unique identifier for the target item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderItemIdentifier targetItemIdentifier;
```

## See Also

### Accessing the Operation’s Data

- [sourceItemIdentifier](sourceitemidentifier.md): The unique identifier for the source item.
- [targetSide](targetside.md): The target location for the delete operation.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.
- [domainVersion](domainversion.md): The domain’s version when the source location deleted the item.
