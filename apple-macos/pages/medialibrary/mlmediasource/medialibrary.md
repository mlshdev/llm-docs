> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediasource/medialibrary](https://developer.apple.com/documentation/medialibrary/mlmediasource/medialibrary)

# mediaLibrary (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A pointer to the media library instance that loaded this media source.

## Declaration

```swift
unowned(unsafe) var mediaLibrary: MLMediaLibrary? { get }
```

## See Also

### Identifying the Source

- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. A unique identifier for the media source.

# mediaLibrary (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A pointer to the media library instance that loaded this media source.

## Declaration

```objectivec
@property (assign, readonly, nullable) MLMediaLibrary * mediaLibrary;
```

## See Also

### Identifying the Source

- [mediaSourceIdentifier](mediasourceidentifier.md): Deprecated. A unique identifier for the media source.
