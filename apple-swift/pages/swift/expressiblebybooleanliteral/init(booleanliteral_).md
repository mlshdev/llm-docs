> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/expressiblebybooleanliteral/init(booleanliteral:)](https://developer.apple.com/documentation/swift/expressiblebybooleanliteral/init(booleanliteral:))

# init(booleanLiteral:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance initialized to the given Boolean value.

## Declaration

```swift
init(booleanLiteral value: Self.BooleanLiteralType)
```

## Parameters

- `value`: The value of the new instance.

<a id="discussion"></a>

## Discussion

Do not call this initializer directly. Instead, initialize a variable or constant using one of the Boolean literals `true` and `false`. For example:

```swift
let twasBrillig = true
```

In this example, the assignment to the `twasBrillig` constant calls this Boolean literal initializer behind the scenes.
