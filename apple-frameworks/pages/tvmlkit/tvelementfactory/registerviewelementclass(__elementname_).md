> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvelementfactory/registerviewelementclass(_:elementname:)](https://developer.apple.com/documentation/tvmlkit/tvelementfactory/registerviewelementclass(_:elementname:))

# registerViewElementClass(\_:elementName:) (Swift)

**Framework:** TVMLKit  
**Kind:** Type Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Registers a view element for the specified element name.

> Please use SwiftUI or UIKit

## Declaration

```swift
class func registerViewElementClass(_ elementClass: AnyClass, elementName: String)
```

## Parameters

- `elementClass`: The class of the element.
- `elementName`: The element name used when referencing this element within TVML.

## Mentioned In

- [Creating TVML Elements](../creating-tvml-elements.md)

<a id="Discussion"></a>

## Discussion

The [TVViewElement](../tvviewelement.md) class represents a read-only DOM node along with its attributes and aggregated style. This model object is traversed by the interface factory to construct views and view controllers, and to render templates. You must call this method for each element you register.

# registerViewElementClass:forElementName: (Objective-C)

**Framework:** TVMLKit  
**Kind:** Type Method  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

Registers a view element for the specified element name.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
+ (void) registerViewElementClass:(Class) elementClass forElementName:(NSString *) elementName;
```

## Parameters

- `elementClass`: The class of the element.
- `elementName`: The element name used when referencing this element within TVML.

## Mentioned In

- [Creating TVML Elements](../creating-tvml-elements.md)

<a id="Discussion"></a>

## Discussion

The [TVViewElement](../tvviewelement.md) class represents a read-only DOM node along with its attributes and aggregated style. This model object is traversed by the interface factory to construct views and view controllers, and to render templates. You must call this method for each element you register.
