> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/elementconfiguration/path](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/elementconfiguration/path)

# path (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The Bezier path for the shape of an element.

## Declaration

```swift
var path: UIBezierPath? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the image of an element. The framework only supports custom paths for button elements.

## See Also

### Configuring elements

- [isHidden](ishidden.md): A Boolean value that determines whether the virtual controller hides the element.
- [actsAsTouchpad](actsastouchpad.md): A Boolean value that determines whether the thumbstick element behaves as a touchpad.

# path (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The Bezier path for the shape of an element.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIBezierPath * path;
```

<a id="Discussion"></a>

## Discussion

Use this property to customize the image of an element. The framework only supports custom paths for button elements.

## See Also

### Configuring elements

- [hidden](ishidden.md): A Boolean value that determines whether the virtual controller hides the element.
- [actsAsTouchpad](actsastouchpad.md): A Boolean value that determines whether the thumbstick element behaves as a touchpad.
