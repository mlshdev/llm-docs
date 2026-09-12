> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpmaptemplate/mapbuttons](https://developer.apple.com/documentation/carplay/cpmaptemplate/mapbuttons)

# mapButtons (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of map buttons on the trailing bottom corner of the map template.

## Declaration

```swift
var mapButtons: [CPMapButton] { get set }
```

<a id="Discussion"></a>

## Discussion

When the array contains more than three buttons, the map template displays only the first three, ignoring the remaining buttons.

## See Also

### Managing Map Buttons

- [CPMapButton](../cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.

# mapButtons (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An array of map buttons on the trailing bottom corner of the map template.

## Declaration

```objectivec
@property (nonatomic, strong) NSArray<CPMapButton *> * mapButtons;
```

<a id="Discussion"></a>

## Discussion

When the array contains more than three buttons, the map template displays only the first three, ignoring the remaining buttons.

## See Also

### Managing Map Buttons

- [CPMapButton](../cpmapbutton.md): A button that represents an action that a map template displays on the CarPlay screen.
