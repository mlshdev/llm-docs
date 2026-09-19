> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresmanageddevice

# requiresManagedDevice (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the device must be managed to start an assessment.

## Declaration

```swift
var requiresManagedDevice: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if the device is enrolled in a Mobile Device Management (MDM) solution. Defaults to `false`.

# requiresManagedDevice (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the device must be managed to start an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresManagedDevice;
```

<a id="discussion"></a>

## Discussion

When set to `true`, the assessment session will only start if the device is enrolled in a Mobile Device Management (MDM) solution. Defaults to `false`.
