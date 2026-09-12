> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/anyhashable/base](https://developer.apple.com/documentation/swift/anyhashable/base)

# base

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The value wrapped by this instance.

## Declaration

```swift
var base: Any { get }
```

<a id="discussion"></a>

## Discussion

The `base` property can be cast back to its original type using one of the type casting operators (`as?`, `as!`, or `as`).

```swift
let anyMessage = AnyHashable("Hello world!")
if let unwrappedMessage = anyMessage.base as? String {
    print(unwrappedMessage)
}
// Prints "Hello world!"
```
