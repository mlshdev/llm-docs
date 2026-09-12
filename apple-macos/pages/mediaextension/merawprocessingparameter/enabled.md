> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/merawprocessingparameter/enabled](https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/enabled)

# enabled (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A Boolean value that indicates whether the extension enables the parameter.

## Declaration

```swift
var enabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This parameter can only be modified by the extension. From the application-facing interface, `VTRAWProcessingSession`, this is a read-only value which indicates whether the parameter should be grayed out and disabled in any UI being generated.

## See Also

### Inspecting a processing parameter

- [key](key.md): A unique key string identifying the parameter.
- [longDescription](longdescription.md): A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- [name](name.md): A localized human-readable name for the parameter, suitable for displaying in application UI.

# enabled (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A Boolean value that indicates whether the extension enables the parameter.

## Declaration

```objectivec
@property (readwrite) BOOL enabled;
```

<a id="Discussion"></a>

## Discussion

This parameter can only be modified by the extension. From the application-facing interface, `VTRAWProcessingSession`, this is a read-only value which indicates whether the parameter should be grayed out and disabled in any UI being generated.

## See Also

### Inspecting a processing parameter

- [key](key.md): A unique key string identifying the parameter.
- [longDescription](longdescription.md): A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- [name](name.md): A localized human-readable name for the parameter, suitable for displaying in application UI.
