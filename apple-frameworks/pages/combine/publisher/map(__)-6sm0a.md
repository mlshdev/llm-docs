> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/map(_:)-6sm0a](https://developer.apple.com/documentation/combine/publisher/map(_:)-6sm0a)

# map(\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the value of a key path.

## Declaration

```swift
func map<T>(_ keyPath: KeyPath<Self.Output, T>) -> Publishers.MapKeyPath<Self, T>
```

## Parameters

- `keyPath`: The key path of a property on `Output`.

<a id="return-value"></a>

## Return Value

A publisher that publishes the value of the key path.

<a id="discussion"></a>

## Discussion

In the following example, the [map(\_:)](map%28__%29-6sm0a.md) operator uses the Swift key path syntax to access the `die` member of the `DiceRoll` structure published by the [Just](../just.md) publisher.

The downstream sink subscriber receives only the value of this `Int`, not the entire `DiceRoll`.

```swift
struct DiceRoll {
    let die: Int
}

cancellable = Just(DiceRoll(die:Int.random(in:1...6)))
    .map(\.die)
    .sink {
        print ("Rolled: \($0)")
    }
// Prints "Rolled: 3" (or some other random value).
```

## See Also

### Identifying properties with key paths

- [map(\_:\_:)](map%28____%29.md): Publishes the values of two key paths as a tuple.
- [map(\_:\_:\_:)](map%28______%29.md): Publishes the values of three key paths as a tuple.
