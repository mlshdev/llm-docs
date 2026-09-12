> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsonlyparticipantstorun](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsonlyparticipantstorun)

# allowsOnlyParticipantsToRun (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether only participant applications are allowed to run during an assessment.

## Declaration

```swift
var allowsOnlyParticipantsToRun: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Only validly signed participants can be permitted. The launch allowlist pins each entry to the code signing identifier and team identifier read from its signature, so an unsigned or invalidly signed participant has no identity to pin and is denied launch even though you configured it as a participant. This holds regardless of [requiresSignatureValidation](../aeassessmentbinaryexecutable/requiressignaturevalidation.md).

> **See Also**

> [AEAssessmentBinaryExecutable](../aeassessmentbinaryexecutable.md) for how an unenforceable executable participant affects the session.

# allowsOnlyParticipantsToRun (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether only participant applications are allowed to run during an assessment.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsOnlyParticipantsToRun;
```

<a id="discussion"></a>

## Discussion

Only validly signed participants can be permitted. The launch allowlist pins each entry to the code signing identifier and team identifier read from its signature, so an unsigned or invalidly signed participant has no identity to pin and is denied launch even though you configured it as a participant. This holds regardless of [requiresSignatureValidation](../aeassessmentbinaryexecutable/requiressignaturevalidation.md).

> **See Also**

> [AEAssessmentBinaryExecutable](../aeassessmentbinaryexecutable.md) for how an unenforceable executable participant affects the session.
