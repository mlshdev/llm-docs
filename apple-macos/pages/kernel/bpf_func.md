> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/bpf_func](https://developer.apple.com/documentation/kernel/bpf_func)

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
