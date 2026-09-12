> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/identifier](https://developer.apple.com/documentation/medialibrary/mlmediagroup/identifier)

# identifier (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

An identifier for the media group.

## Declaration

```swift
var identifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Each group’s identifier is unique within a media source.

## See Also

### Identifying the Group

- [typeIdentifier](typeidentifier.md): Deprecated. An identifier for the media group’s type.
- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media group.
- [mediaLibrary](medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media group’s source.

# identifier (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

An identifier for the media group.

## Declaration

```objectivec
@property (copy, readonly) NSString * identifier;
```

<a id="Discussion"></a>

## Discussion

Each group’s identifier is unique within a media source.

## See Also

### Identifying the Group

- [typeIdentifier](typeidentifier.md): Deprecated. An identifier for the media group’s type.
- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media group.
- [mediaLibrary](medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media group’s source.
