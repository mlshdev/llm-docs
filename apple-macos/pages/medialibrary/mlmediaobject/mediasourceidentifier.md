> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediaobject/mediasourceidentifier](https://developer.apple.com/documentation/medialibrary/mlmediaobject/mediasourceidentifier)

# mediaSourceIdentifier (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

An identifier for the source that loaded the media object.

## Declaration

```swift
var mediaSourceIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

For a list of possible media source identifiers, see [MLMediaLibrary](../mlmedialibrary.md).

## See Also

### Identifying the Object

- [identifier](identifier.md): Deprecated. An identifier for the media object.
- [mediaLibrary](medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media object’s source.

# mediaSourceIdentifier (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

An identifier for the source that loaded the media object.

## Declaration

```objectivec
@property (copy, readonly) NSString * mediaSourceIdentifier;
```

<a id="Discussion"></a>

## Discussion

For a list of possible media source identifiers, see [MLMediaLibrary](../mlmedialibrary.md).

## See Also

### Identifying the Object

- [identifier](identifier.md): Deprecated. An identifier for the media object.
- [mediaLibrary](medialibrary.md): Deprecated. A pointer to the media library instance that loaded the media object’s source.
