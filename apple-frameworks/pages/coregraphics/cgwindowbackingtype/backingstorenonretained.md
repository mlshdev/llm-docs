> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowbackingtype/backingstorenonretained](https://developer.apple.com/documentation/coregraphics/cgwindowbackingtype/backingstorenonretained)

# CGWindowBackingType.backingStoreNonretained (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
case backingStoreNonretained
```

<a id="Discussion"></a>

## Discussion

The window draws directly to the screen without using any buffer.

You should typically not use this mode. It exists primarily for use in the original Classic Blue Box. It does not support Quartz drawing, alpha blending, or opacity. Moreover, it does not support hardware acceleration, and interferes with system-wide display acceleration. If you use this mode, your application must manage visibility region clipping itself, and manage repainting on visibility changes.

## See Also

### Constants

- [CGWindowBackingType.backingStoreBuffered](backingstorebuffered.md)
- [CGWindowBackingType.backingStoreRetained](backingstoreretained.md)

# kCGBackingStoreNonretained (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGBackingStoreNonretained
```

<a id="Discussion"></a>

## Discussion

The window draws directly to the screen without using any buffer.

You should typically not use this mode. It exists primarily for use in the original Classic Blue Box. It does not support Quartz drawing, alpha blending, or opacity. Moreover, it does not support hardware acceleration, and interferes with system-wide display acceleration. If you use this mode, your application must manage visibility region clipping itself, and manage repainting on visibility changes.

## See Also

### Constants

- [kCGBackingStoreBuffered](backingstorebuffered.md)
- [kCGBackingStoreRetained](backingstoreretained.md)
