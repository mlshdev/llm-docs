> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nscolorwell/init(style:)

# init(style:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a color well that adopts the specified appearance style.

## Declaration

```swift
convenience init(style: NSColorWell.Style)
```

## Parameters

- `style`: The style to use to configure the color well control. For a list of possible values, see [NSColorWell.Style](style.md).

<a id="return-value"></a>

## Return Value

A color well configured with the specified style.

# colorWellWithStyle: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS 13.0+

Creates a color well that adopts the specified appearance style.

## Declaration

```objectivec
+ (instancetype) colorWellWithStyle:(NSColorWellStyle) style;
```

## Parameters

- `style`: The style to use to configure the color well control. For a list of possible values, see [NSColorWellStyle](style.md).

<a id="return-value"></a>

## Return Value

A color well configured with the specified style.
