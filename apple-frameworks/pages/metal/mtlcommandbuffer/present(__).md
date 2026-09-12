> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcommandbuffer/present(_:)](https://developer.apple.com/documentation/metal/mtlcommandbuffer/present(_:))

# present(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Presents a drawable as early as possible.

## Declaration

```swift
func present(_ drawable: any MTLDrawable)
```

## Parameters

- `drawable`: An [MTLDrawable](../mtldrawable.md) instance that contains a texture the system can show on a display.

<a id="discussion"></a>

## Discussion

This convenience method calls the drawable’s [present()](../mtldrawable/present%28%29.md) method after the command queue schedules the command buffer for execution. The command buffer does this by adding a completion handler by calling its own [addScheduledHandler(\_:)](addscheduledhandler%28__%29.md) method for you.

> **Important**

>  You can only call this method before calling the command buffer’s [commit()](commit%28%29.md) method.

## Default Implementations

### MTLCommandBuffer Implementations

- [present(\_:)](present%28__%29-8nfpq.md): Presents a texture resource drawable as early as possible.

## See Also

### Presenting a drawable

- [present(\_:atTime:)](present%28__attime_%29.md): Presents a drawable at a specific time.
- [present(\_:afterMinimumDuration:)](present%28__afterminimumduration_%29.md): Presents a drawable after the system presents the previous drawable for an amount of time.

# presentDrawable: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Presents a drawable as early as possible.

## Declaration

```objectivec
- (void) presentDrawable:(id<MTLDrawable>) drawable;
```

## Parameters

- `drawable`: An [MTLDrawable](../mtldrawable.md) instance that contains a texture the system can show on a display.

<a id="discussion"></a>

## Discussion

This convenience method calls the drawable’s [present](../mtldrawable/present%28%29.md) method after the command queue schedules the command buffer for execution. The command buffer does this by adding a completion handler by calling its own [addScheduledHandler:](addscheduledhandler%28__%29.md) method for you.

> **Important**

>  You can only call this method before calling the command buffer’s [commit](commit%28%29.md) method.

## Default Implementations

### MTLCommandBuffer Implementations

- [present(\_:)](present%28__%29-8nfpq.md): Presents a texture resource drawable as early as possible.

## See Also

### Presenting a drawable

- [presentDrawable:atTime:](present%28__attime_%29.md): Presents a drawable at a specific time.
- [presentDrawable:afterMinimumDuration:](present%28__afterminimumduration_%29.md): Presents a drawable after the system presents the previous drawable for an amount of time.
