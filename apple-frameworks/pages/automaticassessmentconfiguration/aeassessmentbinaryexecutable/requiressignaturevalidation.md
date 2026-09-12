> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutable/requiressignaturevalidation](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutable/requiressignaturevalidation)

# requiresSignatureValidation (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Whether the running executable’s code signature is validated. Defaults to `YES`.

## Declaration

```swift
var requiresSignatureValidation: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Disabling this waives only the availability check, not the signing requirement of [allowsOnlyParticipantsToRun](../aeassessmentconfiguration/allowsonlyparticipantstorun.md): an unsigned or invalidly signed executable still can’t be added to that session’s launch allowlist. Disabling it converts a required participant’s begin-time failure into a silent launch denial, and forgoes the swap/re-sign protection for a signed one.

> **See Also**

> [isRequired](../aeassessmentbinaryexecutableconfiguration/isrequired.md).

# requiresSignatureValidation (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Whether the running executable’s code signature is validated. Defaults to `YES`.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL requiresSignatureValidation;
```

<a id="discussion"></a>

## Discussion

Disabling this waives only the availability check, not the signing requirement of [allowsOnlyParticipantsToRun](../aeassessmentconfiguration/allowsonlyparticipantstorun.md): an unsigned or invalidly signed executable still can’t be added to that session’s launch allowlist. Disabling it converts a required participant’s begin-time failure into a silent launch denial, and forgoes the swap/re-sign protection for a signed one.

> **See Also**

> [required](../aeassessmentbinaryexecutableconfiguration/isrequired.md).
