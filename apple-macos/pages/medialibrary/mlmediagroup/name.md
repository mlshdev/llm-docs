> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/name](https://developer.apple.com/documentation/medialibrary/mlmediagroup/name)

# name (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The name of the media group.

## Declaration

```swift
var name: String? { get }
```

<a id="Discussion"></a>

## Discussion

This string is human-readable. It is either user created (such as the name of an iTunes playlist) or already localized.

## See Also

### Accessing Group Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media group.
- [iconImage](iconimage.md): Deprecated. The media group’s icon.
- [url](url.md): Deprecated. The location of the media group.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media group was last altered.

# name (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The name of the media group.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

This string is human-readable. It is either user created (such as the name of an iTunes playlist) or already localized.

## See Also

### Accessing Group Attributes

- [attributes](attributes.md): Deprecated. A dictionary of attributes describing the media group.
- [iconImage](iconimage.md): Deprecated. The media group’s icon.
- [URL](url.md): Deprecated. The location of the media group.
- [modificationDate](modificationdate.md): Deprecated. The date and time when the media group was last altered.
