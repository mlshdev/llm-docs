> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/browserenginecore/be_memory_inline_jit_restrict_rwx_to_rx_with_witness_impl

# be_memory_inline_jit_restrict_rwx_to_rx_with_witness_impl

**Interface language:** Objective-C

**Framework:** BrowserEngineCore  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+ · visionOS 1.1+

Makes a region of memory executable for use in just-in-time (JIT) compilation.

## Declaration

```objectivec
extern void be_memory_inline_jit_restrict_rwx_to_rx_with_witness_impl();
```

<a id="Overview"></a>

## Overview

You don’t call this function directly. Call [be_memory_inline_jit_restrict_rwx_to_rx_with_witness](be_memory_inline_jit_restrict_rwx_to_rx_with_witness.md) instead.

## See Also

### Memory-protection implementation

- [be_memory_inline_jit_restrict_rwx_to_rw_with_witness_impl](be_memory_inline_jit_restrict_rwx_to_rw_with_witness_impl.md): Makes a region of memory writable for use in just-in-time (JIT) compilation.
