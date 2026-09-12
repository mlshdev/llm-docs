> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/attributes](https://developer.apple.com/documentation/medialibrary/mlmediagroup/attributes)

# attributes (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A dictionary of attributes describing the media group.

## Declaration

```swift
var attributes: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

These attributes are usually defined by the source app, such as iTunes. For example, an iTunes playlist is represented as a group. iTunes attaches attributes such as “Playlist Persistent ID” to the group in its `attributes`. The attribute names vary based on the media source. Attributes common to all sources are called out as separate properties.

## See Also

### Accessing Group Attributes

- [name](name.md): Deprecated. The name of the media group.
- [iconImage](iconimage.md): Deprecated. The media group’s icon.
- [url](url.md): Deprecated. The location of the media group.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media group was last altered.

# attributes (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A dictionary of attributes describing the media group.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * attributes;
```

<a id="Discussion"></a>

## Discussion

These attributes are usually defined by the source app, such as iTunes. For example, an iTunes playlist is represented as a group. iTunes attaches attributes such as “Playlist Persistent ID” to the group in its `attributes`. The attribute names vary based on the media source. Attributes common to all sources are called out as separate properties.

## See Also

### Accessing Group Attributes

- [name](name.md): Deprecated. The name of the media group.
- [iconImage](iconimage.md): Deprecated. The media group’s icon.
- [URL](url.md): Deprecated. The location of the media group.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media group was last altered.
