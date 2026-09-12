> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityreport/context](https://developer.apple.com/documentation/deviceactivity/deviceactivityreport/context)

# DeviceActivityReport.Context

**Framework:** DeviceActivity  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

A context indicating how your device activity report extension should configure its `DeviceActivityReportView`.

## Declaration

```swift
struct Context
```

<a id="overview"></a>

## Overview

You can use a [DeviceActivityReport.Context](context.md) to create a [DeviceActivityReport](../deviceactivityreport.md), which the system then provides to your app’s extension and allows it to configure the resulting report `View` in a particular way. For example, if you want to render either a pie chart or bar graph representing the user’s device activity, you can create the following custom contexts:

```swift
extension DeviceActivityReport.Context {
    static let barGraph = Self("barGraph")
    static let pieChart = Self("pieChart")
}
```

If your app instantiates a report with the `barGraph` context, then the system prompts your report extension to generate a view using the `Scene` corresponding to that context.

## Topics

### Initializers

- [init(\_:)](context/init%28__%29.md): Creates a new instance with the specified raw value.
- [init(rawValue:)](context/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

### Instance Properties

- [rawValue](context/rawvalue.md): The underlying value that represents the given context.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
