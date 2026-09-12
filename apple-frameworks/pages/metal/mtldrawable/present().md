> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldrawable/present()](https://developer.apple.com/documentation/metal/mtldrawable/present())

# present() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Presents the drawable onscreen as soon as possible.

## Declaration

```swift
func present()
```

<a id="discussion"></a>

## Discussion

When a command queue schedules a command buffer for execution, it tracks whether any commands in that command buffer need to render or write to the drawable object. When you call this method, the drawable presents its contents as soon as possible after all scheduled render or write requests for that drawable are complete.

> **Note**

>  To avoid presenting a drawable before any work is scheduled, or to avoid holding on to a drawable longer than necessary, call a command buffer’s [present(\_:)](../mtlcommandbuffer/present%28__%29.md) method instead of this method. The [present(\_:)](../mtlcommandbuffer/present%28__%29.md) method is a convenience method that calls the drawable’s [present()](present%28%29.md) method after the command queue schedules that command buffer for execution.

## See Also

### Presenting the drawable

- [present(afterMinimumDuration:)](present%28afterminimumduration_%29.md): Presents the drawable onscreen as soon as possible after a previous drawable is visible for the specified duration.
- [present(at:)](present%28at_%29.md): Presents the drawable onscreen at a specific host time.

# present (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Presents the drawable onscreen as soon as possible.

## Declaration

```objectivec
- (void) present;
```

<a id="discussion"></a>

## Discussion

When a command queue schedules a command buffer for execution, it tracks whether any commands in that command buffer need to render or write to the drawable object. When you call this method, the drawable presents its contents as soon as possible after all scheduled render or write requests for that drawable are complete.

> **Note**

>  To avoid presenting a drawable before any work is scheduled, or to avoid holding on to a drawable longer than necessary, call a command buffer’s [presentDrawable:](../mtlcommandbuffer/present%28__%29.md) method instead of this method. The [presentDrawable:](../mtlcommandbuffer/present%28__%29.md) method is a convenience method that calls the drawable’s [present](present%28%29.md) method after the command queue schedules that command buffer for execution.

## See Also

### Presenting the drawable

- [presentAfterMinimumDuration:](present%28afterminimumduration_%29.md): Presents the drawable onscreen as soon as possible after a previous drawable is visible for the specified duration.
- [presentAtTime:](present%28at_%29.md): Presents the drawable onscreen at a specific host time.
