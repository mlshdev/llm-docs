> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/backgroundstyle](https://developer.apple.com/documentation/appkit/nsview/backgroundstyle)

# NSView.BackgroundStyle (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Background styles to apply to a view’s cell.

## Declaration

```swift
enum BackgroundStyle
```

<a id="overview"></a>

## Overview

Apply these styles to the [backgroundStyle](../nscell/backgroundstyle.md) or [interiorBackgroundStyle](../nscell/interiorbackgroundstyle.md) properties of an [NSCell](../nscell.md) object.

## Topics

### Getting the Background Styles

- [NSView.BackgroundStyle.normal](backgroundstyle/normal.md): A style that reflects the predominant color scheme of the view’s appearance.
- [NSView.BackgroundStyle.emphasized](backgroundstyle/emphasized.md): A style that adds emphasis to the background using an alternate color or visual effect.
- [NSView.BackgroundStyle.raised](backgroundstyle/raised.md): A style that makes the background appear higher than the content drawn on it.
- [NSView.BackgroundStyle.lowered](backgroundstyle/lowered.md): A style that makes the background appear lower than the content drawn on it.

### Deprecated

- [light](backgroundstyle/light.md): Deprecated. The background is a light color.
- [dark](backgroundstyle/dark.md): Deprecated. The background is a dark color.

### Initializers

- [init(rawValue:)](backgroundstyle/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Display Attributes

- [isBezeled](../nscell/isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [isBordered](../nscell/isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [isOpaque](../nscell/isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](../nscell/controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](../nscell/backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](../nscell/interiorbackgroundstyle.md): The cell’s interior background style.

# NSBackgroundStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.5+

Background styles to apply to a view’s cell.

## Declaration

```objectivec
enum NSBackgroundStyle : NSInteger;
```

<a id="overview"></a>

## Overview

Apply these styles to the [backgroundStyle](../nscell/backgroundstyle.md) or [interiorBackgroundStyle](../nscell/interiorbackgroundstyle.md) properties of an [NSCell](../nscell.md) object.

## Topics

### Getting the Background Styles

- [NSBackgroundStyleNormal](backgroundstyle/normal.md): A style that reflects the predominant color scheme of the view’s appearance.
- [NSBackgroundStyleEmphasized](backgroundstyle/emphasized.md): A style that adds emphasis to the background using an alternate color or visual effect.
- [NSBackgroundStyleRaised](backgroundstyle/raised.md): A style that makes the background appear higher than the content drawn on it.
- [NSBackgroundStyleLowered](backgroundstyle/lowered.md): A style that makes the background appear lower than the content drawn on it.

### Deprecated

- [NSBackgroundStyleLight](backgroundstyle/light.md): Deprecated. The background is a light color.
- [NSBackgroundStyleDark](backgroundstyle/dark.md): Deprecated. The background is a dark color.

## See Also

### Managing Display Attributes

- [bezeled](../nscell/isbezeled.md): A Boolean value indicating whether the cell has a bezeled border.
- [bordered](../nscell/isbordered.md): A Boolean value indicating whether the cell draws itself outlined with a plain border.
- [opaque](../nscell/isopaque.md): A Boolean value indicating whether the cell is completely opaque.
- [controlTint](../nscell/controltint.md): Deprecated. The cell’s control tint.
- [backgroundStyle](../nscell/backgroundstyle.md): The cell’s background style.
- [interiorBackgroundStyle](../nscell/interiorbackgroundstyle.md): The cell’s interior background style.
