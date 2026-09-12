> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring/init(_:)-1fru0](https://developer.apple.com/documentation/foundation/attributedstring/init(_:)-1fru0)

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates a value-type attributed string from a reference type.

## Declaration

```swift
init(_ nsStr: NSAttributedString)
```

## Parameters

- `nsStr`: The [NSAttributedString](../nsattributedstring.md) to convert.

<a id="Discussion"></a>

## Discussion

This initializer includes all attribute scopes defined by the SDK, such as [AttributeScopes.FoundationAttributes](../attributescopes/foundationattributes.md), [AttributeScopes.SwiftUIAttributes](../attributescopes/swiftuiattributes.md), and [AttributeScopes.AccessibilityAttributes](../attributescopes/accessibilityattributes.md). To use third-party attribute scopes, use the initializers [init(\_:including:)](init%28__including_%29-9no47.md) or [init(\_:including:)](init%28__including_%29-puv0.md).

## See Also

### Creating an Attributed String from a Reference Type

- [init(\_:including:)](init%28__including_%29-9no47.md): Creates a value-type attributed string from a reference type, including an attribute scope.
- [init(\_:including:)](init%28__including_%29-puv0.md): Creates a value-type attributed string from a reference type, including an attribute scope that a key path identifies.
