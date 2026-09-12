> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandencoder/barrierafterstages:beforequeuestages:visibilityoptions:](https://developer.apple.com/documentation/metal/mtl4commandencoder/barrierafterstages:beforequeuestages:visibilityoptions:)

# barrierAfterStages:beforeQueueStages:visibilityOptions:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a producer barrier on work committed to the same command queue.

## Declaration

```objectivec
- (void) barrierAfterStages:(MTLStages) afterStages beforeQueueStages:(MTLStages) beforeQueueStages visibilityOptions:(MTL4VisibilityOptions) visibilityOptions;
```

## Parameters

- `afterStages`: [MTLStages](../mtlstages.md) mask that represents the stages of work to wait for. This argument applies to work corresponding to these stages you encode in the current command encoder prior to this barrier command.
- `beforeQueueStages`: [MTLStages](../mtlstages.md) mask that represents the stages of work that need to wait. This argument applies to subsequent encoders and not to work in the current command encoder.
- `visibilityOptions`: [MTL4VisibilityOptions](../mtl4visibilityoptions.md) of the barrier, controlling cache flush behavior.

<a id="discussion"></a>

## Discussion

This method encodes a barrier that guarantees that any work you encode using *subsequent command encoders*, corresponding to `beforeQueueStages`, don’t begin until all commands you previously encode in the current encoder (and prior encoders), corresponding to `afterStages`, complete.

When calling this method, you can pass any [MTLStages](../mtlstages.md) to parameters `afterStages` and `beforeQueueStages`, even stages that don’t relate to the current or prior command encoders.
