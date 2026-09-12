> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedynamiclookup/subscript(dynamicmember:)-4yyyo](https://developer.apple.com/documentation/foundation/attributedynamiclookup/subscript(dynamicmember:)-4yyyo)

# subscript(dynamicMember:)

**Framework:** Foundation  
**Kind:** Instance Subscript  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Returns the attributed string key for a specified UIKit key path.

## Declaration

```swift
subscript<T>(dynamicMember keyPath: KeyPath<AttributeScopes.UIKitAttributes, T>) -> T where T : AttributedStringKey { get }
```

## See Also

### Accessing Framework Attribute Scopes

- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-3nor6.md): Returns the attributed string key for a specified Foundation key path.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-3neai.md): Returns the attributed string key for a specified Foundation number format key path.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-3q4ap.md): Returns the attributed string key for a specified SwiftUI key path.
- [subscript(dynamicMember:)](subscript%28dynamicmember_%29-3v1cn.md): Returns the attributed string key for a specified AppKit key path.
