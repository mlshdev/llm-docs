> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmlkit/creating-tvml-elements](https://developer.apple.com/documentation/tvmlkit/creating-tvml-elements)

# Creating TVML Elements (Swift)

**Framework:** TVMLKit  
**Kind:** Article

Avoid rewriting complex and often used elements by creating a simplified custom element.

<a id="overview"></a>

## Overview

The TVML template elements ensure structure and consistency between documents. However, there are times when applying the same modification to a particular element across a single or multiple documents becomes unwiedly. One such example is when you need to update an element that contains copyright information. By creating a new element that incorporates these changes, you can avoid having to apply the same modifications to each instance of the element.

<a id="Create-Your-Customization-Class"></a>

### Create Your Customization Class

Your element customization class is where you register any new elements and add the customization code. To start, create a new class that conforms to the [TVInterfaceCreating](tvinterfacecreating.md) protocol and import the UIKit and TVMLKit frameworks:

```swift
import UIKit
import TVMLKit

class CustomElements: NSObject, TVInterfaceCreating {
   ...
}
```

<a id="Register-Your-New-Element"></a>

### Register Your New Element

Before you can use a new element in your TVML code, register the element using the [registerViewElementClass(\_:elementName:)](tvelementfactory/registerviewelementclass%28__elementname_%29.md) function. Call the [registerViewElementClass(\_:elementName:)](tvelementfactory/registerviewelementclass%28__elementname_%29.md) in your class’s `init` function and assign a name to the new element. The JavaScript environment can now recognize the registered element. The following code creates the new TVML element, `<copyright/>`:

```swift
override init() {
    super.init()
    TVElementFactory.registerViewElementClass(TVTextElement.self, elementName: "copyright")
}
```

> **Important**

>  You must register all elements before initializing the [TVApplicationController](tvapplicationcontroller.md) object.

<a id="Customize-Your-New-Element"></a>

### Customize Your New Element

After registering the new element name, you need to customize the element. Implement the [makeView(element:existingView:)](tvinterfacecreating/makeview%28element_existingview_%29.md) function in your custom class. The system automatically calls the [makeView(element:existingView:)](tvinterfacecreating/makeview%28element_existingview_%29.md) function for every element in your TVML document. Check for the new element’s name and add the customization code. If the current element is not your new element, you must return `nil`.

```swift
func makeView(element: TVViewElement, existingView: UIView?) -> UIView? {
    if element.name == "copyright" {
        let label = UILabel()
        label.font = UIFont.boldSystemFont(ofSize: 16)
        label.textColor = .black
        label.textAlignment = NSTextAlignment.center
        label.text = "Copyright information"
        return label
    }
    return nil
}
```

<a id="Access-the-Shared-Interface"></a>

### Access the Shared Interface

To enable your class to communicate with your JavaScript code, associate the class with the [shared()](tvinterfacefactory/shared%28%29.md) interface. Before setting the application controller, set the [extendedInterfaceCreator](tvinterfacefactory/extendedinterfacecreator.md) property to an instance of the class inside of the [application(\_:didFinishLaunchingWithOptions:)](../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) function:

```swift
TVInterfaceFactory.shared().extendedInterfaceCreator = CustomElements()
```

When complete, use the new element in your TVML code like any other element; for example, `<copyright/>`.

## See Also

### Custom Elements

- [TVElementFactory](tvelementfactory.md): Deprecated. An object used to register new elements to extend the Apple TV Markup Language (TVML).
- [TVImageElement](tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [TVTextElement](tvtextelement.md): Deprecated. The textual content for the DOM element.

# Creating TVML Elements (Objective-C)

**Framework:** TVMLKit  
**Kind:** Article

Avoid rewriting complex and often used elements by creating a simplified custom element.

<a id="overview"></a>

## Overview

The TVML template elements ensure structure and consistency between documents. However, there are times when applying the same modification to a particular element across a single or multiple documents becomes unwiedly. One such example is when you need to update an element that contains copyright information. By creating a new element that incorporates these changes, you can avoid having to apply the same modifications to each instance of the element.

<a id="Create-Your-Customization-Class"></a>

### Create Your Customization Class

Your element customization class is where you register any new elements and add the customization code. To start, create a new class that conforms to the [TVInterfaceCreating](tvinterfacecreating.md) protocol and import the UIKit and TVMLKit frameworks:

```swift
import UIKit
import TVMLKit

class CustomElements: NSObject, TVInterfaceCreating {
   ...
}
```

<a id="Register-Your-New-Element"></a>

### Register Your New Element

Before you can use a new element in your TVML code, register the element using the [registerViewElementClass:forElementName:](tvelementfactory/registerviewelementclass%28__elementname_%29.md) function. Call the [registerViewElementClass:forElementName:](tvelementfactory/registerviewelementclass%28__elementname_%29.md) in your class’s `init` function and assign a name to the new element. The JavaScript environment can now recognize the registered element. The following code creates the new TVML element, `<copyright/>`:

```swift
override init() {
    super.init()
    TVElementFactory.registerViewElementClass(TVTextElement.self, elementName: "copyright")
}
```

> **Important**

>  You must register all elements before initializing the [TVApplicationController](tvapplicationcontroller.md) object.

<a id="Customize-Your-New-Element"></a>

### Customize Your New Element

After registering the new element name, you need to customize the element. Implement the [viewForElement:existingView:](tvinterfacecreating/makeview%28element_existingview_%29.md) function in your custom class. The system automatically calls the [viewForElement:existingView:](tvinterfacecreating/makeview%28element_existingview_%29.md) function for every element in your TVML document. Check for the new element’s name and add the customization code. If the current element is not your new element, you must return `nil`.

```swift
func makeView(element: TVViewElement, existingView: UIView?) -> UIView? {
    if element.name == "copyright" {
        let label = UILabel()
        label.font = UIFont.boldSystemFont(ofSize: 16)
        label.textColor = .black
        label.textAlignment = NSTextAlignment.center
        label.text = "Copyright information"
        return label
    }
    return nil
}
```

<a id="Access-the-Shared-Interface"></a>

### Access the Shared Interface

To enable your class to communicate with your JavaScript code, associate the class with the [sharedInterfaceFactory](tvinterfacefactory/shared%28%29.md) interface. Before setting the application controller, set the [extendedInterfaceCreator](tvinterfacefactory/extendedinterfacecreator.md) property to an instance of the class inside of the [application:didFinishLaunchingWithOptions:](../uikit/uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) function:

```swift
TVInterfaceFactory.shared().extendedInterfaceCreator = CustomElements()
```

When complete, use the new element in your TVML code like any other element; for example, `<copyright/>`.

## See Also

### Custom Elements

- [TVElementFactory](tvelementfactory.md): Deprecated. An object used to register new elements to extend the Apple TV Markup Language (TVML).
- [TVImageElement](tvimageelement.md): Deprecated. A representation of a read-only DOM node containing the attributes that describe an image element.
- [TVTextElement](tvtextelement.md): Deprecated. The textual content for the DOM element.
