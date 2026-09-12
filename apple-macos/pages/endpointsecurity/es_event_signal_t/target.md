> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_signal_t/target](https://developer.apple.com/documentation/endpointsecurity/es_event_signal_t/target)

# target (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process that the signal targets.

## Declaration

```swift
var target: UnsafeMutablePointer<es_process_t>
```

## See Also

### Inspecting Event Properties

- [sig](sig.md): The signal number sent to the target process.
- [reserved](reserved.md): An unused field reserved for future use.

# target (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The process that the signal targets.

## Declaration

```objectivec
es_process_t * target;
```

## See Also

### Inspecting Event Properties

- [sig](sig.md): The signal number sent to the target process.
- [reserved](reserved.md): An unused field reserved for future use.
