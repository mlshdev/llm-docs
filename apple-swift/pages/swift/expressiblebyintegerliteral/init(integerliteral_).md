> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebyintegerliteral/init(integerliteral:)](https://developer.apple.com/documentation/swift/expressiblebyintegerliteral/init(integerliteral:))

# init(integerLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance initialized to the specified integer value.

## Declaration

```swift
init(integerLiteral value: Self.IntegerLiteralType)
```

## Parameters

- `value`: The value to create.

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. Instead, initialize a variable or constant using an integer literal. For example:

```swift
let x = 23
```

In this example, the assignment to the `x` constant calls this integer literal initializer behind the scenes.

## Default Implementations

### ExpressibleByIntegerLiteral Implementations

- [init(integerLiteral:)](init%28integerliteral_%29-88n2x.md): Conforms when `Self` conforms to `_ExpressibleByBuiltinIntegerLiteral`.
