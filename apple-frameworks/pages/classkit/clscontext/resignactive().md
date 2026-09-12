> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/resignactive()](https://developer.apple.com/documentation/classkit/clscontext/resignactive())

# resignActive() (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Tells a context to stop being the active context.

## Declaration

```swift
func resignActive()
```

## Mentioned In

- [Informing ClassKit that a task is about to begin](../informing-classkit-that-a-task-is-about-to-begin.md)

<a id="Discussion"></a>

## Discussion

Only one context can be active at a time, so the framework automatically calls this method for you if you activate another context.

## See Also

### Activating and deactivating a context

- [Informing ClassKit that a task is about to begin](../informing-classkit-that-a-task-is-about-to-begin.md): Activate and deactivate contexts according to user interaction.
- [becomeActive()](becomeactive%28%29.md): Tells a context to become the active context.
- [isActive](isactive.md): A Boolean indicating whether the context is active.

# resignActive (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Tells a context to stop being the active context.

## Declaration

```objectivec
- (void) resignActive;
```

## Mentioned In

- [Informing ClassKit that a task is about to begin](../informing-classkit-that-a-task-is-about-to-begin.md)

<a id="Discussion"></a>

## Discussion

Only one context can be active at a time, so the framework automatically calls this method for you if you activate another context.

## See Also

### Activating and deactivating a context

- [Informing ClassKit that a task is about to begin](../informing-classkit-that-a-task-is-about-to-begin.md): Activate and deactivate contexts according to user interaction.
- [becomeActive](becomeactive%28%29.md): Tells a context to become the active context.
- [active](isactive.md): A Boolean indicating whether the context is active.
