> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaymode/init(sizeinpixels:refreshrateinhz:)](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaymode/init(sizeinpixels:refreshrateinhz:))

# init(sizeInPixels:refreshRateInHz:) (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Initializer  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Creates a new display mode.

## Declaration

```swift
init?(sizeInPixels: PGDisplayCoord_t, refreshRateInHz: Double)
```

## Parameters

- `sizeInPixels`: The display mode’s dimensions in pixels.
- `refreshRateInHz`: The mode’s refresh rate.

# initWithSizeInPixels:refreshRateInHz: (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

Creates a new display mode.

## Declaration

```objectivec
- (PGDisplayMode *) initWithSizeInPixels:(PGDisplayCoord_t) sizeInPixels refreshRateInHz:(double) refreshRateInHz;
```

## Parameters

- `sizeInPixels`: The display mode’s dimensions in pixels.
- `refreshRateInHz`: The mode’s refresh rate.
