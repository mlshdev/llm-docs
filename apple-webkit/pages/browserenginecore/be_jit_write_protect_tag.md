> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore/be_jit_write_protect_tag](https://developer.apple.com/documentation/browserenginecore/be_jit_write_protect_tag)

# BE_JIT_WRITE_PROTECT_TAG (Swift)

**Framework:** BrowserEngineCore  
**Kind:** Global Variable  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · visionOS

A discriminator value the system uses to generate pointer authentication codes for just-in-time compilation.

## Declaration

```swift
var BE_JIT_WRITE_PROTECT_TAG: Int { get }
```

# BE_JIT_WRITE_PROTECT_TAG (Objective-C)

**Framework:** BrowserEngineCore  
**Kind:** Macro  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · macOS · visionOS

A discriminator value the system uses to generate pointer authentication codes for just-in-time compilation.

## Declaration

```objectivec
#define BE_JIT_WRITE_PROTECT_TAG
```

## See Also

### JIT compilation

- [be_memory_inline_jit_restrict_with_witness_supported](be_memory_inline_jit_restrict_with_witness_supported.md): Reports whether write protection for just-in-time (JIT) compilation is available.
- [be_memory_inline_jit_restrict_rwx_to_rw_with_witness](be_memory_inline_jit_restrict_rwx_to_rw_with_witness.md): Makes a region of memory writable for use in just-in-time (JIT) compilation.
- [be_memory_inline_jit_restrict_rwx_to_rx_with_witness](be_memory_inline_jit_restrict_rwx_to_rx_with_witness.md): Makes a region of memory executable for use in just-in-time (JIT) compilation.
