> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvelementupdatetype](https://developer.apple.com/documentation/tvmlkit/tvelementupdatetype)

# TVElementUpdateType (Swift)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Describes any changes to the DOM tree after it has been reparsed.

> Please use SwiftUI or UIKit

## Declaration

```swift
enum TVElementUpdateType
```

## Topics

### Constants

- [TVElementUpdateType.none](tvelementupdatetype/none.md): Deprecated. The tree structure did not change.
- [TVElementUpdateType.subtree](tvelementupdatetype/subtree.md): Deprecated. A subtree element has been updated without affecting the order of any immediate children.
- [TVElementUpdateType.children](tvelementupdatetype/children.md): Deprecated. The order of child nodes have been updated due to the addition, removal, or replacement of child nodes.
- [TVElementUpdateType.node](tvelementupdatetype/node.md): Deprecated. The current node and its subtree have been modified.

### Enumeration Cases

- [TVElementUpdateType.styles](tvelementupdatetype/styles.md): Deprecated.

### Initializers

- [init(rawValue:)](tvelementupdatetype/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting a View Element

- [autoHighlightIdentifier](tvviewelement/autohighlightidentifier.md): Deprecated. A string identifying the element that is initially in focus.
- [attributes](tvviewelement/attributes.md): Deprecated. The attributes associated with a view element.
- [children](tvviewelement/children.md): Deprecated. An array containing the child elements of the element currently being inspected.
- [isDisabled](tvviewelement/isdisabled.md): Deprecated. Boolean value indicating whether the current element being inspected is disabled.
- [identifier](tvviewelement/identifier.md): Deprecated. A string containing the unique identifier for an element.
- [name](tvviewelement/name.md): Deprecated. A string containing the element’s name.
- [parent](tvviewelement/parent.md): Deprecated. The parent of the current node.
- [style](tvviewelement/style.md): Deprecated. The style applied to an element.
- [updateType](tvviewelement/updatetype.md): Deprecated. The value that describes any changes to the DOM tree after it has been reparsed.

# TVElementUpdateType (Objective-C)

**Framework:** TVMLKit  
**Kind:** Enumeration  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Describes any changes to the DOM tree after it has been reparsed.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
enum TVElementUpdateType : NSInteger;
```

## Topics

### Constants

- [TVElementUpdateTypeNone](tvelementupdatetype/none.md): Deprecated. The tree structure did not change.
- [TVElementUpdateTypeSubtree](tvelementupdatetype/subtree.md): Deprecated. A subtree element has been updated without affecting the order of any immediate children.
- [TVElementUpdateTypeChildren](tvelementupdatetype/children.md): Deprecated. The order of child nodes have been updated due to the addition, removal, or replacement of child nodes.
- [TVElementUpdateTypeSelf](tvelementupdatetype/node.md): Deprecated. The current node and its subtree have been modified.

### Enumeration Cases

- [TVElementUpdateTypeStyles](tvelementupdatetype/styles.md): Deprecated.

## See Also

### Inspecting a View Element

- [autoHighlightIdentifier](tvviewelement/autohighlightidentifier.md): Deprecated. A string identifying the element that is initially in focus.
- [attributes](tvviewelement/attributes.md): Deprecated. The attributes associated with a view element.
- [childViewElements](tvviewelement/children.md): Deprecated. An array containing the child elements of the element currently being inspected.
- [disabled](tvviewelement/isdisabled.md): Deprecated. Boolean value indicating whether the current element being inspected is disabled.
- [elementIdentifier](tvviewelement/identifier.md): Deprecated. A string containing the unique identifier for an element.
- [elementName](tvviewelement/name.md): Deprecated. A string containing the element’s name.
- [parentViewElement](tvviewelement/parent.md): Deprecated. The parent of the current node.
- [style](tvviewelement/style.md): Deprecated. The style applied to an element.
- [updateType](tvviewelement/updatetype.md): Deprecated. The value that describes any changes to the DOM tree after it has been reparsed.
