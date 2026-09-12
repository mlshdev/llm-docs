> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/resetprogressreportingcapabilities()](https://developer.apple.com/documentation/classkit/clscontext/resetprogressreportingcapabilities())

# resetProgressReportingCapabilities() (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Resets the set of capabilities for the context.

## Declaration

```swift
func resetProgressReportingCapabilities()
```

<a id="Discussion"></a>

## Discussion

Use this method to remove all the capabilities that you previously added with the [addProgressReportingCapabilities(\_:)](addprogressreportingcapabilities%28__%29.md) method. After calling the reset method, the context reverts to having only the default [CLSProgressReportingCapability.Kind.duration](../clsprogressreportingcapability/kind-swift.enum/duration.md) capability that it had after initialization.

## See Also

### Indicating progress reporting capabilities

- [progressReportingCapabilities](progressreportingcapabilities.md): The kinds of progress reporting that the context can perform.
- [addProgressReportingCapabilities(\_:)](addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [CLSProgressReportingCapability](../clsprogressreportingcapability.md): A progress reporting capability supported by a context.

# resetProgressReportingCapabilities (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Resets the set of capabilities for the context.

## Declaration

```objectivec
- (void) resetProgressReportingCapabilities;
```

<a id="Discussion"></a>

## Discussion

Use this method to remove all the capabilities that you previously added with the [addProgressReportingCapabilities:](addprogressreportingcapabilities%28__%29.md) method. After calling the reset method, the context reverts to having only the default [CLSProgressReportingCapabilityKindDuration](../clsprogressreportingcapability/kind-swift.enum/duration.md) capability that it had after initialization.

## See Also

### Indicating progress reporting capabilities

- [progressReportingCapabilities](progressreportingcapabilities.md): The kinds of progress reporting that the context can perform.
- [addProgressReportingCapabilities:](addprogressreportingcapabilities%28__%29.md): Adds a progress reporting capability to the set of capabilities for the context.
- [CLSProgressReportingCapability](../clsprogressreportingcapability.md): A progress reporting capability supported by a context.
