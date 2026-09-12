> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstrokereference/init(ink:strokepath:transform:mask:randomseed:strokeid:rendergroupid:renderstate:)](https://developer.apple.com/documentation/pencilkit/pkstrokereference/init(ink:strokepath:transform:mask:randomseed:strokeid:rendergroupid:renderstate:))

# init(ink:strokePath:transform:mask:randomSeed:strokeID:renderGroupID:renderState:) (Swift)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
init(ink: PKInk, strokePath: PKStrokePath, transform: CGAffineTransform, mask: UIBezierPath?, randomSeed: UInt32, strokeID: UUID, renderGroupID: UUID?, renderState: PKStrokeRenderStateReference?)
```

```swift
init(ink: PKInk, strokePath: PKStrokePath, transform: CGAffineTransform, mask: NSBezierPath?, randomSeed: UInt32, strokeID: UUID, renderGroupID: UUID?, renderState: PKStrokeRenderStateReference?)
```

# initWithInk:strokePath:transform:mask:randomSeed:strokeID:renderGroupID:renderState: (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
- (instancetype) initWithInk:(PKInk *) ink strokePath:(PKStrokePath *) strokePath transform:(CGAffineTransform) transform mask:(UIBezierPath *) mask randomSeed:(uint32_t) randomSeed strokeID:(NSUUID *) strokeID renderGroupID:(NSUUID *) renderGroupID renderState:(PKStrokeRenderState *) renderState;
```

```objectivec
- (instancetype) initWithInk:(PKInk *) ink strokePath:(PKStrokePath *) strokePath transform:(CGAffineTransform) transform mask:(NSBezierPath *) mask randomSeed:(uint32_t) randomSeed strokeID:(NSUUID *) strokeID renderGroupID:(NSUUID *) renderGroupID renderState:(PKStrokeRenderState *) renderState;
```
