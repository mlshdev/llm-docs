> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/1562448-vfs_context_issignal

# vfs_context_issignal

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Function  
**Availability:** macOS 10.4+

Get a bitfield of pending signals for the BSD process associated with a vfs_context_t.

## Declaration

```objectivec
int vfs_context_issignal(vfs_context_t ctx, sigset_t mask);
```

## Parameters

- `ctx`: Context whose associated process to find.

<a id="return_value"></a>

## Return Value

Bitfield of pending signals.

<a id="discussion"></a>

## Discussion

The bitfield is constructed using the sigmask() macro, in the sense of bits |= sigmask(SIGSEGV).
