> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/init(_:)](https://developer.apple.com/documentation/foundation/nsattributedstring/init(_:))

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a reference-type attributed string from the specified value-type attributed string.

## Declaration

```swift
convenience init(_ attrStr: AttributedString)
```

## Parameters

- `attrStr`: The value type attributed string that provides the text and attributes of the new object.

<a id="Discussion"></a>

## Discussion

This initializer includes all attribute scopes defined by the SDK, such as [AttributeScopes.FoundationAttributes](../attributescopes/foundationattributes.md), [AttributeScopes.SwiftUIAttributes](../attributescopes/swiftuiattributes.md), and [AttributeScopes.AccessibilityAttributes](../attributescopes/accessibilityattributes.md). To use third-party attribute scopes, use the initializers [init(\_:including:)](init%28__including_%29-9gogq.md) or [init(\_:including:)](init%28__including_%29-8iy4i.md).

## See Also

### Creating a formatted string

- [init(\_:including:)](init%28__including_%29-9gogq.md): Creates a reference-type attributed string from the specified value-type attributed string, including an attribute scope.
- [init(\_:including:)](init%28__including_%29-8iy4i.md): Creates a reference-type attributed string from the specified value-type attributed string, including an attribute scope that a key path identifies.
