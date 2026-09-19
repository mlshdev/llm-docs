> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsndarraydescriptor/init(data:shape:batchsize:)

# init(data:shape:batchSize:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS · watchOS 8.0+

## Declaration

```swift
init?<T>(data: UnsafeMutableBufferPointer<T>, shape: BNNS.Shape, batchSize: Int) where T : BNNSScalar
```
