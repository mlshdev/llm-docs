> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowvirtualmachine](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowvirtualmachine)

# allowVirtualMachine

**Interface language:** Objective-C

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property

A Boolean value that indicates whether the assessment allows running inside a virtual machine.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowVirtualMachine;
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if the device is not a virtual machine. This requirement is not enforced by default; virtual machines are allowed unless you opt out.

> **Important**

> This check is advisory, not a security guarantee. Setting `allowVirtualMachine` to `false` may not block an assessment session in every virtualized environment. Use this property to steer proctored exams toward physical hardware; it doesn’t provide a cryptographic attestation that the session is running on a physical machine.

For stronger assurances about the runtime environment, pair this property with [App Attest](https://developer.apple.com/documentation/DeviceCheck) on macOS.
