> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutableconfiguration/isrequired](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentbinaryexecutableconfiguration/isrequired)

# isRequired (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Whether the assessment requires this executable. Defaults to `NO`.

## Declaration

```swift
var isRequired: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Governs what happens when the executable cannot be enforced — for example, when signature validation fails under [allowsOnlyParticipantsToRun](../aeassessmentconfiguration/allowsonlyparticipantstorun.md). A non-required participant is silently dropped; a required one prevents the session from beginning.

> **See Also**

> [requiresSignatureValidation](../aeassessmentbinaryexecutable/requiressignaturevalidation.md).

# required (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Whether the assessment requires this executable. Defaults to `NO`.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isRequired) BOOL required;
```

<a id="discussion"></a>

## Discussion

Governs what happens when the executable cannot be enforced — for example, when signature validation fails under [allowsOnlyParticipantsToRun](../aeassessmentconfiguration/allowsonlyparticipantstorun.md). A non-required participant is silently dropped; a required one prevents the session from beginning.

> **See Also**

> [requiresSignatureValidation](../aeassessmentbinaryexecutable/requiressignaturevalidation.md).
