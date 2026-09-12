> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/tvinterfacecreating](https://developer.apple.com/documentation/tvmlkit/tvinterfacecreating)

# TVInterfaceCreating (Swift)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A protocol that defines methods used to create views and view controllers.

> Please use SwiftUI or UIKit

## Declaration

```swift
protocol TVInterfaceCreating : NSObjectProtocol
```

## Mentioned In

- [Creating TVML Elements](creating-tvml-elements.md)

<a id="overview"></a>

## Overview

This protocol contains methods used to create views and view controllers from a [TVViewElement](tvviewelement.md).

## Topics

### Retrieving Resource Information

- [resourceImage(name:)](tvinterfacecreating/resourceimage%28name_%29.md): Deprecated. Returns the image for the given resource
- [resourceURL(name:)](tvinterfacecreating/resourceurl%28name_%29.md): Deprecated. Returns a URL for the given resource.

### Updating View Information

- [makeViewController(element:existingViewController:)](tvinterfacecreating/makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [makeView(element:existingView:)](tvinterfacecreating/makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [collectionViewCellClass(for:)](tvinterfacecreating/collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.
- [playerViewController(for:)](tvinterfacecreating/playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVInterfaceFactory](tvinterfacefactory.md)

## See Also

### Views and View Controllers

- [TVViewElement](tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceFactory](tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.

# TVInterfaceCreating (Objective-C)

**Framework:** TVMLKit  
**Kind:** Protocol  
**Availability:** tvOS 9.0+ (deprecated in 18.0)

A protocol that defines methods used to create views and view controllers.

> Please use SwiftUI or UIKit

## Declaration

```objectivec
@protocol TVInterfaceCreating <NSObject>
```

## Mentioned In

- [Creating TVML Elements](creating-tvml-elements.md)

<a id="overview"></a>

## Overview

This protocol contains methods used to create views and view controllers from a [TVViewElement](tvviewelement.md).

## Topics

### Retrieving Resource Information

- [imageForResource:](tvinterfacecreating/resourceimage%28name_%29.md): Deprecated. Returns the image for the given resource
- [URLForResource:](tvinterfacecreating/resourceurl%28name_%29.md): Deprecated. Returns a URL for the given resource.

### Updating View Information

- [viewControllerForElement:existingViewController:](tvinterfacecreating/makeviewcontroller%28element_existingviewcontroller_%29.md): Deprecated. Returns a view controller for a view element.
- [viewForElement:existingView:](tvinterfacecreating/makeview%28element_existingview_%29.md): Deprecated. Returns a view for a view element.
- [collectionViewCellClassForElement:](tvinterfacecreating/collectionviewcellclass%28for_%29.md): Deprecated. Returns a collection view cell for the specified element.
- [playerViewControllerForPlayer:](tvinterfacecreating/playerviewcontroller%28for_%29.md): Deprecated. Returns the custom player user interface for a custom player.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [TVInterfaceFactory](tvinterfacefactory.md)

## See Also

### Views and View Controllers

- [TVViewElement](tvviewelement.md): Deprecated. A representation of a read-only DOM node.
- [TVInterfaceFactory](tvinterfacefactory.md): Deprecated. A factory for the creation of views and view controllers.
- [TVBrowserViewController](tvbrowserviewcontroller.md): A view controller that presents content in a browsable, full-screen format.
- [TVDocumentViewController](tvdocumentviewcontroller.md): Deprecated. A view controller that represents a TVMLKit document.
