> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingmodification/targetside

# targetSide (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The target location for the modification operation.

## Declaration

```swift
var targetSide: NSFileProviderTestingOperationSide { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the source item.
- [changedFields](changedfields.md): A list of the fields that changed.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.
- [domainVersion](domainversion.md): The domain’s version when the change occurred.

# targetSide (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The target location for the modification operation.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderTestingOperationSide targetSide;
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the source item.
- [changedFields](changedfields.md): A list of the fields that changed.
- [targetItemIdentifier](targetitemidentifier.md): The unique identifier for the target item.
- [targetItemBaseVersion](targetitembaseversion.md): The version of the changed item.
- [domainVersion](domainversion.md): The domain’s version when the change occurred.
