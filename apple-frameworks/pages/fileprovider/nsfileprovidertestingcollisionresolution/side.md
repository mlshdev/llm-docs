> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidertestingcollisionresolution/side](https://developer.apple.com/documentation/fileprovider/nsfileprovidertestingcollisionresolution/side)

# side (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 11.3+ · visionOS 1.0+

The item’s location.

## Declaration

```swift
var side: NSFileProviderTestingOperationSide { get }
```

<a id="Discussion"></a>

## Discussion

Most operations are symmetrical. They can affect either items stored locally, or items in the File Provider extension’s remote storage.

## See Also

### Accessing the Operation’s Data

- [renamedItem](renameditem.md): A description of the renamed item.

# side (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · macOS 11.3+ · visionOS 1.0+

The item’s location.

## Declaration

```objectivec
@property (nonatomic, readonly) NSFileProviderTestingOperationSide side;
```

<a id="Discussion"></a>

## Discussion

Most operations are symmetrical. They can affect either items stored locally, or items in the File Provider extension’s remote storage.

## See Also

### Accessing the Operation’s Data

- [renamedItem](renameditem.md): A description of the renamed item.
