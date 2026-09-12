> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/interfaceproperty](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/interfaceproperty)

# interfaceProperty (Swift)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The name of the outlet in your interface controller to which the object is bound.

## Declaration

```swift
var interfaceProperty: String { get }
```

<a id="Discussion"></a>

## Discussion

The string in this property corresponds to the name of a property in one of your [WKInterfaceController](../wkinterfacecontroller.md) subclasses. WatchKit uses this value internally to manage the connection between the interface object and the corresponding object on Apple Watch. You do not need to use this property directly.

# interfaceProperty (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Property  
**Availability:** watchOS 2.0+

The name of the outlet in your interface controller to which the object is bound.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * interfaceProperty;
```

<a id="Discussion"></a>

## Discussion

The string in this property corresponds to the name of a property in one of your [WKInterfaceController](../wkinterfacecontroller.md) subclasses. WatchKit uses this value internally to manage the connection between the interface object and the corresponding object on Apple Watch. You do not need to use this property directly.
