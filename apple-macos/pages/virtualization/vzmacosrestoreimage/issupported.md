> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/issupported](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/issupported)

# isSupported (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the current host supports this restore image.

## Declaration

```swift
var isSupported: Bool { get }
```

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.
- [url](url.md): The URL of this restore image.

# supported (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A Boolean value that indicates whether the current host supports this restore image.

## Declaration

```objectivec
@property (readonly, getter=isSupported) BOOL supported;
```

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.
- [URL](url.md): The URL of this restore image.
