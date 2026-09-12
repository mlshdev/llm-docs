> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowbackingtype/backingstorebuffered](https://developer.apple.com/documentation/coregraphics/cgwindowbackingtype/backingstorebuffered)

# CGWindowBackingType.backingStoreBuffered (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
case backingStoreBuffered
```

<a id="Discussion"></a>

## Discussion

The window draws into a display buffer and then flushes that buffer to the screen.

You should typically use this mode. It supports hardware acceleration, Quartz drawing, and takes advantage of the GPU when possible. It also supports alpha channel drawing, opacity controls, using the compositor.

## See Also

### Constants

- [CGWindowBackingType.backingStoreNonretained](backingstorenonretained.md)
- [CGWindowBackingType.backingStoreRetained](backingstoreretained.md)

# kCGBackingStoreBuffered (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGBackingStoreBuffered
```

<a id="Discussion"></a>

## Discussion

The window draws into a display buffer and then flushes that buffer to the screen.

You should typically use this mode. It supports hardware acceleration, Quartz drawing, and takes advantage of the GPU when possible. It also supports alpha channel drawing, opacity controls, using the compositor.

## See Also

### Constants

- [kCGBackingStoreNonretained](backingstorenonretained.md)
- [kCGBackingStoreRetained](backingstoreretained.md)
