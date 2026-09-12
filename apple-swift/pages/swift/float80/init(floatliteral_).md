> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/float80/init(floatliteral:)](https://developer.apple.com/documentation/swift/float80/init(floatliteral:))

# init(floatLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** macOS 10.10+

Creates an instance initialized to the specified floating-point value.

## Declaration

```swift
init(floatLiteral value: Float80)
```

## Parameters

- `value`: The value to create.

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. Instead, initialize a variable or constant using a floating-point literal. For example:

```swift
let x = 21.5
```

In this example, the assignment to the `x` constant calls this floating-point literal initializer behind the scenes.
