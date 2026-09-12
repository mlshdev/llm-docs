> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/publisher/map(_:_:)](https://developer.apple.com/documentation/combine/publisher/map(_:_:))

# map(\_:\_:)

**Framework:** Combine  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Publishes the values of two key paths as a tuple.

## Declaration

```swift
func map<T0, T1>(_ keyPath0: KeyPath<Self.Output, T0>, _ keyPath1: KeyPath<Self.Output, T1>) -> Publishers.MapKeyPath2<Self, T0, T1>
```

## Parameters

- `keyPath0`: The key path of a property on `Output`.
- `keyPath1`: The key path of another property on `Output`.

<a id="return-value"></a>

## Return Value

A publisher that publishes the values of two key paths as a tuple.

<a id="discussion"></a>

## Discussion

In the following example, the [map(\_:\_:)](map%28____%29.md) operator uses the Swift key path syntax to access the `die1` and `die2` members of the `DiceRoll` structure published by the [Just](../just.md) publisher.

The downstream sink subscriber receives only these two values (as an `(Int, Int)` tuple), not the entire `DiceRoll`.

```swift
struct DiceRoll {
    let die1: Int
    let die2: Int
}

cancellable = Just(DiceRoll(die1:Int.random(in:1...6),
                            die2: Int.random(in:1...6)))
    .map(\.die1, \.die2)
    .sink { values in
        print ("Rolled: \(values.0), \(values.1) (total: \(values.0 + values.1))")
    }
// Prints "Rolled: 6, 4 (total: 10)" (or other random values).
```

## See Also

### Identifying properties with key paths

- [map(\_:)](map%28__%29-6sm0a.md): Publishes the value of a key path.
- [map(\_:\_:\_:)](map%28______%29.md): Publishes the values of three key paths as a tuple.
