> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/packagedescription/supportedplatform](https://developer.apple.com/documentation/packagedescription/supportedplatform)

# SupportedPlatform

**Framework:** PackageDescription  
**Kind:** Structure

A platform that the Swift package supports.

## Declaration

```swift
struct SupportedPlatform
```

<a id="overview"></a>

## Overview

By default, Swift Package Manager assigns a predefined minimum deployment version for each supported platforms unless you configure supported platforms using the `platforms` API. This predefined deployment version is the oldest deployment target version that the installed SDK supports for a given platform. One exception to this rule is macOS, for which the minimum deployment target version starts from 10.10. Packages can choose to configure the minimum deployment target version for a platform by using the APIs defined in this struct. Swift Package Manager emits appropriate errors when an invalid value is provided for supported platforms, such as an empty array, multiple declarations for the same platform, or an invalid version specification.

Swift Package Manager emits an error if a dependency isn’t compatible with the top-level package’s deployment version. The deployment target of a package’s dependencies must be lower than or equal to the top-level package’s deployment target version for a particular platform.

## Topics

### Supporting iOS

- [iOS(\_:)](supportedplatform/ios%28__%29-5pvv5.md): Configures the minimum deployment target version for the iOS platform.
- [iOS(\_:)](supportedplatform/ios%28__%29-83bbf.md): Configures the minimum deployment target version for the iOS platform using a custom version string.
- [iOS](platform/ios.md): The iOS platform.
- [SupportedPlatform.IOSVersion](supportedplatform/iosversion.md): The supported iOS version.

### Supporting macOS

- [macOS(\_:)](supportedplatform/macos%28__%29-2wthp.md): Configures the minimum deployment target version for the macOS platform.
- [macOS(\_:)](supportedplatform/macos%28__%29-9771f.md): Configures the minimum deployment target version for the macOS platform using a version string.
- [macOS](platform/macos.md): The macOS platform.
- [SupportedPlatform.MacOSVersion](supportedplatform/macosversion.md): The supported macOS version.

### Supporting watchOS

- [watchOS(\_:)](supportedplatform/watchos%28__%29-t998.md): Configure the minimum deployment target version for the watchOS platform.
- [watchOS(\_:)](supportedplatform/watchos%28__%29-4lrx0.md): Configure the minimum deployment target version for the watchOS platform using a custom version string.
- [watchOS](platform/watchos.md): The watchOS platform.
- [SupportedPlatform.WatchOSVersion](supportedplatform/watchosversion.md): The supported watchOS version.

### Supporting visionOS

- [visionOS(\_:)](supportedplatform/visionos%28__%29-3ip0z.md): Configure the minimum deployment target version for the visionOS platform.
- [visionOS(\_:)](supportedplatform/visionos%28__%29-6ur2u.md): Configure the minimum deployment target version for the visionOS platform using a custom version string.
- [visionOS](platform/visionos.md): The visionOS platform.
- [SupportedPlatform.VisionOSVersion](supportedplatform/visionosversion.md): The supported visionOS version.

### Supporting tvOS

- [tvOS(\_:)](supportedplatform/tvos%28__%29-6931l.md): Configures the minimum deployment target version for the tvOS platform.
- [tvOS(\_:)](supportedplatform/tvos%28__%29-3k8sy.md): Configures the minimum deployment target version for the tvOS platform using a custom version string.
- [tvOS](platform/tvos.md): The tvOS platform.
- [SupportedPlatform.TVOSVersion](supportedplatform/tvosversion.md): The supported tvOS version.

### Supporting MacCatalyst

- [macCatalyst(\_:)](supportedplatform/maccatalyst%28__%29-6bh40.md): Configures the minimum deployment target version for the Mac Catalyst platform.
- [macCatalyst(\_:)](supportedplatform/maccatalyst%28__%29-9wbz.md): Configures the minimum deployment target version for the Mac Catalyst platform using a version string.
- [macCatalyst](platform/maccatalyst.md): The Mac Catalyst platform.
- [SupportedPlatform.MacCatalystVersion](supportedplatform/maccatalystversion.md): The supported Mac Catalyst version.

### Supporting DriverKit

- [driverKit(\_:)](supportedplatform/driverkit%28__%29-jxlz.md): Configures the minimum deployment target version for the DriverKit platform.
- [driverKit(\_:)](supportedplatform/driverkit%28__%29-6evdd.md): Configures the minimum deployment target version for the DriverKit platform using a custom version string.
- [driverKit](platform/driverkit.md): The DriverKit platform
- [SupportedPlatform.DriverKitVersion](supportedplatform/driverkitversion.md): The supported DriverKit version.

### Supporting Custom Platforms

- [custom(\_:versionString:)](supportedplatform/custom%28__versionstring_%29.md): Configures the minimum deployment target version for custom platforms.

### Structures

- [SupportedPlatform.CustomPlatformVersion](supportedplatform/customplatformversion.md): A supported custom platform version.

## Relationships

### Conforms To

- [Equatable](../swift/equatable.md)
- [Sendable](../swift/sendable.md)
- [SendableMetatype](../swift/sendablemetatype.md)

## See Also

### Declaring Supported Platforms

- [platforms](package/platforms.md): The list of minimum versions for platforms supported by the package.
- [Platform](platform.md): A platform supported by Swift Package Manager.
