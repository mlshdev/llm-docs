> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcvirtualcontroller/setposition(_:fordirectionpadelement:)](https://developer.apple.com/documentation/gamecontroller/gcvirtualcontroller/setposition(_:fordirectionpadelement:))

# setPosition(\_:forDirectionPadElement:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Changes the value of a directional pad element in the virtual controller.

## Declaration

```swift
func setPosition(_ position: CGPoint, forDirectionPadElement element: String)
```

## Parameters

- `position`: A point with `x` and `y` values in the range `[0.0, 1.0]`.
- `element`: The name of the directional pad element to update.

<a id="Discussion"></a>

## Discussion

Use this method to update the value of a directional pad in the virtual controller when you set the [isHidden](configuration/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true) and present your own virtual controller interface.

## See Also

### Presenting a custom interface

- [setValue(\_:forButtonElement:)](setvalue%28__forbuttonelement_%29.md): Changes the value of a button element in the virtual controller.

# setPosition:forDirectionPadElement: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Changes the value of a directional pad element in the virtual controller.

## Declaration

```objectivec
- (void) setPosition:(CGPoint) position forDirectionPadElement:(NSString *) element;
```

## Parameters

- `position`: A point with `x` and `y` values in the range `[0.0, 1.0]`.
- `element`: The name of the directional pad element to update.

<a id="Discussion"></a>

## Discussion

Use this method to update the value of a directional pad in the virtual controller when you set the [hidden](configuration/ishidden.md) property to [true](https://developer.apple.com/documentation/swift/true) and present your own virtual controller interface.

## See Also

### Presenting a custom interface

- [setValue:forButtonElement:](setvalue%28__forbuttonelement_%29.md): Changes the value of a button element in the virtual controller.
