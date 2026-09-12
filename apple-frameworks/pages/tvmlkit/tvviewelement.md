> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvviewelement](https://developer.apple.com/documentation/tvmlkit/tvviewelement)

# TVViewElement (Swift)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A representation of a read-only DOM node.

> Please use SwiftUI or UIKit

## Declaration

```swift
class TVViewElement
```

<a id="overview"></a>

## Overview

The `TVViewElement` model object is traversed by the [TVInterfaceFactory](tvinterfacefactory.md) factory to construct views and view controllers, and to render templates. Views and view controllers should use the available dispatch APIs to send user events to JavaScript.

## Topics

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
- [TVElementUpdateType](tvelementupdatetype.md): Deprecated. Describes any changes to the DOM tree after it has been reparsed.

### Dispatching Events

- [dispatchEvent(type:canBubble:cancellable:extraInfo:completion:)](tvviewelement/dispatchevent%28type_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches an event of a specific type to the JavaScript file.
- [TVElementEventType](tvelementeventtype.md): Deprecated. The type of event that has been dispatched.
- [dispatchEvent(name:canBubble:cancellable:extraInfo:completion:)](tvviewelement/dispatchevent%28name_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches a custom-named event.

### Resetting a Property’s Value

- [resetProperty(\_:)](tvviewelement/resetproperty%28__%29.md): Deprecated. Resets the property to its default value.
- [TVElementResettableProperty](tvelementresettableproperty.md): Deprecated. The types of properties that can be reset to their default values.

### Instance Properties

- [elementData](tvviewelement/elementdata.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TVImageElement](tvimageelement.md)
- [TVTextElement](tvtextelement.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Views and View Controllers

- [TVInterfaceCreating](tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVInterfaceFactory](tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.

# TVViewElement (Objective-C)

**Framework:** TVMLKit  
**Kind:** Class  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A representation of a read-only DOM node.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@interface TVViewElement : NSObject
```

<a id="overview"></a>

## Overview

The `TVViewElement` model object is traversed by the [TVInterfaceFactory](tvinterfacefactory.md) factory to construct views and view controllers, and to render templates. Views and view controllers should use the available dispatch APIs to send user events to JavaScript.

## Topics

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
- [TVElementUpdateType](tvelementupdatetype.md): Deprecated. Describes any changes to the DOM tree after it has been reparsed.

### Dispatching Events

- [dispatchEventOfType:canBubble:cancellable:extraInfo:completion:](tvviewelement/dispatchevent%28type_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches an event of a specific type to the JavaScript file.
- [TVElementEventType](tvelementeventtype.md): Deprecated. The type of event that has been dispatched.
- [dispatchEventWithName:canBubble:cancellable:extraInfo:completion:](tvviewelement/dispatchevent%28name_canbubble_cancellable_extrainfo_completion_%29.md): Deprecated. Dispatches a custom-named event.

### Resetting a Property’s Value

- [resetProperty:](tvviewelement/resetproperty%28__%29.md): Deprecated. Resets the property to its default value.
- [TVElementResettableProperty](tvelementresettableproperty.md): Deprecated. The types of properties that can be reset to their default values.

### Instance Properties

- [elementData](tvviewelement/elementdata.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [TVImageElement](tvimageelement.md)
- [TVTextElement](tvtextelement.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Views and View Controllers

- [TVInterfaceCreating](tvinterfacecreating.md): Deprecated. A protocol that defines methods used to create views and view controllers.
- [TVInterfaceFactory](tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.
