> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/init(nilliteral:)](https://developer.apple.com/documentation/swift/optional/init(nilliteral:))

# init(nilLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance initialized with `nil`.

## Declaration

```swift
init(nilLiteral: ())
```

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. It is used by the compiler when you initialize an `Optional` instance with a `nil` literal. For example:

```swift
var i: Index? = nil
```

In this example, the assignment to the `i` variable calls this initializer behind the scenes.

## See Also

### Creating a Nil Value

- [Optional.none](none.md): The absence of a value.
