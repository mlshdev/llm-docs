> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/extensionfoundation/appextensionidentity/hash(into:)](https://developer.apple.com/documentation/extensionfoundation/appextensionidentity/hash(into:))

# hash(into:)

**Framework:** ExtensionFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 13.0+ · tvOS 26.0+ · visionOS 1.1+ · watchOS 26.0+

Hashes the essential components of the extension by feeding them into the given hash function.

## Declaration

```swift
func hash(into hasher: inout Hasher)
```

## Parameters

- `hasher`: The hash function to use when combining the components of the extension.

## See Also

### Comparing app extensions

- [==(\_:\_:)](==%28____%29.md): Returns a Boolean value that indicates whether two identities are equal.
