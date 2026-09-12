> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/objectidentifier/init(_:)-223xw](https://developer.apple.com/documentation/swift/objectidentifier/init(_:)-223xw)

# init(\_:)

**Framework:** Swift  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an instance that uniquely identifies the given class instance.

## Declaration

```swift
init(_ x: AnyObject)
```

## Parameters

- `x`: An instance of a class.

<a id="discussion"></a>

## Discussion

The following example creates an example class `IntegerRef` and compares instances of the class using their object identifiers and the identical-to operator (`===`):

```swift
class IntegerRef {
    let value: Int
    init(_ value: Int) {
        self.value = value
    }
}

let x = IntegerRef(10)
let y = x

print(ObjectIdentifier(x) == ObjectIdentifier(y))
// Prints "true"
print(x === y)
// Prints "true"

let z = IntegerRef(10)
print(ObjectIdentifier(x) == ObjectIdentifier(z))
// Prints "false"
print(x === z)
// Prints "false"
```
