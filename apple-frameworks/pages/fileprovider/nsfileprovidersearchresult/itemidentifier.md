> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidersearchresult/itemidentifier](https://developer.apple.com/documentation/fileprovider/nsfileprovidersearchresult/itemidentifier)

# itemIdentifier (Swift)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The identifier for this search result.

## Declaration

```swift
var itemIdentifier: NSFileProviderItemIdentifier { get }
```

<a id="discussion"></a>

## Discussion

Choose an identifier that’s usable with API calls from the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Identifying the item

- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [filename](filename.md): The result’s file name.

# itemIdentifier (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Property  
**Availability:** macOS 26.0+

The identifier for this search result.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSFileProviderItemIdentifier itemIdentifier;
```

<a id="discussion"></a>

## Discussion

Choose an identifier that’s usable with API calls from the [NSFileProviderReplicatedExtension](../nsfileproviderreplicatedextension.md) protocol.

## See Also

### Identifying the item

- [NSFileProviderItemIdentifier](../nsfileprovideritemidentifier.md): A unique identifier for an item managed by the File Provider extension.
- [filename](filename.md): The result’s file name.
