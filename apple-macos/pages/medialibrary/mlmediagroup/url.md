> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/url](https://developer.apple.com/documentation/medialibrary/mlmediagroup/url)

# url (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The location of the media group.

## Declaration

```swift
var url: URL? { get }
```

<a id="Discussion"></a>

## Discussion

Some groups do not have a URL, in which case this returns `nil`. For example, a group that represents a filesystem folder on disk has a URL, but a group that represents a named face in iPhoto does not.

## See Also

### Accessing Group Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media group.
- [name](name.md): Deprecated. The name of the media group.
- [iconImage](iconimage.md): Deprecated. The media group’s icon.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media group was last altered.

# URL (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The location of the media group.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSURL * URL;
```

<a id="Discussion"></a>

## Discussion

Some groups do not have a URL, in which case this returns `nil`. For example, a group that represents a filesystem folder on disk has a URL, but a group that represents a named face in iPhoto does not.

## See Also

### Accessing Group Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media group.
- [name](name.md): Deprecated. The name of the media group.
- [iconImage](iconimage.md): Deprecated. The media group’s icon.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media group was last altered.
