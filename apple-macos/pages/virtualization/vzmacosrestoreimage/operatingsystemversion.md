> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/operatingsystemversion](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/operatingsystemversion)

# operatingSystemVersion (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The operating system version this restore image contains.

## Declaration

```swift
var operatingSystemVersion: OperatingSystemVersion { get }
```

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [isSupported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [url](url.md): The URL of this restore image.

# operatingSystemVersion (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The operating system version this restore image contains.

## Declaration

```objectivec
@property (readonly) NSOperatingSystemVersion operatingSystemVersion;
```

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [supported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [URL](url.md): The URL of this restore image.
