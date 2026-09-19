> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_string_token_t/length

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
