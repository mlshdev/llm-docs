> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/longrunningtaskoptions](https://developer.apple.com/documentation/appintents/longrunningtaskoptions)

# LongRunningTaskOptions

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Options for configuring long-running tasks.

## Declaration

```swift
struct LongRunningTaskOptions
```

<a id="overview"></a>

## Overview

When performing long-running tasks, specify these options to indicate additional resource requirements for the task. Pass these options to the [performBackgroundTask(options:operation:)](longrunningintent/performbackgroundtask%28options_operation_%29.md) or [performBackgroundTask(options:operation:onCancel:)](longrunningintent/performbackgroundtask%28options_operation_oncancel_%29.md) methods.

## Topics

### Type Properties

- [requiresGPU](longrunningtaskoptions/requiresgpu.md): An option that indicates the task requires GPU resources.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Performing background tasks

- [performBackgroundTask(options:operation:)](longrunningintent/performbackgroundtask%28options_operation_%29.md): Runs an operation in the background with an extended amount of time.
- [performBackgroundTask(options:operation:onCancel:)](longrunningintent/performbackgroundtask%28options_operation_oncancel_%29.md): Runs an operation in the background and provides a way to cancel the operation before it finishes.
