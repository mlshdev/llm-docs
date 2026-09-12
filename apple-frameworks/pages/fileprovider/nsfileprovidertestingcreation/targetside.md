> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingcreation/targetside](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingcreation/targetside)

# targetSide (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The target location for the new item.

## Declaration

```swift
var targetSide: NSFileProviderTestingOperationSide { get }
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the item stored at the source.
- [domainVersion](domainversion.md): The domain’s version when the system discovered the item at the source location.

# targetSide (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The target location for the new item.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderTestingOperationSide targetSide;
```

## See Also

### Accessing the Operation’s Data

- [sourceItem](sourceitem.md): A description of the item stored at the source.
- [domainVersion](domainversion.md): The domain’s version when the system discovered the item at the source location.
