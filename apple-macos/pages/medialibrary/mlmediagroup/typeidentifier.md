> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/typeidentifier](https://developer.apple.com/documentation/medialibrary/mlmediagroup/typeidentifier)

# typeIdentifier (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

An identifier for the media group’s type.

## Declaration

```swift
var typeIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Multiple groups within a media source can have the same type identifier. For descriptions of group type identifiers, see [MediaLibrary Constants](../medialibrary-constants.md).

## See Also

### Identifying the Group

- [identifier](identifier.md): Deprecated. An identifier for the media group.
- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media group.
- [mediaLibrary](medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media group’s source.

# typeIdentifier (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

An identifier for the media group’s type.

## Declaration

```objectivec
@property (copy, readonly) NSString * typeIdentifier;
```

<a id="Discussion"></a>

## Discussion

Multiple groups within a media source can have the same type identifier. For descriptions of group type identifiers, see [MediaLibrary Constants](../medialibrary-constants.md).

## See Also

### Identifying the Group

- [identifier](identifier.md): Deprecated. An identifier for the media group.
- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media group.
- [mediaLibrary](medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media group’s source.
