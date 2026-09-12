> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstintconfiguration/init(preferredcolor:)](https://developer.apple.com/documentation/appkit/nstintconfiguration/init(preferredcolor:))

# init(preferredColor:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 11.0+

Creates a new tint configuration for the system to use when the app’s preferred accent color is in use.

## Declaration

```swift
convenience init(preferredColor color: NSColor)
```

## Parameters

- `color`: The color used when the system accent color is `Multicolor`.

<a id="Discussion"></a>

## Discussion

Use this tint configuration for custom colors designed to match app-specific accent colors, but doesn’t look appropriate matched with a user-selected color. The tint configuation only uses the preferred color when the system accent color is `Multicolor`. If the system accent color is any other color, the tint configuration defers to the accent color.

## See Also

### Initializing a Tint Configuration

- [init(fixedColor:)](init%28fixedcolor_%29.md): Creates a new tint configuration using a specific color value.

# tintConfigurationWithPreferredColor: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 11.0+

Creates a new tint configuration for the system to use when the app’s preferred accent color is in use.

## Declaration

```objectivec
+ (instancetype) tintConfigurationWithPreferredColor:(NSColor *) color;
```

## Parameters

- `color`: The color used when the system accent color is `Multicolor`.

<a id="Discussion"></a>

## Discussion

Use this tint configuration for custom colors designed to match app-specific accent colors, but doesn’t look appropriate matched with a user-selected color. The tint configuation only uses the preferred color when the system accent color is `Multicolor`. If the system accent color is any other color, the tint configuration defers to the accent color.

## See Also

### Initializing a Tint Configuration

- [tintConfigurationWithFixedColor:](init%28fixedcolor_%29.md): Creates a new tint configuration using a specific color value.
