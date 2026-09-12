> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bool/init(booleanliteral:)](https://developer.apple.com/documentation/swift/bool/init(booleanliteral:))

# init(booleanLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance initialized to the specified Boolean literal.

## Declaration

```swift
init(booleanLiteral value: Bool)
```

## Parameters

- `value`: The value of the new instance.

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. It is used by the compiler when you use a Boolean literal. Instead, create a new `Bool` instance by using one of the Boolean literals `true` or `false`.

```swift
var printedMessage = false

if !printedMessage {
    print("You look nice today!")
    printedMessage = true
}
// Prints "You look nice today!"
```

In this example, both assignments to the `printedMessage` variable call this Boolean literal initializer behind the scenes.

## See Also

### Infrequently Used Intializers

- [init()](init%28%29.md): Creates an instance initialized to `false`.
