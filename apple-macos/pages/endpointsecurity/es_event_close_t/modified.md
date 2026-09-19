> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/endpointsecurity/es_event_close_t/modified

# modified (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A Boolean value that indicates whether the file has modifications.

## Declaration

```swift
var modified: Bool
```

<a id="Discussion"></a>

## Discussion

This value corresponds to `KAUTH_FILEOP_CLOSE_MODIFIED`.

## See Also

### Inspecting Event Properties

- [target](target.md): The file to close.

# modified (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

A Boolean value that indicates whether the file has modifications.

## Declaration

```objectivec
bool modified;
```

<a id="Discussion"></a>

## Discussion

This value corresponds to `KAUTH_FILEOP_CLOSE_MODIFIED`.

## See Also

### Inspecting Event Properties

- [target](target.md): The file to close.
