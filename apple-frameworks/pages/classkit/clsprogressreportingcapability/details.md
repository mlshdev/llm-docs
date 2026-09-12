> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsprogressreportingcapability/details](https://developer.apple.com/documentation/classkit/clsprogressreportingcapability/details)

# details (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A description of the capability presented to teachers.

## Declaration

```swift
var details: String? { get }
```

<a id="Discussion"></a>

## Discussion

Localize the string that you assign to this property. Schoolwork presents the string to teachers to help them understand how your app uses this capability.

## See Also

### Characterizing the Capability

- [kind](kind-swift.property.md): The kind of progress reporting capability.
- [CLSProgressReportingCapability.Kind](kind-swift.enum.md): The available kinds of progress reporting that a context can perform.

# details (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A description of the capability presented to teachers.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * details;
```

<a id="Discussion"></a>

## Discussion

Localize the string that you assign to this property. Schoolwork presents the string to teachers to help them understand how your app uses this capability.

## See Also

### Characterizing the Capability

- [kind](kind-swift.property.md): The kind of progress reporting capability.
- [CLSProgressReportingCapabilityKind](kind-swift.enum.md): The available kinds of progress reporting that a context can perform.
