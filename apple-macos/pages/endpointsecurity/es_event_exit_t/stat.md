> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_exit_t/stat](https://developer.apple.com/documentation/endpointsecurity/es_event_exit_t/stat)

# stat (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The exit status of the process.

## Declaration

```swift
var stat: Int32
```

<a id="Discussion"></a>

## Discussion

This field uses the same format as the `wait(2)` system call.

## See Also

### Inspecting Event Properties

- [reserved](reserved.md): An unused field reserved for future use.

# stat (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The exit status of the process.

## Declaration

```objectivec
int stat;
```

<a id="Discussion"></a>

## Discussion

This field uses the same format as the `wait(2)` system call.

## See Also

### Inspecting Event Properties

- [reserved](reserved.md): An unused field reserved for future use.
