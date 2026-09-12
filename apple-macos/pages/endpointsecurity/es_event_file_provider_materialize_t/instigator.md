> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_file_provider_materialize_t/instigator](https://developer.apple.com/documentation/endpointsecurity/es_event_file_provider_materialize_t/instigator)

# instigator (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process that instigated the event.

## Declaration

```swift
var instigator: UnsafeMutablePointer<es_process_t>?
```

## See Also

### Inspecting Event Properties

- [instigator_token](instigator_token.md)
- [source](source.md): The source file.
- [target](target.md): The target fle.
- [reserved](reserved.md): An unused field reserved for future use.

# instigator (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process that instigated the event.

## Declaration

```objectivec
es_process_t * instigator;
```

## See Also

### Inspecting Event Properties

- [instigator_token](instigator_token.md)
- [source](source.md): The source file.
- [target](target.md): The target fle.
- [reserved](reserved.md): An unused field reserved for future use.
