> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/kcolorsyncprofilemd5digest](https://developer.apple.com/documentation/colorsync/kcolorsyncprofilemd5digest)

# kColorSyncProfileMD5Digest (Swift)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the profile’s MD5 digest.

## Declaration

```swift
var kColorSyncProfileMD5Digest: Unmanaged<CFString>!
```

## See Also

### Computing profile digests

- [ColorSyncProfileGetMD5(\_:)](colorsyncprofilegetmd5%28__%29.md): Returns the MD5 digest for a profile.
- [ColorSyncMD5](colorsyncmd5.md): An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)

# kColorSyncProfileMD5Digest (Objective-C)

**Framework:** ColorSync  
**Kind:** Global Variable  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A key for the profile’s MD5 digest.

## Declaration

```objectivec
extern CFStringRef kColorSyncProfileMD5Digest;
```

## See Also

### Computing profile digests

- [ColorSyncProfileGetMD5](colorsyncprofilegetmd5%28__%29.md): Returns the MD5 digest for a profile.
- [ColorSyncMD5](colorsyncmd5.md): An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)
