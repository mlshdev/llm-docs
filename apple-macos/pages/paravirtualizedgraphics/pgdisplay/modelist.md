> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplay/modelist](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplay/modelist)

# modeList (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The list of display modes that the virtual display supports.

## Declaration

```swift
var modeList: [PGDisplayMode] { get set }
```

<a id="Discussion"></a>

## Discussion

The maximum number of display modes is `128`. Setting this property updates the virtual graphics device’s supported mode list, and potentially forces it to change its current mode. The first time you set this property, the device simulates hot-plugging the display to the graphics device.

# modeList (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The list of display modes that the virtual display supports.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nonnull) NSArray<PGDisplayMode *> * modeList;
```

<a id="Discussion"></a>

## Discussion

The maximum number of display modes is `128`. Setting this property updates the virtual graphics device’s supported mode list, and potentially forces it to change its current mode. The first time you set this property, the device simulates hot-plugging the display to the graphics device.
