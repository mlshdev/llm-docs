> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/setconfiguration(_:for:)-16sed](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/setconfiguration(_:for:)-16sed)

# setConfiguration(\_:for:) (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Adds an executable participant to the list of participants available during an assessment.

## Declaration

```swift
func setConfiguration(_ configuration: AEAssessmentBinaryExecutableConfiguration, for binaryExecutable: AEAssessmentBinaryExecutable)
```

## Parameters

- `configuration`: The configuration of the executable participant.
- `binaryExecutable`: The executable that you want to configure.

<a id="discussion"></a>

## Discussion

Ignores an executable whose [binaryExecutableURL](../aeassessmentbinaryexecutable/binaryexecutableurl.md) isn’t a file URL.

> **See Also**

> [AEAssessmentBinaryExecutable](../aeassessmentbinaryexecutable.md)

# setConfiguration:forBinaryExecutable: (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Adds an executable participant to the list of participants available during an assessment.

## Declaration

```objectivec
- (void) setConfiguration:(AEAssessmentBinaryExecutableConfiguration *) configuration forBinaryExecutable:(AEAssessmentBinaryExecutable *) binaryExecutable;
```

## Parameters

- `configuration`: The configuration of the executable participant.
- `binaryExecutable`: The executable that you want to configure.

<a id="discussion"></a>

## Discussion

Ignores an executable whose [binaryExecutableURL](../aeassessmentbinaryexecutable/binaryexecutableurl.md) isn’t a file URL.

> **See Also**

> [AEAssessmentBinaryExecutable](../aeassessmentbinaryexecutable.md)
