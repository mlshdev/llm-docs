> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawable/present(afterminimumduration:)](https://developer.apple.com/documentation/metal/mtldrawable/present(afterminimumduration:))

# present(afterMinimumDuration:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

Presents the drawable onscreen as soon as possible after a previous drawable is visible for the specified duration.

## Declaration

```swift
func present(afterMinimumDuration duration: CFTimeInterval)
```

## Parameters

- `duration`: The previous drawable’s minimum display time, in seconds.

<a id="discussion"></a>

## Discussion

When a command queue schedules a command buffer for execution, it tracks whether any commands in that command buffer need to render or write to the drawable object. When you call this method, the drawable presents its contents at a future time when all render and write requests for that drawable are complete and a previous drawable has been visible onscreen for the specified duration. Use this method to schedule drawables at a regular interval.

> **Note**

>  To avoid presenting a drawable before any work is scheduled, or to avoid holding on to a drawable longer than necessary, call a command buffer’s [present(\_:afterMinimumDuration:)](../mtlcommandbuffer/present%28__afterminimumduration_%29.md) method instead. The [present(\_:afterMinimumDuration:)](../mtlcommandbuffer/present%28__afterminimumduration_%29.md) method is a convenience method that calls the given drawable’s [present(afterMinimumDuration:)](present%28afterminimumduration_%29.md) method after the command queue schedules that command buffer for execution.

## See Also

### Presenting the drawable

- [present()](present%28%29.md): Presents the drawable onscreen as soon as possible.
- [present(at:)](present%28at_%29.md): Presents the drawable onscreen at a specific host time.

# presentAfterMinimumDuration: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

Presents the drawable onscreen as soon as possible after a previous drawable is visible for the specified duration.

## Declaration

```objectivec
- (void) presentAfterMinimumDuration:(CFTimeInterval) duration;
```

## Parameters

- `duration`: The previous drawable’s minimum display time, in seconds.

<a id="discussion"></a>

## Discussion

When a command queue schedules a command buffer for execution, it tracks whether any commands in that command buffer need to render or write to the drawable object. When you call this method, the drawable presents its contents at a future time when all render and write requests for that drawable are complete and a previous drawable has been visible onscreen for the specified duration. Use this method to schedule drawables at a regular interval.

> **Note**

>  To avoid presenting a drawable before any work is scheduled, or to avoid holding on to a drawable longer than necessary, call a command buffer’s [presentDrawable:afterMinimumDuration:](../mtlcommandbuffer/present%28__afterminimumduration_%29.md) method instead. The [presentDrawable:afterMinimumDuration:](../mtlcommandbuffer/present%28__afterminimumduration_%29.md) method is a convenience method that calls the given drawable’s [presentAfterMinimumDuration:](present%28afterminimumduration_%29.md) method after the command queue schedules that command buffer for execution.

## See Also

### Presenting the drawable

- [present](present%28%29.md): Presents the drawable onscreen as soon as possible.
- [presentAtTime:](present%28at_%29.md): Presents the drawable onscreen at a specific host time.
