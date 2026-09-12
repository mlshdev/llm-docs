> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(_:including:)-9gogq](https://developer.apple.com/documentation/foundation/nsattributedstring/init(_:including:)-9gogq)

# init(\_:including:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a reference-type attributed string from the specified value-type attributed string, including an attribute scope.

## Declaration

```swift
convenience init<S>(_ attrStr: AttributedString, including scope: S.Type) throws where S : AttributeScope
```

## Parameters

- `attrStr`: The value-type attributed string that provides the text and attributes of the new object.
- `scope`: The attribute scope of the attributes in `attrStr`. This can be a nested scope that contains several scopes.

## See Also

### Creating a formatted string

- [init(\_:)](init%28__%29.md): Creates a reference-type attributed string from the specified value-type attributed string.
- [init(\_:including:)](init%28__including_%29-8iy4i.md): Creates a reference-type attributed string from the specified value-type attributed string, including an attribute scope that a key path identifies.
