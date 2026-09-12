> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributecontainer/init(_:including:)-28n0g](https://developer.apple.com/documentation/foundation/attributecontainer/init(_:including:)-28n0g)

# init(\_:including:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an attribute container from a dictionary and an attribute scope that a key path identifies.

## Declaration

```swift
init<S>(_ dictionary: [NSAttributedString.Key : Any], including scope: KeyPath<AttributeScopes, S.Type>) throws where S : AttributeScope
```

## Parameters

- `dictionary`: A dictionary of attribute keys and their values.
- `scope`: A key path that identifies the attribute scope of the dictionary keys. This can be a nested scope that contains several scopes.

<a id="Discussion"></a>

## Discussion

This initializer only collects attributes from `dictionary` that exist in the provided scope. The resulting attribute container omits any keys in `dictionary` that don’t exist in `scope`.

## See Also

### Creating an Attribute Container

- [init()](init%28%29.md): Creates an empty attribute container.
- [init(\_:including:)](init%28__including_%29-2mw0o.md): Creates an attribute container from a dictionary and an attribute scope.
- [init(\_:)](init%28__%29.md): Creates an attribute container from a dictionary, using default attribute scopes.
