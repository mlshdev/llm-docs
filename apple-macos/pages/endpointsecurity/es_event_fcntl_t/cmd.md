> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_fcntl_t/cmd](https://developer.apple.com/documentation/endpointsecurity/es_event_fcntl_t/cmd)

# cmd (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file descriptor modification command.

## Declaration

```swift
var cmd: Int32
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the `cmd` argument given to `fcntl(2)`.

## See Also

### Inspecting Event Properties

- [target](target.md): The target file to modify.
- [reserved](reserved.md): An unused field reserved for future use.

# cmd (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file descriptor modification command.

## Declaration

```objectivec
int32_t cmd;
```

<a id="Discussion"></a>

## Discussion

This value corresponds to the `cmd` argument given to `fcntl(2)`.

## See Also

### Inspecting Event Properties

- [target](target.md): The target file to modify.
- [reserved](reserved.md): An unused field reserved for future use.
