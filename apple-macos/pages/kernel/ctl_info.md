> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/ctl_info

# ctl_info

**Interface language:** Objective-C

**Framework:** Kernel  
**Availability:** macOS 10.13+

## Declaration

```objectivec
struct ctl_info {
    ...
};
```

<a id="discussion"></a>

## Discussion

This structure is used with the CTLIOCGINFO ioctl to translate from a kernel control name to a control id.

## Topics

### Fields

- [ctl_id](ctl_info/1809204-ctl_id.md): The kernel control id, filled out upon return.
- [ctl_name](ctl_info/1809207-ctl_name.md): The kernel control name to find.
