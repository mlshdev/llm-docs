> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/hypervisor/hv_vcpu_set_serror(_:_:)

# hv_vcpu_set_serror(\_:\_:) (Swift)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```swift
func hv_vcpu_set_serror(_ vcpu: hv_vcpu_t, _ pending: Bool) -> hv_return_t
```

## Parameters

- `vcpu`: ID of the vcpu instance.
- `pending`: Whether the SError is pending or not.

<a id="discussion"></a>

## Discussion

Sets pending SError for a vcpu.

Must be called by the owning thread.

# hv_vcpu_set_serror (Objective-C)

**Framework:** Hypervisor  
**Kind:** Function  
**Availability:** macOS 27.0+

## Declaration

```objectivec
extern hv_return_t hv_vcpu_set_serror(hv_vcpu_t vcpu, bool pending);
```

## Parameters

- `vcpu`: ID of the vcpu instance.
- `pending`: Whether the SError is pending or not.

<a id="discussion"></a>

## Discussion

Sets pending SError for a vcpu.

Must be called by the owning thread.
