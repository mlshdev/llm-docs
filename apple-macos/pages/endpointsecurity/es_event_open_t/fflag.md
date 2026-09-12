> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/endpointsecurity/es_event_open_t/fflag](https://developer.apple.com/documentation/endpointsecurity/es_event_open_t/fflag)

# fflag (Swift)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file-opening mask as applied by the kernel.

## Declaration

```swift
var fflag: Int32
```

<a id="Discussion"></a>

## Discussion

This mask differs from the `oflag` values used in `open(2)`. When responding to this event, use `FFLAG` values such as `FREAD` and `FWRITE` instead, rather than `O_RDONLY`, `O_RDWR` and the like.

## See Also

### Inspecting Event Properties

- [file](file.md): The file to open.
- [reserved](reserved.md): An unused field reserved for future use.

# fflag (Objective-C)

**Framework:** Endpoint Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst · macOS

The file-opening mask as applied by the kernel.

## Declaration

```objectivec
int32_t fflag;
```

<a id="Discussion"></a>

## Discussion

This mask differs from the `oflag` values used in `open(2)`. When responding to this event, use `FFLAG` values such as `FREAD` and `FWRITE` instead, rather than `O_RDONLY`, `O_RDWR` and the like.

## See Also

### Inspecting Event Properties

- [file](file.md): The file to open.
- [reserved](reserved.md): An unused field reserved for future use.
