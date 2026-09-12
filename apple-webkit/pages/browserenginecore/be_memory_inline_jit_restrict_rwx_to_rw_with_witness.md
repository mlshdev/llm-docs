> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/be_memory_inline_jit_restrict_rwx_to_rw_with_witness](https://developer.apple.com/documentation/browserenginecore/be_memory_inline_jit_restrict_rwx_to_rw_with_witness)

# be_memory_inline_jit_restrict_rwx_to_rw_with_witness

**Interface language:** Objective-C

**Framework:** BrowserEngineCore  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS 14.3+ · visionOS 1.1+

Makes a region of memory writable for use in just-in-time (JIT) compilation.

## Declaration

```objectivec
void be_memory_inline_jit_restrict_rwx_to_rw_with_witness();
```

<a id="Overview"></a>

## Overview

> **Important**

>  To correctly use this memory to help protect your JIT memory region, you need to inline calls and conform to other restrictions. For information, see [Protecting code compiled just in time](../browserenginekit/protecting-code-compiled-just-in-time.md).

## See Also

### JIT compilation

- [be_memory_inline_jit_restrict_with_witness_supported](be_memory_inline_jit_restrict_with_witness_supported.md): Reports whether write protection for just-in-time (JIT) compilation is available.
- [be_memory_inline_jit_restrict_rwx_to_rx_with_witness](be_memory_inline_jit_restrict_rwx_to_rx_with_witness.md): Makes a region of memory executable for use in just-in-time (JIT) compilation.
- [BE_JIT_WRITE_PROTECT_TAG](be_jit_write_protect_tag.md): A discriminator value the system uses to generate pointer authentication codes for just-in-time compilation.
