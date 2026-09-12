> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/buttons](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/buttons)

# buttons (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The buttons in the profile as key-value pairs for lookup by name.

## Declaration

```swift
var buttons: [String : GCControllerButtonInput] { get }
```

<a id="Discussion"></a>

## Discussion

Use the [GCInputXboxPaddleOne](../gcinputxboxpaddleone-offv.md) constant to get the P1 paddle button for an Xbox controller.

```swift
button = physicalInputProfile.buttons[GCInputXboxPaddleOne]
```

For more button names, see [Extended gamepad input names](../extended-gamepad-input-names.md) and [Xbox controller input names](../xbox-controller-input-names.md).

## See Also

### Accessing elements by name or key

- [elements](elements.md): The elements in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.
- [subscript(\_:)](subscript%28__%29.md): Returns the element that the key specifies.

# buttons (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The buttons in the profile as key-value pairs for lookup by name.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDictionary<NSString *,GCControllerButtonInput *> * buttons;
```

<a id="Discussion"></a>

## Discussion

Use the [GCInputXboxPaddleOne](../gcinputxboxpaddleone-offv.md) constant to get the P1 paddle button for an Xbox controller.

```swift
button = physicalInputProfile.buttons[GCInputXboxPaddleOne]
```

For more button names, see [Extended gamepad input names](../extended-gamepad-input-names.md) and [Xbox controller input names](../xbox-controller-input-names.md).

## See Also

### Accessing elements by name or key

- [elements](elements.md): The elements in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the element that the key specifies.
