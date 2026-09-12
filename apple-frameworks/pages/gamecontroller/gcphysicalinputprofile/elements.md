> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/elements](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/elements)

# elements (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The elements in the profile as key-value pairs for lookup by name.

## Declaration

```swift
var elements: [String : GCControllerElement] { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to access elements by name. For example, use the name `“Button A”` to get the face button of an extended gamepad profile.

```swift
button = physicalInputProfile.elements[“Button A”]
```

For more button names, see [Extended gamepad input names](../extended-gamepad-input-names.md).

## See Also

### Accessing elements by name or key

- [buttons](buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.
- [subscript(\_:)](subscript%28__%29.md): Returns the element that the key specifies.

# elements (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The elements in the profile as key-value pairs for lookup by name.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDictionary<NSString *,GCControllerElement *> * elements;
```

<a id="Discussion"></a>

## Discussion

Use this property to access elements by name. For example, use the name `“Button A”` to get the face button of an extended gamepad profile.

```swift
button = physicalInputProfile.elements[“Button A”]
```

For more button names, see [Extended gamepad input names](../extended-gamepad-input-names.md).

## See Also

### Accessing elements by name or key

- [buttons](buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the element that the key specifies.
