> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bool/hashvalue](https://developer.apple.com/documentation/swift/bool/hashvalue)

# hashValue

**Framework:** Swift  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The hash value.

## Declaration

```swift
var hashValue: Int { get }
```

<a id="discussion"></a>

## Discussion

Hash values are not guaranteed to be equal across different executions of your program. Do not save hash values to use during a future execution.

> **Important**

> `hashValue` is deprecated as a `Hashable` requirement. To conform to `Hashable`, implement the `hash(into:)` requirement instead. The compiler provides an implementation for `hashValue` for you.

## See Also

### Inspecting a Boolean

- [customMirror](custommirror.md): A mirror that reflects the `Bool` instance.
- [customPlaygroundQuickLook](customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Bool` instance.
- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.
