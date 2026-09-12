> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayerrendermode/oldestlast](https://developer.apple.com/documentation/quartzcore/caemitterlayerrendermode/oldestlast)

# oldestLast (Swift)

**Framework:** Core Animation  
**Kind:** Type Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Particles are rendered oldest last. This mode uses source-over compositing.

## Declaration

```swift
static let oldestLast: CAEmitterLayerRenderMode
```

## See Also

### Constants

- [unordered](unordered.md): Particles are rendered unordered. This mode uses source-over compositing.
- [oldestFirst](oldestfirst.md): Particles are rendered oldest first. This mode uses source-over compositing.
- [backToFront](backtofront.md): Particles are rendered from back to front, sorted by z-position. This mode uses source-over compositing.
- [additive](additive.md): The particles are rendered using source-additive compositing.

# kCAEmitterLayerOldestLast (Objective-C)

**Framework:** Core Animation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Particles are rendered oldest last. This mode uses source-over compositing.

## Declaration

```objectivec
extern CAEmitterLayerRenderMode const kCAEmitterLayerOldestLast;
```

## See Also

### Constants

- [kCAEmitterLayerUnordered](unordered.md): Particles are rendered unordered. This mode uses source-over compositing.
- [kCAEmitterLayerOldestFirst](oldestfirst.md): Particles are rendered oldest first. This mode uses source-over compositing.
- [kCAEmitterLayerBackToFront](backtofront.md): Particles are rendered from back to front, sorted by z-position. This mode uses source-over compositing.
- [kCAEmitterLayerAdditive](additive.md): The particles are rendered using source-additive compositing.
