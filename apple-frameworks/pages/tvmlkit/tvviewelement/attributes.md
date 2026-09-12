> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvviewelement/attributes](https://developer.apple.com/documentation/tvmlkit/tvviewelement/attributes)

# attributes (Swift)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The attributes associated with a view element.

> Please use SwiftUI or UIKit

## Declaration

```swift
var attributes: [String : String]? { get }
```

<a id="Discussion"></a>

## Discussion

All of the attributes are defined as key-value pairs.

## See Also

### Inspecting a View Element

- [autoHighlightIdentifier](autohighlightidentifier.md): Deprecated. A string identifying the element that is initially in focus.
- [children](children.md): Deprecated. An array containing the child elements of the element currently being inspected.
- [isDisabled](isdisabled.md): Deprecated. Boolean value indicating whether the current element being inspected is disabled.
- [identifier](identifier.md): Deprecated. A string containing the unique identifier for an element.
- [name](name.md): Deprecated. A string containing the element’s name.
- [parent](parent.md): Deprecated. The parent of the current node.
- [style](style.md): Deprecated. The style applied to an element.
- [updateType](updatetype.md): Deprecated. The value that describes any changes to the DOM tree after it has been reparsed.
- [TVElementUpdateType](../tvelementupdatetype.md): Deprecated. Describes any changes to the DOM tree after it has been reparsed.

# attributes (Objective-C)

**Framework:** TVMLKit  
**Kind:** Instance Property  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

The attributes associated with a view element.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,NSString *> * attributes;
```

<a id="Discussion"></a>

## Discussion

All of the attributes are defined as key-value pairs.

## See Also

### Inspecting a View Element

- [autoHighlightIdentifier](autohighlightidentifier.md): Deprecated. A string identifying the element that is initially in focus.
- [childViewElements](children.md): Deprecated. An array containing the child elements of the element currently being inspected.
- [disabled](isdisabled.md): Deprecated. Boolean value indicating whether the current element being inspected is disabled.
- [elementIdentifier](identifier.md): Deprecated. A string containing the unique identifier for an element.
- [elementName](name.md): Deprecated. A string containing the element’s name.
- [parentViewElement](parent.md): Deprecated. The parent of the current node.
- [style](style.md): Deprecated. The style applied to an element.
- [updateType](updatetype.md): Deprecated. The value that describes any changes to the DOM tree after it has been reparsed.
- [TVElementUpdateType](../tvelementupdatetype.md): Deprecated. Describes any changes to the DOM tree after it has been reparsed.
