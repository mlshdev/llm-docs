> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingdeletion/domainversion](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingdeletion/domainversion)

# domainVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain’s version when the source location deleted the item.

## Declaration

```swift
var domainVersion: NSFileProviderDomainVersion? { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItemIdentifier](sourceitemidentifier.md): The unique identifier for the source item.
- [targetSide](targetside.md): The target location for the delete operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.

# domainVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain’s version when the source location deleted the item.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSFileProviderDomainVersion * domainVersion;
```

## See Also

### Accessing the Operation’s Data

- [sourceItemIdentifier](sourceitemidentifier.md): The unique identifier for the source item.
- [targetSide](targetside.md): The target location for the delete operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.
