> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsprogressreportingcapability/kind-swift.enum](https://developer.apple.com/documentation/classkit/clsprogressreportingcapability/kind-swift.enum)

# CLSProgressReportingCapability.Kind (Swift)

**Framework:** ClassKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The available kinds of progress reporting that a context can perform.

## Declaration

```swift
enum Kind
```

<a id="overview"></a>

## Overview

Use one of these values to set the [kind](kind-swift.property.md) property in each [CLSProgressReportingCapability](../clsprogressreportingcapability.md) instance when constructing a set of capabilities used to configure a context. Each kind corresponds to a different metric that you provide, like a score or a progress indication.

## Topics

### Reporting capabilities

- [CLSProgressReportingCapability.Kind.duration](kind-swift.enum/duration.md): Time spent performing the task.
- [CLSProgressReportingCapability.Kind.percent](kind-swift.enum/percent.md): The percentage of the total task that has been completed.
- [CLSProgressReportingCapability.Kind.binary](kind-swift.enum/binary.md): A binary outcome for the task, like true or false.
- [CLSProgressReportingCapability.Kind.quantity](kind-swift.enum/quantity.md): A discrete value.
- [CLSProgressReportingCapability.Kind.score](kind-swift.enum/score.md): A score.

### Initializers

- [init(rawValue:)](kind-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Characterizing the Capability

- [details](details.md): A description of the capability presented to teachers.
- [kind](kind-swift.property.md): The kind of progress reporting capability.

# CLSProgressReportingCapabilityKind (Objective-C)

**Framework:** ClassKit  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The available kinds of progress reporting that a context can perform.

## Declaration

```objectivec
enum CLSProgressReportingCapabilityKind : NSInteger;
```

<a id="overview"></a>

## Overview

Use one of these values to set the [kind](kind-swift.property.md) property in each [CLSProgressReportingCapability](../clsprogressreportingcapability.md) instance when constructing a set of capabilities used to configure a context. Each kind corresponds to a different metric that you provide, like a score or a progress indication.

## Topics

### Reporting capabilities

- [CLSProgressReportingCapabilityKindDuration](kind-swift.enum/duration.md): Time spent performing the task.
- [CLSProgressReportingCapabilityKindPercent](kind-swift.enum/percent.md): The percentage of the total task that has been completed.
- [CLSProgressReportingCapabilityKindBinary](kind-swift.enum/binary.md): A binary outcome for the task, like true or false.
- [CLSProgressReportingCapabilityKindQuantity](kind-swift.enum/quantity.md): A discrete value.
- [CLSProgressReportingCapabilityKindScore](kind-swift.enum/score.md): A score.

## See Also

### Characterizing the Capability

- [details](details.md): A description of the capability presented to teachers.
- [kind](kind-swift.property.md): The kind of progress reporting capability.
