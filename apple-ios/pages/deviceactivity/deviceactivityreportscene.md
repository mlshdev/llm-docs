> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityreportscene](https://developer.apple.com/documentation/deviceactivity/deviceactivityreportscene)

# DeviceActivityReportScene

**Framework:** DeviceActivity  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Defines a custom device activity report scene.

## Declaration

```swift
protocol DeviceActivityReportScene : AppExtensionScene
```

<a id="overview"></a>

## Overview

This protocol refines `AppExtensionScene` and restricts the types that can be passed to a [DeviceActivityReportBuilder](deviceactivityreportbuilder.md). Your extension should provide a scene for each context that your app supports.

## Topics

### Associated Types

- [Configuration](deviceactivityreportscene/configuration.md): A type used to configure your scene’s [content](deviceactivityreportscene/content-swift.property.md).
- [Content](deviceactivityreportscene/content-swift.associatedtype.md): The type of view that represents the scene’s content.

### Instance Properties

- [content](deviceactivityreportscene/content-swift.property.md): A closure that builds your report’s content with the provided configuration.
- [context](deviceactivityreportscene/context.md): The context of the scene.

### Instance Methods

- [makeConfiguration(representing:)](deviceactivityreportscene/makeconfiguration%28representing_%29.md): Creates a new configuration that represents the provided data.

## Relationships

### Inherits From

- [AppExtensionScene](https://developer.apple.com/documentation/extensionkit/appextensionscene)

## See Also

### Report activity

- [DeviceActivityReport](deviceactivityreport.md): A view that reports the user’s application, category, and web domain activity in a privacy-preserving way.
- [DeviceActivityReportExtension](deviceactivityreportextension.md): An app extension that reports device activity data.
- [DeviceActivityReportBuilder](deviceactivityreportbuilder.md): A result builder that combines one or more `DeviceActivityReportScene`s into a single scene.
