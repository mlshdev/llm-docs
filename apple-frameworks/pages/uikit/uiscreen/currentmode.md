> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/currentmode](https://developer.apple.com/documentation/uikit/uiscreen/currentmode)

# currentMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

The current screen mode associated with the screen.

## Declaration

```swift
var currentMode: UIScreenMode? { get set }
```

```swift
var currentMode: UIScreenMode? { get }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the mode containing the highest resolution supported by the screen.

On iOS, you can change the value of this property to support different resolutions as needed. For example, you might want to lower the default resolution to one that your application supports more readily. The value must be one of the values described in the [availableModes](availablemodes.md) property.

On tvOS, the screen mode is read-only.

## See Also

### Managing screen modes

- [preferredMode](preferredmode.md): The preferred display mode for the screen.
- [availableModes](availablemodes.md): The display modes that can be associated with the screen.

# currentMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS

The current screen mode associated with the screen.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) UIScreenMode * currentMode;
```

```objectivec
@property (nonatomic, strong, readonly, nullable) UIScreenMode * currentMode;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is the mode containing the highest resolution supported by the screen.

On iOS, you can change the value of this property to support different resolutions as needed. For example, you might want to lower the default resolution to one that your application supports more readily. The value must be one of the values described in the [availableModes](availablemodes.md) property.

On tvOS, the screen mode is read-only.

## See Also

### Managing screen modes

- [preferredMode](preferredmode.md): The preferred display mode for the screen.
- [availableModes](availablemodes.md): The display modes that can be associated with the screen.
