> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/bpf_func

# BPF_FUNC

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Alias  
**Availability:** macOS 10.6+

## Declaration

```objectivec
typedef int (*BPF_FUNC)(struct ifnet *, struct mbuf *);
```

<a id="discussion"></a>

## Discussion

Prototype for the BPF tap handler. This will disappear when the correct DLIL header file is included.
