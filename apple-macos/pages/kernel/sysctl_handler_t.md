> Snapshot-pinned source payload for Apple macOS snapshot-0513df389cc7; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/sysctl_handler_t

# sysctl_handler_t

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.5+

## Declaration

```objectivec
typedef int (*sysctl_handler_t)(struct sysctl_oid *oidp, void *arg1, int arg2, struct sysctl_req *req);
```
