> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_string_token_t/length](https://developer.apple.com/documentation/endpointsecurity/es_string_token_t/length)

# length (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The size of the data buffer, in bytes.

## Declaration

```swift
var length: Int
```

<a id="Discussion"></a>

## Discussion

This value doesn’t include the null terminator.

## See Also

### Inspecting the Token

- [data](data.md): The string data.

# length (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The size of the data buffer, in bytes.

## Declaration

```objectivec
size_t length;
```

<a id="Discussion"></a>

## Discussion

This value doesn’t include the null terminator.

## See Also

### Inspecting the Token

- [data](data.md): The string data.
