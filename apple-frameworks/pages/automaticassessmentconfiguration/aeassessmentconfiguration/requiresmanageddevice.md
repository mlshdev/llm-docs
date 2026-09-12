> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresmanageddevice](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/requiresmanageddevice)

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

When set to `true`, the assessment session will only start if the device is enrolled in a Mobile Device Management (MDM) solution. This requirement is disabled by default.

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

When set to `true`, the assessment session will only start if the device is enrolled in a Mobile Device Management (MDM) solution. This requirement is disabled by default.
