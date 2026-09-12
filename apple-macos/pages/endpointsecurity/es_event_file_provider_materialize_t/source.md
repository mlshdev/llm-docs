> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_file_provider_materialize_t/source](https://developer.apple.com/documentation/endpointsecurity/es_event_file_provider_materialize_t/source)

# source (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file.

## Declaration

```swift
var source: UnsafeMutablePointer<es_file_t>
```

## See Also

### Inspecting Event Properties

- [instigator](instigator.md): The process that instigated the event.
- [instigator_token](instigator_token.md)
- [target](target.md): The target fle.
- [reserved](reserved.md): An unused field reserved for future use.

# source (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The source file.

## Declaration

```objectivec
es_file_t * source;
```

## See Also

### Inspecting Event Properties

- [instigator](instigator.md): The process that instigated the event.
- [instigator_token](instigator_token.md)
- [target](target.md): The target fle.
- [reserved](reserved.md): An unused field reserved for future use.
