> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosrestoreimage/url](https://developer.apple.com/documentation/virtualization/vzmacosrestoreimage/url)

# url (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The URL of this restore image.

## Declaration

```swift
var url: URL { get }
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

If the restore image loaded using [image(from:)](image%28from_%29.md), the value of this property is a file URL.

If you obtain the restore image by fetching it from a server, use [latestSupported](latestsupported.md) and set the value of this property to a network URL for the installation media file.

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [isSupported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.

# URL (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The URL of this restore image.

## Declaration

```objectivec
@property (copy, readonly) NSURL * URL;
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

If the restore image loaded using [loadFileURL:completionHandler:](image%28from_%29.md), the value of this property is a file URL.

If you obtain the restore image by fetching it from a server, use [fetchLatestSupportedWithCompletionHandler:](latestsupported.md) and set the value of this property to a network URL for the installation media file.

## See Also

### Getting Information About the Restore Image

- [buildVersion](buildversion.md): The build version this restore image contains.
- [supported](issupported.md): A Boolean value that indicates whether the current host supports this restore image.
- [mostFeaturefulSupportedConfiguration](mostfeaturefulsupportedconfiguration.md): This object represents the most fully featured configuration that’s supported by both the current host and by this restore image.
- [operatingSystemVersion](operatingsystemversion.md): The operating system version this restore image contains.
