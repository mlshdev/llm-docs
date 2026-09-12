> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingcreation/domainversion](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingcreation/domainversion)

# domainVersion (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain’s version when the system discovered the item at the source location.

## Declaration

```swift
var domainVersion: NSFileProviderDomainVersion? { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the item stored at the source.
- [targetSide](targetside.md): The target location for the new item.

# domainVersion (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The domain’s version when the system discovered the item at the source location.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSFileProviderDomainVersion * domainVersion;
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the item stored at the source.
- [targetSide](targetside.md): The target location for the new item.
