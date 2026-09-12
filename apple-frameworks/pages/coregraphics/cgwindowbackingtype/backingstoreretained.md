> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgwindowbackingtype/backingstoreretained](https://developer.apple.com/documentation/coregraphics/cgwindowbackingtype/backingstoreretained)

# CGWindowBackingType.backingStoreRetained (Swift)

**Framework:** Core Graphics  
**Kind:** Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```swift
case backingStoreRetained
```

<a id="Discussion"></a>

## Discussion

The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.

You should typically not use this mode. It combines the limitations of [CGWindowBackingType.backingStoreNonretained](backingstorenonretained.md) with the memory use of [CGWindowBackingType.backingStoreBuffered](backingstorebuffered.md). The original NeXTSTEP implementation was an interesting compromise that worked well with fast memory mapped framebuffers on the CPU bus—something that hasn’t been in general use since around 1994. These tend to have performance problems.

In macOS 10.5 and later, requests for retained windows will result in the window system creating a buffered window, as that better matches actual use

## See Also

### Constants

- [CGWindowBackingType.backingStoreBuffered](backingstorebuffered.md)
- [CGWindowBackingType.backingStoreNonretained](backingstorenonretained.md)

# kCGBackingStoreRetained (Objective-C)

**Framework:** Core Graphics  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst · macOS

## Declaration

```objectivec
kCGBackingStoreRetained
```

<a id="Discussion"></a>

## Discussion

The window uses a buffer, but draws directly to the screen where possible and to the buffer for obscured portions.

You should typically not use this mode. It combines the limitations of [kCGBackingStoreNonretained](backingstorenonretained.md) with the memory use of [kCGBackingStoreBuffered](backingstorebuffered.md). The original NeXTSTEP implementation was an interesting compromise that worked well with fast memory mapped framebuffers on the CPU bus—something that hasn’t been in general use since around 1994. These tend to have performance problems.

In macOS 10.5 and later, requests for retained windows will result in the window system creating a buffered window, as that better matches actual use

## See Also

### Constants

- [kCGBackingStoreBuffered](backingstorebuffered.md)
- [kCGBackingStoreNonretained](backingstorenonretained.md)
