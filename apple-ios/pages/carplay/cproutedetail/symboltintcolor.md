> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cproutedetail/symboltintcolor](https://developer.apple.com/documentation/carplay/cproutedetail/symboltintcolor)

# symbolTintColor (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The symbolTintColor to apply to the label.

## Declaration

```swift
var symbolTintColor: UIColor? { get set }
```

<a id="discussion"></a>

## Discussion

The system requires a dynamic color that adapts to appearance changes. Static colors without light and dark variants fall back to the system default label color. Alpha components are ignored and all colors render at full opacity.

dynamic colors that adapt to light and dark appearances.

# symbolTintColor (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The symbolTintColor to apply to the label.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIColor * symbolTintColor;
```

<a id="discussion"></a>

## Discussion

The system requires a dynamic color that adapts to appearance changes. Static colors without light and dark variants fall back to the system default label color. Alpha components are ignored and all colors render at full opacity.

dynamic colors that adapt to light and dark appearances.
