> Snapshot-pinned source for Apple watchOS snapshot-49fd8d0a44e2: [documentation/watchkit/wkinterfaceobject/setalpha(_:)](https://developer.apple.com/documentation/watchkit/wkinterfaceobject/setalpha(_:))

# setAlpha(\_:) (Swift)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the opacity of the interface object.

## Declaration

```swift
func setAlpha(_ alpha: CGFloat)
```

## Parameters

- `alpha`: A floating-point number in the range `0.0` to `1.0`, where `0.0` represents totally transparent and `1.0` represents totally opaque.

<a id="Discussion"></a>

## Discussion

Use this property to make an object fully or partially transparent. A partially transparent object allows the color or background image associated with the containing group or interface controller show through. A fully transparent object cannot be seen but continues to occupy space in your interface.

Changes to the alpha value of an object are animatable.

## See Also

### Hiding and Showing an Object

- [setHidden(\_:)](sethidden%28__%29.md): Hides or shows the interface object in your user interface.

# setAlpha: (Objective-C)

**Framework:** WatchKit  
**Kind:** Instance Method  
**Availability:** watchOS 2.0+

Sets the opacity of the interface object.

## Declaration

```objectivec
- (void) setAlpha:(CGFloat) alpha;
```

## Parameters

- `alpha`: A floating-point number in the range `0.0` to `1.0`, where `0.0` represents totally transparent and `1.0` represents totally opaque.

<a id="Discussion"></a>

## Discussion

Use this property to make an object fully or partially transparent. A partially transparent object allows the color or background image associated with the containing group or interface controller show through. A fully transparent object cannot be seen but continues to occupy space in your interface.

Changes to the alpha value of an object are animatable.

## See Also

### Hiding and Showing an Object

- [setHidden:](sethidden%28__%29.md): Hides or shows the interface object in your user interface.
