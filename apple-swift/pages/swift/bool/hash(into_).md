> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bool/hash(into:)](https://developer.apple.com/documentation/swift/bool/hash(into:))

# hash(into:)

**Framework:** Swift  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Hashes the essential components of this value by feeding them into the given hasher.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hasher to use when combining the components of this instance.

## See Also

### Inspecting a Boolean

- [customMirror](custommirror.md): A mirror that reflects the `Bool` instance.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Bool` instance.
- [hashValue](hashvalue.md): The hash value.
