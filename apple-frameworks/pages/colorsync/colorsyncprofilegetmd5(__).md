> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncprofilegetmd5(_:)](https://developer.apple.com/documentation/colorsync/colorsyncprofilegetmd5(_:))

# ColorSyncProfileGetMD5(\_:) (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the MD5 digest for a profile.

## Declaration

```swift
func ColorSyncProfileGetMD5(_ prof: ColorSyncProfile!) -> ColorSyncMD5
```

## Parameters

- `prof`: The profile to compute the digest for.

<a id="return-value"></a>

## Return Value

The MD5 digest for the profile, calculated as defined by the ICC specification, or a “zero” signature (filled with zeros) in case of failure.

## See Also

### Computing profile digests

- [ColorSyncMD5](colorsyncmd5.md): An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)
- [kColorSyncProfileMD5Digest](kcolorsyncprofilemd5digest.md): A key for the profile’s MD5 digest.

# ColorSyncProfileGetMD5 (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.4+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the MD5 digest for a profile.

## Declaration

```objectivec
extern ColorSyncMD5 ColorSyncProfileGetMD5(ColorSyncProfileRef prof);
```

## Parameters

- `prof`: The profile to compute the digest for.

<a id="return-value"></a>

## Return Value

The MD5 digest for the profile, calculated as defined by the ICC specification, or a “zero” signature (filled with zeros) in case of failure.

## See Also

### Computing profile digests

- [ColorSyncMD5](colorsyncmd5.md): An MD5 digest that uniquely identifies a profile, as defined by the ICC specification.
- [COLORSYNC_MD5_LENGTH](colorsync_md5_length.md)
- [kColorSyncProfileMD5Digest](kcolorsyncprofilemd5digest.md): A key for the profile’s MD5 digest.
