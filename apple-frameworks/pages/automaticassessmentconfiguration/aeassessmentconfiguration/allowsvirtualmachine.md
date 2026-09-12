> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsvirtualmachine](https://developer.apple.com/documentation/automaticassessmentconfiguration/aeassessmentconfiguration/allowsvirtualmachine)

# allowsVirtualMachine (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows running inside a virtual machine.

## Declaration

```swift
var allowsVirtualMachine: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if the device is not a virtual machine. This requirement is not enforced by default; virtual machines are allowed unless you opt out.

> **Important**

> This check is advisory, not a security guarantee. Setting `allowsVirtualMachine` to `false` may not block an assessment session in every virtualized environment. Use this property to steer proctored exams toward physical hardware; it doesn’t provide a cryptographic attestation that the session is running on a physical machine.

For stronger assurances about the runtime environment, pair this property with [App Attest](https://developer.apple.com/documentation/DeviceCheck) on macOS.

# allowsVirtualMachine (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

A Boolean value that indicates whether the assessment allows running inside a virtual machine.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL allowsVirtualMachine;
```

<a id="discussion"></a>

## Discussion

When set to `false`, the assessment session will only start if the device is not a virtual machine. This requirement is not enforced by default; virtual machines are allowed unless you opt out.

> **Important**

> This check is advisory, not a security guarantee. Setting `allowsVirtualMachine` to `false` may not block an assessment session in every virtualized environment. Use this property to steer proctored exams toward physical hardware; it doesn’t provide a cryptographic attestation that the session is running on a physical machine.

For stronger assurances about the runtime environment, pair this property with [App Attest](https://developer.apple.com/documentation/DeviceCheck) on macOS.
