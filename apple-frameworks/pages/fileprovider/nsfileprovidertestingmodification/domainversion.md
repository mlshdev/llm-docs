> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingmodification/domainversion](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingmodification/domainversion)

# domainVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain’s version when the change occurred.

## Declaration

```swift
var domainVersion: NSFileProviderDomainVersion? { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the source item.
- [changedFields](changedfields.md): A list of the fields that changed.
- [targetSide](targetside.md): The target location for the modification operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.

# domainVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain’s version when the change occurred.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSFileProviderDomainVersion * domainVersion;
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the source item.
- [changedFields](changedfields.md): A list of the fields that changed.
- [targetSide](targetside.md): The target location for the modification operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.
