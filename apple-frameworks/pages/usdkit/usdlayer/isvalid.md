> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdlayer/isvalid](https://developer.apple.com/documentation/usdkit/usdlayer/isvalid)

# isValid

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Whether the layer is still valid. Returns `false` if the underlying data has been released.

## Declaration

```swift
var isValid: Bool { get }
```

## See Also

### Inspecting identity and state

- [identifier](identifier.md): The layer’s identifier — typically a file path, URL, or anonymous identifier string. Identifies the layer in OpenUSD’s global registry.
- [resolvedPath](resolvedpath.md): The resolved filesystem location of the layer’s source, or `nil` for anonymous layers.
- [displayName](displayname.md): A human-readable name for the layer, derived from its identifier. Suitable for display in UI.
- [isAnonymous](isanonymous.md): Whether the layer is anonymous (in-memory, no file backing).
- [isDirty](isdirty.md): Whether the layer has unsaved changes.
- [isMuted](ismuted.md): Whether the layer is muted from composition.
