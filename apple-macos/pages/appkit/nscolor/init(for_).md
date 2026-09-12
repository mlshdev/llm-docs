> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscolor/init(for:)](https://developer.apple.com/documentation/appkit/nscolor/init(for:))

# init(for:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Returns the color object specified by the given control tint.

> NSControlTint does not describe the full range of available control accent colors. Use +\[NSColor controlAccentColor\] instead.

## Declaration

```swift
init(for controlTint: NSControlTint)
```

## Parameters

- `controlTint`: The control tint for which to return a color object. This is one of the tint settings.

<a id="return-value"></a>

## Return Value

The `NSColor` object.

## See Also

### Related Documentation

- [currentControlTint](currentcontroltint.md): The current system control tint color.

### Creating a system tint color

- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.

# colorForControlTint: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 11.0)

Returns the color object specified by the given control tint.

> NSControlTint does not describe the full range of available control accent colors. Use +\[NSColor controlAccentColor\] instead.

## Declaration

```objectivec
+ (NSColor *) colorForControlTint:(NSControlTint) controlTint;
```

## Parameters

- `controlTint`: The control tint for which to return a color object. This is one of the tint settings.

<a id="return-value"></a>

## Return Value

The `NSColor` object.

## See Also

### Related Documentation

- [currentControlTint](currentcontroltint.md): The current system control tint color.

### Creating a system tint color

- [NSControlTint](../nscontroltint.md): Constants for specifying a cell’s tint color.
