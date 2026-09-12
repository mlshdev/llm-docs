> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/setvalue(_:forbuttonelement:)](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/setvalue(_:forbuttonelement:))

# setValue(\_:forButtonElement:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Changes the value of a button element in the virtual controller.

## Declaration

```swift
func setValue(_ value: CGFloat, forButtonElement element: String)
```

## Parameters

- `value`: A value in the range `[-1.0, 1.0]`.
- `element`: The name of the button element to update.

<a id="Discussion"></a>

## Discussion

Use this method to update the value of a button element in the virtual controller when you set the [isHidden](configuration/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true) and present your own virtual controller interface.

## See Also

### Presenting a custom interface

- [setPosition(\_:forDirectionPadElement:)](setposition%28__fordirectionpadelement_%29.md): Changes the value of a directional pad element in the virtual controller.

# setValue:forButtonElement: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Changes the value of a button element in the virtual controller.

## Declaration

```objectivec
- (void) setValue:(CGFloat) value forButtonElement:(NSString *) element;
```

## Parameters

- `value`: A value in the range `[-1.0, 1.0]`.
- `element`: The name of the button element to update.

<a id="Discussion"></a>

## Discussion

Use this method to update the value of a button element in the virtual controller when you set the [hidden](configuration/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true) and present your own virtual controller interface.

## See Also

### Presenting a custom interface

- [setPosition:forDirectionPadElement:](setposition%28__fordirectionpadelement_%29.md): Changes the value of a directional pad element in the virtual controller.
