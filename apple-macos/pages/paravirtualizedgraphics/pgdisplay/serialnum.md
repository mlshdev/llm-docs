> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/serialnum

# serialNum (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The display’s serial number that you specified at creation time.

## Declaration

```swift
var serialNum: UInt32 { get }
```

## See Also

### Inspecting Display Properties

- [name](name.md): The display’s name that you specified at creation time.
- [port](port.md): The display’s accelerator port that you specified at creation time.
- [sizeInMillimeters](sizeinmillimeters.md): The display’s virtual dimensions, in millimeters, that you specified at creation time.

# serialNum (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The display’s serial number that you specified at creation time.

## Declaration

```objectivec
@property (nonatomic, readonly) uint32_t serialNum;
```

## See Also

### Inspecting Display Properties

- [name](name.md): The display’s name that you specified at creation time.
- [port](port.md): The display’s accelerator port that you specified at creation time.
- [sizeInMillimeters](sizeinmillimeters.md): The display’s virtual dimensions, in millimeters, that you specified at creation time.
