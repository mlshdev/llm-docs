> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcphysicalinputprofile/subscript(_:)](https://developer.apple.com/documentation/gamecontroller/gcphysicalinputprofile/subscript(_:))

# subscript(\_:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Subscript  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the element that the key specifies.

## Declaration

```swift
subscript(key: String) -> GCControllerElement? { get }
```

## Parameters

- `key`: A key that identifies an element.

<a id="return-value"></a>

## Return Value

The element that matches the key.

<a id="Discussion"></a>

## Discussion

You can access elements of a profile using a subscript notation. For example, get the button with the X label from an instance of [GCMicroGamepad](../gcmicrogamepad.md) using `microGamepad[”Button X”]`.

## See Also

### Accessing elements by name or key

- [elements](elements.md): The elements in the profile as key-value pairs for lookup by name.
- [buttons](buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.

# objectForKeyedSubscript: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

Returns the element that the key specifies.

## Declaration

```objectivec
- (GCControllerElement *) objectForKeyedSubscript:(NSString *) key;
```

## Parameters

- `key`: A key that identifies an element.

<a id="return-value"></a>

## Return Value

The element that matches the key.

<a id="Discussion"></a>

## Discussion

You can access elements of a profile using a subscript notation. For example, get the button with the X label from an instance of [GCMicroGamepad](../gcmicrogamepad.md) using `microGamepad[”Button X”]`.

## See Also

### Accessing elements by name or key

- [elements](elements.md): The elements in the profile as key-value pairs for lookup by name.
- [buttons](buttons.md): The buttons in the profile as key-value pairs for lookup by name.
- [axes](axes.md): The axes in the profile as key-value pairs for lookup by name.
- [dpads](dpads.md): The directional pads in the profile as key-value pairs for lookup by name.
- [touchpads](touchpads.md): The touchpads in the profile as key-value pairs for lookup by name.
