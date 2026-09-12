> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyiterator/init(_:)-5l6js](https://developer.apple.com/documentation/swift/anyiterator/init(_:)-5l6js)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an iterator that wraps the given closure in its `next()` method.

## Declaration

```swift
init(_ body: @escaping () -> Element?)
```

## Parameters

- `body`: A closure that returns an optional element. `body` is executed each time the `next()` method is called on the resulting iterator.

<a id="discussion"></a>

## Discussion

The following example creates an iterator that counts up from the initial value of an integer `x` to 15:

```swift
var x = 7
let iterator: AnyIterator<Int> = AnyIterator {
    defer { x += 1 }
    return x < 15 ? x : nil
}
let a = Array(iterator)
// a == [7, 8, 9, 10, 11, 12, 13, 14]
```
