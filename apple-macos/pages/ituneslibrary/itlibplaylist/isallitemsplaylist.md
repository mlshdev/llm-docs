> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/ituneslibrary/itlibplaylist/isallitemsplaylist](https://developer.apple.com/documentation/ituneslibrary/itlibplaylist/isallitemsplaylist)

# isAllItemsPlaylist (Swift)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Indicates whether the API exposes every item in the playlist.

> not useful

## Declaration

```swift
var isAllItemsPlaylist: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property always returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Deprecated

- [isMaster](ismaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.
- [ITLibPlaylistPropertyMaster](../itlibplaylistpropertymaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.

# allItemsPlaylist (Objective-C)

**Framework:** iTunes Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.13+

Indicates whether the API exposes every item in the playlist.

> not useful

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isAllItemsPlaylist) BOOL allItemsPlaylist;
```

<a id="Discussion"></a>

## Discussion

This property always returns [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Deprecated

- [master](ismaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.
- [ITLibPlaylistPropertyMaster](../itlibplaylistpropertymaster.md): Deprecated. A Boolean value that indicates whether the playlist represents the entire iTunes library.
