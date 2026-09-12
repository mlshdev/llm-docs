> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingmodification/targetitemidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingmodification/targetitemidentifier)

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

- [sourceItem](sourceitem.md): A description of the source item.
- [changedFields](changedfields.md): A list of the fields that changed.
- [targetSide](targetside.md): The target location for the modification operation.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.
- [domainVersion](domainversion.md): The domain’s version when the change occurred.

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

- [sourceItem](sourceitem.md): A description of the source item.
- [changedFields](changedfields.md): A list of the fields that changed.
- [targetSide](targetside.md): The target location for the modification operation.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.
- [domainVersion](domainversion.md): The domain’s version when the change occurred.
