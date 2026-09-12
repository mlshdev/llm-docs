> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/paravirtualizedgraphics/pgdisplaydescriptor/name](https://developer.apple.com/documentation/paravirtualizedgraphics/pgdisplaydescriptor/name)

# name (Swift)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The display’s name as seen in the guest operating environment.

## Declaration

```swift
var name: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `Apple Virtual`. The framework truncates the name to 13 characters.

The device propagates the display name into the guest environment, so the name may be visible in the guest operating system’s user interface.

## See Also

### Specifying the Display Properties

- [sizeInMillimeters](sizeinmillimeters.md): The size in millimeters of the virtual display.

# name (Objective-C)

**Framework:** Paravirtualized Graphics  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 11.0+

The display’s name as seen in the guest operating environment.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSString * name;
```

<a id="Discussion"></a>

## Discussion

The default value is `Apple Virtual`. The framework truncates the name to 13 characters.

The device propagates the display name into the guest environment, so the name may be visible in the guest operating system’s user interface.

## See Also

### Specifying the Display Properties

- [sizeInMillimeters](sizeinmillimeters.md): The size in millimeters of the virtual display.
