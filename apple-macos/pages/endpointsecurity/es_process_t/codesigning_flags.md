> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_process_t/codesigning_flags](https://developer.apple.com/documentation/endpointsecurity/es_process_t/codesigning_flags)

# codesigning_flags (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The flags used to sign the process.

## Declaration

```swift
var codesigning_flags: UInt32
```

<a id="Discussion"></a>

## Discussion

See `kern/cs_blobs.h` in the macOS SDK inside of the Xcode app bundle for definitions of these flags.

## See Also

### Inspecting Code Signing Properties

- [cdhash](cdhash.md): The code directory hash value.
- [signing_id](signing_id.md): The identifier used to sign the process.
- [team_id](team_id.md): The team identifier used to sign the process.

# codesigning_flags (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The flags used to sign the process.

## Declaration

```objectivec
uint32_t codesigning_flags;
```

<a id="Discussion"></a>

## Discussion

See `kern/cs_blobs.h` in the macOS SDK inside of the Xcode app bundle for definitions of these flags.

## See Also

### Inspecting Code Signing Properties

- [cdhash](cdhash.md): The code directory hash value.
- [signing_id](signing_id.md): The identifier used to sign the process.
- [team_id](team_id.md): The team identifier used to sign the process.
