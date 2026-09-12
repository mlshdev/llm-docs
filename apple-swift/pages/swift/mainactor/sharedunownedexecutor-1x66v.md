> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mainactor/sharedunownedexecutor-1x66v](https://developer.apple.com/documentation/swift/mainactor/sharedunownedexecutor-1x66v)

# sharedUnownedExecutor

**Framework:** Swift  
**Kind:** Type Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Shorthand for referring to the `shared.unownedExecutor` of this global actor.

## Declaration

```swift
static var sharedUnownedExecutor: UnownedSerialExecutor { get }
```

<a id="discussion"></a>

## Discussion

When declaring a global actor with a custom executor, prefer to implement the underlying actor’s [unownedExecutor](../actor/unownedexecutor.md) property, and leave this `sharedUnownedExecutor` default implementation in-place as it will simply delegate to the `shared.unownedExecutor`.

The value of this property must be equivalent to `shared.unownedExecutor`, as it may be used by the Swift concurrency runtime or explicit user code with that assumption in mind.

Returning different executors for different invocations of this computed property is also illegal, as it could lead to inconsistent synchronization of the underlying actor.

> **See Also**

> [SerialExecutor](../serialexecutor.md)
