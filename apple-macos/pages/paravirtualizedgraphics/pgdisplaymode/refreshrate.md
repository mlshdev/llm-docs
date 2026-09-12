> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaymode/refreshrate](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaymode/refreshrate)

# refreshRate (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The mode’s refresh rate.

## Declaration

```swift
var refreshRate: Double { get }
```

<a id="Discussion"></a>

## Discussion

Consider supplying only modes that have a refresh rate equal to that of the host environment’s physical display.

## See Also

### Inspecting Mode Properties

- [sizeInPixels](sizeinpixels.md): The display mode’s dimensions in pixels.

# refreshRate (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The mode’s refresh rate.

## Declaration

```objectivec
@property (nonatomic, readonly) double refreshRate;
```

<a id="Discussion"></a>

## Discussion

Consider supplying only modes that have a refresh rate equal to that of the host environment’s physical display.

## See Also

### Inspecting Mode Properties

- [sizeInPixels](sizeinpixels.md): The display mode’s dimensions in pixels.
