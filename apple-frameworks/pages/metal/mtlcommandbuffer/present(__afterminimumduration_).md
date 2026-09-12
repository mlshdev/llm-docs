> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/present(_:afterminimumduration:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/present(_:afterminimumduration:))

# present(\_:afterMinimumDuration:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

Presents a drawable after the system presents the previous drawable for an amount of time.

## Declaration

```swift
func present(_ drawable: any MTLDrawable, afterMinimumDuration duration: CFTimeInterval)
```

## Parameters

- `drawable`: An [MTLDrawable](../mtldrawable.md) instance that contains a texture the system can show on a display.
- `duration`: The shortest display time you want the system to give to the previous drawable before presenting this one.

<a id="discussion"></a>

## Discussion

This convenience method calls the drawable’s [present(afterMinimumDuration:)](../mtldrawable/present%28afterminimumduration_%29.md) method after the command queue schedules the command buffer for execution. The command buffer does this by adding a completion handler by calling its own [addScheduledHandler(\_:)](addscheduledhandler%28__%29.md) method for you.

> **Important**

>  You can only call this method before calling the command buffer’s [commit()](commit%28%29.md) method.

## See Also

### Presenting a drawable

- [present(\_:)](present%28__%29.md): Presents a drawable as early as possible.
- [present(\_:atTime:)](present%28__attime_%29.md): Presents a drawable at a specific time.

# presentDrawable:afterMinimumDuration: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.3+ · iPadOS 10.3+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 10.2+ · visionOS 1.0+

Presents a drawable after the system presents the previous drawable for an amount of time.

## Declaration

```objectivec
- (void) presentDrawable:(id<MTLDrawable>) drawable afterMinimumDuration:(CFTimeInterval) duration;
```

## Parameters

- `drawable`: An [MTLDrawable](../mtldrawable.md) instance that contains a texture the system can show on a display.
- `duration`: The shortest display time you want the system to give to the previous drawable before presenting this one.

<a id="discussion"></a>

## Discussion

This convenience method calls the drawable’s [presentAfterMinimumDuration:](../mtldrawable/present%28afterminimumduration_%29.md) method after the command queue schedules the command buffer for execution. The command buffer does this by adding a completion handler by calling its own [addScheduledHandler:](addscheduledhandler%28__%29.md) method for you.

> **Important**

>  You can only call this method before calling the command buffer’s [commit](commit%28%29.md) method.

## See Also

### Presenting a drawable

- [presentDrawable:](present%28__%29.md): Presents a drawable as early as possible.
- [presentDrawable:atTime:](present%28__attime_%29.md): Presents a drawable at a specific time.
