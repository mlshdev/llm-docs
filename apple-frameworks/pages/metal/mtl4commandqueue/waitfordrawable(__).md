> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4commandqueue/waitfordrawable(_:)](https://developer.apple.com/documentation/metal/mtl4commandqueue/waitfordrawable(_:))

# waitForDrawable(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Schedules a wait operation on the command queue to ensure the display is no longer using a specific Metal drawable.

## Declaration

```swift
func waitForDrawable(_ drawable: any MTLDrawable)
```

## Parameters

- `drawable`: [MTLDrawable](../mtldrawable.md) instance to signal.

<a id="discussion"></a>

## Discussion

Use this method to ensure the display is no longer using a [MTLDrawable](../mtldrawable.md) instance before executing any subsequent commands.

This method returns immediately and doesn’t perform any synchronization on the current thread. You are responsible for calling this method before committing any command buffers containing commands that target this drawable.

Call this method multiple times if you commit your command buffers to multiple command queues.

# waitForDrawable: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Schedules a wait operation on the command queue to ensure the display is no longer using a specific Metal drawable.

## Declaration

```objectivec
- (void) waitForDrawable:(id<MTLDrawable>) drawable;
```

## Parameters

- `drawable`: [MTLDrawable](../mtldrawable.md) instance to signal.

<a id="discussion"></a>

## Discussion

Use this method to ensure the display is no longer using a [MTLDrawable](../mtldrawable.md) instance before executing any subsequent commands.

This method returns immediately and doesn’t perform any synchronization on the current thread. You are responsible for calling this method before committing any command buffers containing commands that target this drawable.

Call this method multiple times if you commit your command buffers to multiple command queues.
