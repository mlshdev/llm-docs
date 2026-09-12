> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cirendertask/waituntilcompleted()](https://developer.apple.com/documentation/coreimage/cirendertask/waituntilcompleted())

# waitUntilCompleted() (Swift)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Waits until the [CIRenderTask](../cirendertask.md) finishes and returns.

## Declaration

```swift
func waitUntilCompleted() throws -> CIRenderInfo
```

<a id="Discussion"></a>

## Discussion

Synchronously blocks execution until the [CIRenderTask](../cirendertask.md) either completes or fails (with error).  Calling this method after [startTask(toRender:to:)](../cicontext/starttask%28torender_to_%29.md) or [startTask(toRender:from:to:at:)](../cicontext/starttask%28torender_from_to_at_%29.md) makes the render task behave synchronously, as if the CPU and GPU were operating as a single unit.

# waitUntilCompletedAndReturnError: (Objective-C)

**Framework:** Core Image  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Waits until the [CIRenderTask](../cirendertask.md) finishes and returns.

## Declaration

```objectivec
- (CIRenderInfo *) waitUntilCompletedAndReturnError:(NSError **) error;
```

## Parameters

- `error`: Nil unless the render task failed

<a id="Discussion"></a>

## Discussion

Synchronously blocks execution until the [CIRenderTask](../cirendertask.md) either completes or fails (with error).  Calling this method after [startTaskToRender:toDestination:error:](../cicontext/starttask%28torender_to_%29.md) or [startTaskToRender:fromRect:toDestination:atPoint:error:](../cicontext/starttask%28torender_from_to_at_%29.md) makes the render task behave synchronously, as if the CPU and GPU were operating as a single unit.
