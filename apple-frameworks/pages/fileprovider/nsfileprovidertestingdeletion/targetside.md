> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingdeletion/targetside](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingdeletion/targetside)

# targetSide (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The target location for the delete operation.

## Declaration

```swift
var targetSide: NSFileProviderTestingOperationSide { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItemIdentifier](sourceitemidentifier.md): The unique identifier for the source item.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.
- [domainVersion](domainversion.md): The domain’s version when the source location deleted the item.

# targetSide (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The target location for the delete operation.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderTestingOperationSide targetSide;
```

## See Also

### Accessing the Operation’s Data

- [sourceItemIdentifier](sourceitemidentifier.md): The unique identifier for the source item.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the deleted item.
- [domainVersion](domainversion.md): The domain’s version when the source location deleted the item.
