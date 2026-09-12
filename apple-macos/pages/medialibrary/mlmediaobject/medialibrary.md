> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediaobject/medialibrary](https://developer.apple.com/documentation/medialibrary/mlmediaobject/medialibrary)

# mediaLibrary (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A pointer to the media library instance that loaded the media object’s source.

## Declaration

```swift
unowned(unsafe) var mediaLibrary: MLMediaLibrary? { get }
```

## See Also

### Identifying the Object

- [identifier](identifier.md): Deprecated. An identifier for the media object.
- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media object.

# mediaLibrary (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A pointer to the media library instance that loaded the media object’s source.

## Declaration

```objectivec
@property (assign, readonly, nullable) MLMediaLibrary * mediaLibrary;
```

## See Also

### Identifying the Object

- [identifier](identifier.md): Deprecated. An identifier for the media object.
- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. An identifier for the source that loaded the media object.
