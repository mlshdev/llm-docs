> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/init(_:including:)-9no47](https://developer.apple.com/documentation/foundation/attributedstring/init(_:including:)-9no47)

# init(\_:including:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a value-type attributed string from a reference type, including an attribute scope.

## Declaration

```swift
init<S>(_ nsStr: NSAttributedString, including scope: S.Type) throws where S : AttributeScope
```

## Parameters

- `nsStr`: The [NSAttributedString](../nsattributedstring.md) to convert.
- `scope`: The attribute scope of the attributes in `nsStr`. This can be a nested scope that contains several scopes.

<a id="Discussion"></a>

## Discussion

This initializer only collects attributes from `nsStr` that exist in the provided scope. The resulting attributed string omits any keys in `nsStr` that don’t exist in `scope`.

## See Also

### Creating an Attributed String from a Reference Type

- [init(\_:including:)](init%28__including_%29-puv0.md): Creates a value-type attributed string from a reference type, including an attribute scope that a key path identifies.
- [init(\_:)](init%28__%29-1fru0.md): Creates a value-type attributed string from a reference type.
