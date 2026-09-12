> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkstroke-swift.struct/init(ink:path:transform:mask:randomseed:id:rendergroupid:renderstate:)-1qvj7](https://developer.apple.com/documentation/pencilkit/pkstroke-swift.struct/init(ink:path:transform:mask:randomseed:id:rendergroupid:renderstate:)-1qvj7)

# init(ink:path:transform:mask:randomSeed:id:renderGroupID:renderState:)

**Framework:** PencilKit  
**Kind:** Initializer  
**Availability:** macOS 27.0+

## Declaration

```swift
init(ink: PKInk, path: PKStrokePath, transform: CGAffineTransform = .identity, mask: NSBezierPath? = nil, randomSeed: UInt32 = UInt32.random(in: 0...UInt32.max), id: UUID = UUID(), renderGroupID: UUID? = nil, renderState: PKStroke.RenderState? = nil)
```
