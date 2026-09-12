> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/assign(to:on:)](https://developer.apple.com/documentation/combine/publisher/assign(to:on:))

# assign(to:on:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Assigns each element from a publisher to a property on an object.

## Declaration

```swift
func assign<Root>(to keyPath: ReferenceWritableKeyPath<Root, Self.Output>, on object: Root) -> AnyCancellable
```

## Parameters

- `keyPath`: A key path that indicates the property to assign. See [Key-Path Expression](https://developer.apple.com/library/archive/documentation/Swift/Conceptual/Swift_Programming_Language/Expressions.html#//apple_ref/doc/uid/TP40014097-CH32-ID563) in *The Swift Programming Language* to learn how to use key paths to specify a property of an object.
- `object`: The object that contains the property. The subscriber assigns the object’s property every time it receives a new value.

<a id="return-value"></a>

## Return Value

An [AnyCancellable](../anycancellable.md) instance. Call [cancel()](../cancellable/cancel%28%29.md) on this instance when you no longer want the publisher to automatically assign the property. Deinitializing this instance will also cancel automatic assignment.

## Mentioned In

- [Receiving and Handling Events with Combine](../receiving-and-handling-events-with-combine.md)
- [Processing Published Elements with Subscribers](../processing-published-elements-with-subscribers.md)
- [Replacing Foundation Timers with Timer Publishers](../replacing-foundation-timers-with-timer-publishers.md)

<a id="discussion"></a>

## Discussion

Use the [assign(to:on:)](assign%28to_on_%29.md) subscriber when you want to set a given property each time a publisher produces a value.

In this example, the [assign(to:on:)](assign%28to_on_%29.md) sets the value of the `anInt` property on an instance of `MyClass`:

```swift
class MyClass {
    var anInt: Int = 0 {
        didSet {
            print("anInt was set to: \(anInt)", terminator: "; ")
        }
    }
}

var myObject = MyClass()
let myRange = (0...2)
cancellable = myRange.publisher
    .assign(to: \.anInt, on: myObject)

// Prints: "anInt was set to: 0; anInt was set to: 1; anInt was set to: 2"
```

> **Important**

> The [Subscribers.Assign](../subscribers/assign.md) instance created by this operator maintains a strong reference to `object`, and sets it to `nil` when the upstream publisher completes (either normally or with an error).

## See Also

### Connecting simple subscribers

- [assign(to:)](assign%28to_%29.md): Conforms when `Failure` is `Never`. Republishes elements received from a publisher, by assigning them to a property marked as a publisher.
- [sink(receiveCompletion:receiveValue:)](sink%28receivecompletion_receivevalue_%29.md): Attaches a subscriber with closure-based behavior.
- [sink(receiveValue:)](sink%28receivevalue_%29.md): Conforms when `Failure` is `Never`. Attaches a subscriber with closure-based behavior to a publisher that never fails.
