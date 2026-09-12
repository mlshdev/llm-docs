> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginecore](https://developer.apple.com/documentation/browserenginecore)

# BrowserEngineCore (Swift)

**Framework:** BrowserEngineCore  
**Kind:** Framework  
**Availability:** iOS 17.4+ · iPadOS 18.0+

Integrate an alternative browser engine into your web browser app.

<a id="Overview"></a>

## Overview

Use the `BrowserEngineCore` framework to support low-level functions for your alternative browser engine that renders its UI using [BrowserEngineKit](browserenginekit.md). For more information on developing web browser apps, see [Designing your browser architecture](browserenginekit/designing-your-browser-architecture.md).

## Topics

### Kernel events

- [be_kevent(\_:\_:\_:\_:\_:\_:)](browserenginecore/be_kevent%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 32-bit data types.
- [be_kevent64(\_:\_:\_:\_:\_:\_:)](browserenginecore/be_kevent64%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 64-bit data types.
- [BE_KEVENT_NO_FLAGS](browserenginecore/be_kevent_no_flags.md): Indicates that no flags are set in a request to receive kernel events.
- [BE_KEVENT_RETURN_IMMEDIATELY](browserenginecore/be_kevent_return_immediately.md): Indicates that a request to receive kernel events needs to return without waiting for events.

### JIT compilation

- [BE_JIT_WRITE_PROTECT_TAG](browserenginecore/be_jit_write_protect_tag.md): A discriminator value the system uses to generate pointer authentication codes for just-in-time compilation.

### Audio preferences

- [BEAudioSession](browserenginecore/beaudiosession-7bb2q.md): An object that wraps an AV audio session to scope the browser app’s audio session control.
- [BEAudioSession](browserenginecore/beaudiosession-6b7ig.md): An object that wraps an AV audio session to scope the browser app’s audio session control.

# BrowserEngineCore (Objective-C)

**Framework:** BrowserEngineCore  
**Kind:** Framework  
**Availability:** iOS 17.4+ · iPadOS 18.0+

Integrate an alternative browser engine into your web browser app.

<a id="Overview"></a>

## Overview

Use the `BrowserEngineCore` framework to support low-level functions for your alternative browser engine that renders its UI using [BrowserEngineKit](browserenginekit.md). For more information on developing web browser apps, see [Designing your browser architecture](browserenginekit/designing-your-browser-architecture.md).

## Topics

### Kernel events

- [be_kevent](browserenginecore/be_kevent%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 32-bit data types.
- [be_kevent64](browserenginecore/be_kevent64%28____________%29.md): Registers for kernel events on the specified queue, and returns events that are pending on the queue, using 64-bit data types.
- [BE_KEVENT_NO_FLAGS](browserenginecore/be_kevent_no_flags.md): Indicates that no flags are set in a request to receive kernel events.
- [BE_KEVENT_RETURN_IMMEDIATELY](browserenginecore/be_kevent_return_immediately.md): Indicates that a request to receive kernel events needs to return without waiting for events.

### JIT compilation

- [be_memory_inline_jit_restrict_with_witness_supported](browserenginecore/be_memory_inline_jit_restrict_with_witness_supported.md): Reports whether write protection for just-in-time (JIT) compilation is available.
- [be_memory_inline_jit_restrict_rwx_to_rw_with_witness](browserenginecore/be_memory_inline_jit_restrict_rwx_to_rw_with_witness.md): Makes a region of memory writable for use in just-in-time (JIT) compilation.
- [be_memory_inline_jit_restrict_rwx_to_rx_with_witness](browserenginecore/be_memory_inline_jit_restrict_rwx_to_rx_with_witness.md): Makes a region of memory executable for use in just-in-time (JIT) compilation.
- [BE_JIT_WRITE_PROTECT_TAG](browserenginecore/be_jit_write_protect_tag.md): A discriminator value the system uses to generate pointer authentication codes for just-in-time compilation.

### Audio preferences

- [BEAudioSession](browserenginecore/beaudiosession-6b7ig.md): An object that wraps an AV audio session to scope the browser app’s audio session control.

### Memory-protection implementation

- [be_memory_inline_jit_restrict_rwx_to_rw_with_witness_impl](browserenginecore/be_memory_inline_jit_restrict_rwx_to_rw_with_witness_impl.md): Makes a region of memory writable for use in just-in-time (JIT) compilation.
- [be_memory_inline_jit_restrict_rwx_to_rx_with_witness_impl](browserenginecore/be_memory_inline_jit_restrict_rwx_to_rx_with_witness_impl.md): Makes a region of memory executable for use in just-in-time (JIT) compilation.

### API availability

- [BROWSERENGINE_ACCESSIBILITY_AVAILABILITY](browserenginecore/browserengine_accessibility_availability.md): A macro the framework uses to indicate which SDK versions provide the accessibility APIs.
- [BROWSERENGINE_ACCESSIBILITY_MARKER_AVAILABILITY](browserenginecore/browserengine_accessibility_marker_availability.md): A macro the framework uses to indicate which SDK versions provide the accessibility marker APIs.
- [BROWSERENGINE_ACCESSIBILITY_REMOTE_AVAILABILITY](browserenginecore/browserengine_accessibility_remote_availability.md): A macro that indicates the SDK versions that provide the APIs for accessibility remote elements.
- [BROWSERENGINE_TEXTINPUT_AVAILABILITY](browserenginecore/browserengine_textinput_availability.md): A macro the framework uses to indicate which SDK versions provide the text input APIs.
- [BROWSERENGINE_EXPORT](browserenginecore/browserengine_export.md): A macro the framework uses to make API available for use in your code.
- [BROWSERENGINE_EXTERN](browserenginecore/browserengine_extern.md): A macro the framework uses to indicate that a symbol is defined in a different file.
- [BROWSERENGINE_FINAL](browserenginecore/browserengine_final.md): A macro the framework uses to indicate that an Objective-C class isn’t available for subclassing.
- [BROWSERENGINE_IMPORT](browserenginecore/browserengine_import.md): A macro the framework uses to import APIs from other frameworks.

### Macros

- [BROWSERENGINE_ACCESSIBILITY_AVAILABILITY_27](browserenginecore/browserengine_accessibility_availability_27.md)
