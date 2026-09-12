> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstintconfiguration/init(fixedcolor:)](https://developer.apple.com/documentation/appkit/nstintconfiguration/init(fixedcolor:))

# init(fixedColor:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a new tint configuration using a specific color value.

## Declaration

```swift
convenience init(fixedColor color: NSColor)
```

## Parameters

- `color`: The color used regardless of the system accent color.

## See Also

### Initializing a Tint Configuration

- [init(preferredColor:)](init%28preferredcolor_%29.md): Creates a new tint configuration for the system to use when the app’s preferred accent color is in use.

# tintConfigurationWithFixedColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates a new tint configuration using a specific color value.

## Declaration

```objectivec
+ (instancetype) tintConfigurationWithFixedColor:(NSColor *) color;
```

## Parameters

- `color`: The color used regardless of the system accent color.

## See Also

### Initializing a Tint Configuration

- [tintConfigurationWithPreferredColor:](init%28preferredcolor_%29.md): Creates a new tint configuration for the system to use when the app’s preferred accent color is in use.
