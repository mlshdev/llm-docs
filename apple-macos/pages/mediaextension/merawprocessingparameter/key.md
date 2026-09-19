> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaextension/merawprocessingparameter/key

# key (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A unique key string identifying the parameter.

## Declaration

```swift
var key: String { get }
```

## See Also

### Inspecting a processing parameter

- [enabled](enabled.md): A Boolean value that indicates whether the extension enables the parameter.
- [longDescription](longdescription.md): A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- [name](name.md): A localized human-readable name for the parameter, suitable for displaying in application UI.

# key (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A unique key string identifying the parameter.

## Declaration

```objectivec
@property (readonly) NSString * key;
```

## See Also

### Inspecting a processing parameter

- [enabled](enabled.md): A Boolean value that indicates whether the extension enables the parameter.
- [longDescription](longdescription.md): A localized description of the parameter, suitable for displaying in a tool tip or similar explanatory UI.
- [name](name.md): A localized human-readable name for the parameter, suitable for displaying in application UI.
