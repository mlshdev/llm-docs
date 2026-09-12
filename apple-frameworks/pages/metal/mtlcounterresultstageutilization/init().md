> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcounterresultstageutilization/init()](https://developer.apple.com/documentation/metal/mtlcounterresultstageutilization/init())

# init()

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a default stage-utilization result.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Metal creates [MTLCounterResultStageUtilization](../mtlcounterresultstageutilization.md) instances for you when you resolve the counter set’s data (see [Converting a GPU’s counter data into a readable format](../converting-a-gpus-counter-data-into-a-readable-format.md)). There’s no reason for you to manually create one in your app.

## See Also

### Swift support

- [init(totalCycles:vertexCycles:tessellationCycles:postTessellationVertexCycles:fragmentCycles:renderTargetCycles:)](init%28totalcycles_vertexcycles_tessellationcycles_posttessellationvertexcycles_fragmentcycles_rendertargetcycles_%29.md): Creates a stage-utilization result from utilization values.
