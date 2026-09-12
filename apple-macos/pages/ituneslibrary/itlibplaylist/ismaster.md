> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/ismaster](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/ismaster)

# isMaster (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+ (deprecated in 27.0)

A Boolean value that indicates whether the playlist represents the entire iTunes library.

> Use [isPrimary](isprimary.md) instead.

## Declaration

```swift
var isMaster: Bool { get }
```

## See Also

### Deprecated

- [isAllItemsPlaylist](isallitemsplaylist.md): Deprecated. Indicates whether the API exposes every item in the playlist.
- [ITLibPlaylistPropertyMaster](../itlibplaylistpropertymaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.

# master (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.6+ (deprecated in 27.0)

A Boolean value that indicates whether the playlist represents the entire iTunes library.

> Use [primary](isprimary.md) instead.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isMaster) BOOL master;
```

## See Also

### Deprecated

- [allItemsPlaylist](isallitemsplaylist.md): Deprecated. Indicates whether the API exposes every item in the playlist.
- [ITLibPlaylistPropertyMaster](../itlibplaylistpropertymaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.
