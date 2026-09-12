> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional/debugdescription](https://developer.apple.com/documentation/swift/optional/debugdescription)

# debugDescription

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A textual representation of this instance, suitable for debugging.

## Declaration

```swift
var debugDescription: String { get }
```

## See Also

### Inspecting an Optional

- [hash(into:)](hash%28into_%29.md): Conforms when `Wrapped` conforms to `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.
- [unsafelyUnwrapped](unsafelyunwrapped.md): The wrapped value of this instance, unwrapped without checking whether the instance is `nil`.
- [customMirror](custommirror.md): The custom mirror for this instance.
