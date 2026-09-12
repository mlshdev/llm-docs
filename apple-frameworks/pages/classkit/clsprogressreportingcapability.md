> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsprogressreportingcapability](https://developer.apple.com/documentation/classkit/clsprogressreportingcapability)

# CLSProgressReportingCapability (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A progress reporting capability supported by a context.

## Declaration

```swift
class CLSProgressReportingCapability
```

<a id="overview"></a>

## Overview

You use activities to report metrics about a student’s progress through the task associated with a context. Every activity automatically measures time spent performing the task, but you can provide additional information, like the completion percentage, or a final score.

To help teachers understand what to expect from a context, create a set of [CLSProgressReportingCapability](clsprogressreportingcapability.md) instances — one for each kind of metric the context reports. Add the complete set to the context by calling the [addProgressReportingCapabilities(\_:)](clscontext/addprogressreportingcapabilities%28__%29.md) method.

When you create a reporting capability, include a brief description of the capability as a localized string in the [details](clsprogressreportingcapability/details.md) property. Schoolwork presents this to teachers to provide additional information about the metric.

## Topics

### Creating a Progress Reporting Capability

- [init(kind:details:)](clsprogressreportingcapability/init%28kind_details_%29.md): Creates a new progress reporting capability of the given type with a descriptive string.

### Characterizing the Capability

- [details](clsprogressreportingcapability/details.md): A description of the capability presented to teachers.
- [kind](clsprogressreportingcapability/kind-swift.property.md): The kind of progress reporting capability.
- [CLSProgressReportingCapability.Kind](clsprogressreportingcapability/kind-swift.enum.md): The available kinds of progress reporting that a context can perform.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Indicating progress reporting capabilities

- [progressReportingCapabilities](clscontext/progressreportingcapabilities.md): The kinds of progress reporting that the context can perform.
- [addProgressReportingCapabilities(\_:)](clscontext/addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [resetProgressReportingCapabilities()](clscontext/resetprogressreportingcapabilities%28%29.md): Resets the set of capabilities for the context.

# CLSProgressReportingCapability (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A progress reporting capability supported by a context.

## Declaration

```objectivec
@interface CLSProgressReportingCapability : CLSObject
```

<a id="overview"></a>

## Overview

You use activities to report metrics about a student’s progress through the task associated with a context. Every activity automatically measures time spent performing the task, but you can provide additional information, like the completion percentage, or a final score.

To help teachers understand what to expect from a context, create a set of [CLSProgressReportingCapability](clsprogressreportingcapability.md) instances — one for each kind of metric the context reports. Add the complete set to the context by calling the [addProgressReportingCapabilities:](clscontext/addprogressreportingcapabilities%28__%29.md) method.

When you create a reporting capability, include a brief description of the capability as a localized string in the [details](clsprogressreportingcapability/details.md) property. Schoolwork presents this to teachers to provide additional information about the metric.

## Topics

### Creating a Progress Reporting Capability

- [initWithKind:details:](clsprogressreportingcapability/init%28kind_details_%29.md): Creates a new progress reporting capability of the given type with a descriptive string.

### Characterizing the Capability

- [details](clsprogressreportingcapability/details.md): A description of the capability presented to teachers.
- [kind](clsprogressreportingcapability/kind-swift.property.md): The kind of progress reporting capability.
- [CLSProgressReportingCapabilityKind](clsprogressreportingcapability/kind-swift.enum.md): The available kinds of progress reporting that a context can perform.

## Relationships

### Inherits From

- [CLSObject](clsobject.md)

## See Also

### Indicating progress reporting capabilities

- [progressReportingCapabilities](clscontext/progressreportingcapabilities.md): The kinds of progress reporting that the context can perform.
- [addProgressReportingCapabilities:](clscontext/addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [resetProgressReportingCapabilities](clscontext/resetprogressreportingcapabilities%28%29.md): Resets the set of capabilities for the context.
