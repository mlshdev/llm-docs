> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityreportextension](https://developer.apple.com/documentation/deviceactivity/deviceactivityreportextension)

# DeviceActivityReportExtension

**Framework:** DeviceActivity  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An app extension that reports device activity data.

## Declaration

```swift
protocol DeviceActivityReportExtension : AppExtension
```

<a id="overview"></a>

## Overview

Your extension is provided with the data that your app requests when it instantiates a `DeviceActivityReport`, which it uses to render a [View](https://developer.apple.com/documentation/swiftui/view) representing the user’s device activity.

## Topics

### Associated Types

- [Body](deviceactivityreportextension/body-swift.associatedtype.md): The body of the extension’s scene.

### Instance Properties

- [body](deviceactivityreportextension/body-swift.property.md): A body containing a [DeviceActivityReportScene](deviceactivityreportscene.md) for each context that your extension supports.

## Relationships

### Inherits From

- [AppExtension](https://developer.apple.com/documentation/extensionfoundation/appextension)

## See Also

### Report activity

- [DeviceActivityReport](deviceactivityreport.md): A view that reports the user’s application, category, and web domain activity in a privacy-preserving way.
- [DeviceActivityReportScene](deviceactivityreportscene.md): Defines a custom device activity report scene.
- [DeviceActivityReportBuilder](deviceactivityreportbuilder.md): A result builder that combines one or more `DeviceActivityReportScene`s into a single scene.
