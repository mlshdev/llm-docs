> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/colorsync/colorsyncapiversion()](https://developer.apple.com/documentation/colorsync/colorsyncapiversion())

# ColorSyncAPIVersion() (Swift)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the version of the ColorSync API.

## Declaration

```swift
func ColorSyncAPIVersion() -> UInt32
```

<a id="return-value"></a>

## Return Value

The API version as a binary-coded decimal `uint32_t`. From most to least significant byte, the value encodes the major OS version, minor OS version, patch version, and API version — that is, `(major << 24) | (minor << 16) | (dot << 8) | (apiVersion & 0xFF)`.

## See Also

### Versioning

- [COLORSYNC_API_VERSION](colorsync_api_version.md)
- [icVersion4Number](icversion4number.md)
- [icVersion4Point4Number](icversion4point4number.md)

# ColorSyncAPIVersion (Objective-C)

**Framework:** ColorSync  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the version of the ColorSync API.

## Declaration

```objectivec
extern uint32_t ColorSyncAPIVersion();
```

<a id="return-value"></a>

## Return Value

The API version as a binary-coded decimal `uint32_t`. From most to least significant byte, the value encodes the major OS version, minor OS version, patch version, and API version — that is, `(major << 24) | (minor << 16) | (dot << 8) | (apiVersion & 0xFF)`.

## See Also

### Versioning

- [COLORSYNC_API_VERSION](colorsync_api_version.md)
- [icVersion4Number](icversion4number.md)
- [icVersion4Point4Number](icversion4point4number.md)
