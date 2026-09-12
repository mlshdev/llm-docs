> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_file_provider_materialize_t/target](https://developer.apple.com/documentation/endpointsecurity/es_event_file_provider_materialize_t/target)

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The target fle.

## Declaration

```swift
var target: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [instigator](instigator.md): The process that instigated the event.
- [instigator_token](instigator_token.md)
- [source](source.md): The source file.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The target fle.

## Declaration

```objectivec
es_file_t * target;
```

## See Also

### Inspecting Event Properties

- [instigator](instigator.md): The process that instigated the event.
- [instigator_token](instigator_token.md)
- [source](source.md): The source file.
- [reserved](reserved.md): An unused field reserved for future use.
