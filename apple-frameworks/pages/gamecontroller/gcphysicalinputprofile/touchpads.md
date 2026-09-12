> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/touchpads](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/touchpads)

# touchpads (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The touchpads in the profile as key-value pairs for lookup by name.

## Declaration

```swift
var touchpads: [String : GCControllerTouchpad] { get }
```

## See Also

### Accessing elements by name or key

- [elements](elements.md): The elements in the profile as key-value pairs for lookup by name.
- [buttons](buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [subscript(\_:)](subscript%28__%29.md): Returns the element that the key specifies.

# touchpads (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The touchpads in the profile as key-value pairs for lookup by name.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSDictionary<NSString *,GCControllerTouchpad *> * touchpads;
```

## See Also

### Accessing elements by name or key

- [elements](elements.md): The elements in the profile as key-value pairs for lookup by name.
- [buttons](buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [objectForKeyedSubscript:](subscript%28__%29.md): Returns the element that the key specifies.
