> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingmodification/changedfields](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingmodification/changedfields)

# changedFields (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

A list of the fields that changed.

## Declaration

```swift
var changedFields: NSFileProviderItemFields { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the source item.
- [targetSide](targetside.md): The target location for the modification operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.
- [domainVersion](domainversion.md): The domain’s version when the change occurred.

# changedFields (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

A list of the fields that changed.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderItemFields changedFields;
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the source item.
- [targetSide](targetside.md): The target location for the modification operation.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.
- [domainVersion](domainversion.md): The domain’s version when the change occurred.
