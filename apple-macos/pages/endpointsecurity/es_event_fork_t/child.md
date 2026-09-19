> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_fork_t/child

# child (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The forked child process.

## Declaration

```swift
var child: UnsafeMutablePointer<es_process_t>
```

## See Also

### Inspecting Event Properties

- [reserved](reserved.md): An unused field reserved for future use.

# child (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The forked child process.

## Declaration

```objectivec
es_process_t * child;
```

## See Also

### Inspecting Event Properties

- [reserved](reserved.md): An unused field reserved for future use.
