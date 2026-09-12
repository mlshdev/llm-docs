> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/lowlevelmeshresource/layout/steprate](https://developer.apple.com/documentation/realitykit/lowlevelmeshresource/layout/steprate)

# stepRate

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The number of instances that share the same per-instance vertex data.

## Declaration

```swift
var stepRate: Int { get set }
```

<a id="discussion"></a>

## Discussion

Used together with `stepFunction`. When `stepFunction` is `.perInstance`, the vertex shader advances to the next entry in this layout once per `stepRate` instances. Defaults to `1`.

Corresponds to `MTLVertexBufferLayoutDescriptor.stepRate`.

## See Also

### Configuring vertex stepping

- [stepFunction](stepfunction.md): Determines how the vertex shader steps through the data in this layout.
