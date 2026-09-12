> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/buildversion](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/buildversion)

# buildVersion (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The build version this restore image contains.

## Declaration

```swift
var buildVersion: String { get }
```

## See Also

### Getting Information About the Restore Image

- [isSupported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.
- [url](url.md): The URL of this restore image.

# buildVersion (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The build version this restore image contains.

## Declaration

```objectivec
@property (copy, readonly) NSString * buildVersion;
```

## See Also

### Getting Information About the Restore Image

- [supported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.
- [URL](url.md): The URL of this restore image.
