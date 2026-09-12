> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/photogrammetrysession/request/detail/raw](https://developer.apple.com/documentation/realitykit/photogrammetrysession/request/detail/raw)

# PhotogrammetrySession.Request.Detail.raw

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** Mac Catalyst 15.0+ · macOS 12.0+

The raw-created object at the highest possible resolution.

## Declaration

```swift
case raw
```

<a id="discussion"></a>

## Discussion

Use this option only for creating high-end production assets.. This will generate unprocessed assets that allow professional artists using physically-based rendering ray-tracers to achieve maximum quality results. The output of a raw request is unsuitable for real-time use.

## See Also

### Specifying a level of detail

- [PhotogrammetrySession.Request.Detail.preview](preview.md): A fast, low-quality object for previewing the final result.
- [PhotogrammetrySession.Request.Detail.reduced](reduced.md): A mobile-quality object with low resource requirements.
- [PhotogrammetrySession.Request.Detail.medium](medium.md): A medium-quality object with moderate resource requirements.
- [PhotogrammetrySession.Request.Detail.full](full.md): A high-quality object with significant resource requirements.
