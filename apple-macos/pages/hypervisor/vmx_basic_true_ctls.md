> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/hypervisor/vmx_basic_true_ctls](https://developer.apple.com/documentation/hypervisor/vmx_basic_true_ctls)

# VMX_BASIC_TRUE_CTLS (Swift)

**Framework:** Hypervisor  
**Kind:** Global Variable  
**Availability:** macOS

This bit field, in the value returned by the IA32_VMX_BASIC model specific register, determines if it’s possible to disable any VMX controls.

## Declaration

```swift
var VMX_BASIC_TRUE_CTLS: UInt { get }
```

<a id="Discussion"></a>

## Discussion

The hardware must return this bit as a 1 in order to create any VM using the framework.

# VMX_BASIC_TRUE_CTLS (Objective-C)

**Framework:** Hypervisor  
**Kind:** Enumeration Case  
**Availability:** macOS

This bit field, in the value returned by the IA32_VMX_BASIC model specific register, determines if it’s possible to disable any VMX controls.

## Declaration

```objectivec
VMX_BASIC_TRUE_CTLS
```

<a id="Discussion"></a>

## Discussion

The hardware must return this bit as a 1 in order to create any VM using the framework.
