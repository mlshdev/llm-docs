> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/perclothvertexdata/withelements(_:)

# withElements(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

Provides read-only access to the per-vertex data within a callback.

## Declaration

```swift
func withElements<Result>(_ callback: (Span<ElementType>) -> Result) -> Result
```

## Parameters

- `callback`: A closure that receives a span over the per-vertex data.

<a id="return-value"></a>

## Return Value

The value returned by `callback`.

<a id="discussion"></a>

## Discussion

The provided span is only valid for the lifetime of the callback.

## See Also

### Accessing vertex data

- [vertexCount](vertexcount.md): The number of vertices this structure holds data for.
- [withMutableElements(\_:)](withmutableelements%28__%29.md): Provides mutable access to the per-vertex data within a callback.
