> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clscontext/isactive](https://developer.apple.com/documentation/classkit/clscontext/isactive)

# isActive (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A Boolean indicating whether the context is active.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use the [becomeActive()](becomeactive%28%29.md) method to activate a context, and the [resignActive()](resignactive%28%29.md) method to deactivate it.

## See Also

### Activating and deactivating a context

- [Informing ClassKit that a task is about to begin](../informing-classkit-that-a-task-is-about-to-begin.md): Activate and deactivate contexts according to user interaction.
- [becomeActive()](becomeactive%28%29.md): Tells a context to become the active context.
- [resignActive()](resignactive%28%29.md): Tells a context to stop being the active context.

# active (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A Boolean indicating whether the context is active.

## Declaration

```objectivec
@property (nonatomic, assign, readonly, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

Use the [becomeActive](becomeactive%28%29.md) method to activate a context, and the [resignActive](resignactive%28%29.md) method to deactivate it.

## See Also

### Activating and deactivating a context

- [Informing ClassKit that a task is about to begin](../informing-classkit-that-a-task-is-about-to-begin.md): Activate and deactivate contexts according to user interaction.
- [becomeActive](becomeactive%28%29.md): Tells a context to become the active context.
- [resignActive](resignactive%28%29.md): Tells a context to stop being the active context.
