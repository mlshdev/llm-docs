> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaydescriptor/sizeinmillimeters](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor/sizeinmillimeters)

# sizeInMillimeters (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The size in millimeters of the virtual display.

## Declaration

```swift
var sizeInMillimeters: NSSize { get set }
```

<a id="Discussion"></a>

## Discussion

The device propagates the display size to the guest operating system. The app can scale the resulting screen data to a different size in its user interface.

## See Also

### Specifying the Display Properties

- [name](name.md): The display’s name as seen in the guest operating environment.

# sizeInMillimeters (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The size in millimeters of the virtual display.

## Declaration

```objectivec
@property (nonatomic, readwrite) NSSize sizeInMillimeters;
```

<a id="Discussion"></a>

## Discussion

The device propagates the display size to the guest operating system. The app can scale the resulting screen data to a different size in its user interface.

## See Also

### Specifying the Display Properties

- [name](name.md): The display’s name as seen in the guest operating environment.
