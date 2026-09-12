> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_thread_state_t/state](https://developer.apple.com/documentation/endpointsecurity/es_thread_state_t/state)

# state (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The machine-specific thread state.

## Declaration

```swift
var state: es_token_t
```

<a id="Discussion"></a>

## Discussion

This equivalent to [thread_state_t](../../kernel/thread_state_t.md) in Mach APIs.

> **Note**

>  The [size](../es_token_t/size.md) subfield of the [state](state.md) field is in bytes, not [natural_t](../../kernel/natural_t.md) units.

## See Also

### Inspecting Thread State

- [flavor](flavor.md): An indication of the representation of the machine-specific thread state.
- [es_token_t](../es_token_t.md): An arbitrary buffer of data with its size.

# state (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The machine-specific thread state.

## Declaration

```objectivec
es_token_t state;
```

<a id="Discussion"></a>

## Discussion

This equivalent to [thread_state_t](../../kernel/thread_state_t.md) in Mach APIs.

> **Note**

>  The [size](../es_token_t/size.md) subfield of the [state](state.md) field is in bytes, not [natural_t](../../kernel/natural_t.md) units.

## See Also

### Inspecting Thread State

- [flavor](flavor.md): An indication of the representation of the machine-specific thread state.
- [es_token_t](../es_token_t.md): An arbitrary buffer of data with its size.
