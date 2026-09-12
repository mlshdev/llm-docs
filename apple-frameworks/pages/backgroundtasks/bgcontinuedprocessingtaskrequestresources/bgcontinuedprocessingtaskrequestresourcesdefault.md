> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgcontinuedprocessingtaskrequestresources/bgcontinuedprocessingtaskrequestresourcesdefault](https://developer.apple.com/documentation/backgroundtasks/bgcontinuedprocessingtaskrequestresources/bgcontinuedprocessingtaskrequestresourcesdefault)

# BGContinuedProcessingTaskRequestResourcesDefault

**Interface language:** Objective-C

**Framework:** Background Tasks  
**Kind:** Enumeration Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+

An option for a task with no additional required system resources.

## Declaration

```objectivec
BGContinuedProcessingTaskRequestResourcesDefault
```

<a id="discussion"></a>

## Discussion

Unless informed otherwise, the scheduler assumes the default resources, allowing background CPU and network access.

## See Also

### Identiying a resource

- [BGContinuedProcessingTaskRequestResourcesGPU](../bgcontinuedprocessingtaskrequest/resources/gpu.md): An option that indicates a long-running task requires the GPU.
