> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsprogressreportingcapability/init(kind:details:)](https://developer.apple.com/documentation/classkit/clsprogressreportingcapability/init(kind:details:))

# init(kind:details:) (Swift)

**Framework:** ClassKit  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new progress reporting capability of the given type with a descriptive string.

## Declaration

```swift
init(kind: CLSProgressReportingCapability.Kind, details: String?)
```

## Parameters

- `kind`: The type of progress reporting, like duration or a final score, that this capability represents.
- `details`: A description of the metric, given as a localized string.

# initWithKind:details: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Creates a new progress reporting capability of the given type with a descriptive string.

## Declaration

```objectivec
- (instancetype) initWithKind:(CLSProgressReportingCapabilityKind) kind details:(NSString *) details;
```

## Parameters

- `kind`: The type of progress reporting, like duration or a final score, that this capability represents.
- `details`: A description of the metric, given as a localized string.
