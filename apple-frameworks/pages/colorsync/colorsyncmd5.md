> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncmd5](https://developer.apple.com/documentation/colorsync/colorsyncmd5)

# ColorSyncMD5 (Swift)

**Framework:** ColorSync  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.

## Declaration

```swift
struct ColorSyncMD5
```

## Topics

### Initializers

- [init()](colorsyncmd5/init%28%29.md)
- [init(digest:)](colorsyncmd5/init%28digest_%29.md)

### Instance Properties

- [digest](colorsyncmd5/digest.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Computing profile digests

- [ColorSyncProfileGetMD5(\_:)](colorsyncprofilegetmd5%28__%29.md): Returns the MD5 digest for a profile.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)
- [kColorSyncProfileMD5Digest](kcolorsyncprofilemd5digest.md): A key for the profile’s MD5 digest.

# ColorSyncMD5 (Objective-C)

**Framework:** ColorSync  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.

## Declaration

```objectivec
typedef struct { ... } ColorSyncMD5;
```

## Topics

### Instance Properties

- [digest](colorsyncmd5/digest.md)

## See Also

### Computing profile digests

- [ColorSyncProfileGetMD5](colorsyncprofilegetmd5%28__%29.md): Returns the MD5 digest for a profile.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)
- [kColorSyncProfileMD5Digest](kcolorsyncprofilemd5digest.md): A key for the profile’s MD5 digest.
