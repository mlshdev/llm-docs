> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/attributecontainer/init(_:)

# init(\_:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Creates an attribute container from a dictionary, using default attribute scopes.

## Declaration

```swift
init(_ dictionary: [NSAttributedString.Key : Any])
```

## Parameters

- `dictionary`: A dictionary of attribute keys and their values.

<a id="Discussion"></a>

## Discussion

This initializer includes all attribute scopes defined by the SDK, such as [AttributeScopes.FoundationAttributes](../attributescopes/foundationattributes.md), [AttributeScopes.SwiftUIAttributes](../attributescopes/swiftuiattributes.md), and [AttributeScopes.AccessibilityAttributes](../attributescopes/accessibilityattributes.md). To use third-party attribute scopes, use the initializers [init(\_:including:)](init%28__including_%29-2mw0o.md) and [init(\_:including:)](init%28__including_%29-28n0g.md).

## See Also

### Creating an Attribute Container

- [init()](init%28%29.md): Creates an empty attribute container.
- [init(\_:including:)](init%28__including_%29-2mw0o.md): Creates an attribute container from a dictionary and an attribute scope.
- [init(\_:including:)](init%28__including_%29-28n0g.md): Creates an attribute container from a dictionary and an attribute scope that a key path identifies.
