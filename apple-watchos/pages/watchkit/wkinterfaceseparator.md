> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceseparator](https://developer.apple.com/documentation/watchkit/wkinterfaceseparator)

# WKInterfaceSeparator (Swift)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface object that displays a visual separator within a group.

## Declaration

```swift
class WKInterfaceSeparator
```

<a id="overview"></a>

## Overview

Use [WKInterfaceSeparator](wkinterfaceseparator.md) to manipulate a separator at runtime, such as changing its color. You can also use the inherited methods to show or hide it and configure other attributes.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a separator object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var mySeparator: WKInterfaceSeparator!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceSeparator* mySeparator;
```

During the initialization of your interface controller, WatchKit creates any needed separator objects and assigns them to their connected outlets. At that point, you can use those objects to make changes to the onscreen text.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your separator interface object in your storyboard file. The following table lists the attributes you can configure and their meaning.

| Attribute | Description |
| --- | --- |
| Color | The default color of the separator. You can also set this value programmatically using the [setColor(\_:)](wkinterfaceseparator/setcolor%28__%29.md) method. |

## Topics

### Configuring the Separator

- [setColor(\_:)](wkinterfaceseparator/setcolor%28__%29.md): Sets the color of the separator bar.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Containers

- [WKInterfaceGroup](wkinterfacegroup.md): A container for one or more interface objects.
- [WKInterfaceTable](wkinterfacetable.md): An object that creates and manages the contents of a single-column table interface.
- [WKInterfacePicker](wkinterfacepicker.md): An interface element that presents a scrolling list of items for the user to choose from.

# WKInterfaceSeparator (Objective-C)

**Framework:** WatchKit  
**Kind:** Class  
**Availability:** watchOS 2.0+

An interface object that displays a visual separator within a group.

## Declaration

```objectivec
@interface WKInterfaceSeparator : WKInterfaceObject
```

<a id="overview"></a>

## Overview

Use [WKInterfaceSeparator](wkinterfaceseparator.md) to manipulate a separator at runtime, such as changing its color. You can also use the inherited methods to show or hide it and configure other attributes.

Do not subclass or create instances of this class yourself. Instead, define outlets in your interface controller class and connect them to the corresponding objects in your storyboard file. For example, to refer to a separator object in your interface, define a property with the following syntax in your interface controller class:

**Swift**

```swift
@IBOutlet weak var mySeparator: WKInterfaceSeparator!
```

**Objective-C**

```objc
@property (weak, nonatomic) IBOutlet WKInterfaceSeparator* mySeparator;
```

During the initialization of your interface controller, WatchKit creates any needed separator objects and assigns them to their connected outlets. At that point, you can use those objects to make changes to the onscreen text.

<a id="Interface-Builder-Configuration-Options"></a>

### Interface Builder Configuration Options

Xcode lets you configure information about your separator interface object in your storyboard file. The following table lists the attributes you can configure and their meaning.

| Attribute | Description |
| --- | --- |
| Color | The default color of the separator. You can also set this value programmatically using the [setColor:](wkinterfaceseparator/setcolor%28__%29.md) method. |

## Topics

### Configuring the Separator

- [setColor:](wkinterfaceseparator/setcolor%28__%29.md): Sets the color of the separator bar.

## Relationships

### Inherits From

- [WKInterfaceObject](wkinterfaceobject.md)

## See Also

### Containers

- [WKInterfaceGroup](wkinterfacegroup.md): A container for one or more interface objects.
- [WKInterfaceTable](wkinterfacetable.md): An object that creates and manages the contents of a single-column table interface.
- [WKInterfacePicker](wkinterfacepicker.md): An interface element that presents a scrolling list of items for the user to choose from.
