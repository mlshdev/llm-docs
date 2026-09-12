> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/subscribers/assign/object](https://developer.apple.com/documentation/combine/subscribers/assign/object)

# object

**Framework:** Combine  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The object that contains the property to assign.

## Declaration

```swift
final var object: Root? { get }
```

<a id="discussion"></a>

## Discussion

The subscriber holds a strong reference to this object until the upstream publisher calls [receive(completion:)](../../subscriber/receive%28completion_%29.md), at which point the subscriber sets this property to `nil`.

## See Also

### Inspecting the assigned property

- [keyPath](keypath.md): The key path that indicates the property to assign.
