> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/kern_ctl_ref

# kern_ctl_ref

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.13+

## Declaration

```objectivec
typedef void *kern_ctl_ref;
```

<a id="discussion"></a>

## Discussion

A control reference is used to track an attached kernel control. Registering a kernel control will create a kernel control reference. This reference is required for sending data or removing the kernel control. This reference will be passed to callbacks for that kernel control.
