> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_iokit_open_t/user_client_type](https://developer.apple.com/documentation/endpointsecurity/es_event_iokit_open_t/user_client_type)

# user_client_type (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the IOKit client.

## Declaration

```swift
var user_client_type: UInt32
```

<a id="Discussion"></a>

## Discussion

The value of this type and its semantics depend on the kernel extension the caller is connecting to.

## See Also

### Inspecting Event Properties

- [user_client_class](user_client_class.md): The name of the IOKit service client.
- [reserved](reserved.md): An unused field reserved for future use.

# user_client_type (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The type of the IOKit client.

## Declaration

```objectivec
uint32_t user_client_type;
```

<a id="Discussion"></a>

## Discussion

The value of this type and its semantics depend on the kernel extension the caller is connecting to.

## See Also

### Inspecting Event Properties

- [user_client_class](user_client_class.md): The name of the IOKit service client.
- [reserved](reserved.md): An unused field reserved for future use.
