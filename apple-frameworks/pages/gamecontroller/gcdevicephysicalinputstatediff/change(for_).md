> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputstatediff/change(for:)](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputstatediff/change(for:))

# change(for:) (Swift)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns whether the input value of an element changes.

## Declaration

```swift
func change(for element: any GCPhysicalInputElement) -> GCDevicePhysicalInputElementChange
```

## Parameters

- `element`: The element whose value changes.

<a id="return-value"></a>

## Return Value

Description of the change to the element.

## Mentioned In

- [Handling input events](../handling-input-events.md)

## See Also

### Getting changes

- [GCDevicePhysicalInputElementChange](../gcdevicephysicalinputelementchange.md): Possible values that describe whether the input value of an element changes.
- [changedElements()](changedelements%28%29-9cdq4.md): Returns the elements that changed since the previous input state.
- [changedElements()](changedelements%28%29-2zzwm.md): Returns the elements that changed since the previous input state.

# changeForElement: (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Returns whether the input value of an element changes.

## Declaration

```objectivec
- (GCDevicePhysicalInputElementChange) changeForElement:(id<GCPhysicalInputElement>) element;
```

## Parameters

- `element`: The element whose value changes.

<a id="return-value"></a>

## Return Value

Description of the change to the element.

## Mentioned In

- [Handling input events](../handling-input-events.md)

## See Also

### Getting changes

- [GCDevicePhysicalInputElementChange](../gcdevicephysicalinputelementchange.md): Possible values that describe whether the input value of an element changes.
- [changedElements](changedelements.md): Returns the elements that changed since the previous input state.
