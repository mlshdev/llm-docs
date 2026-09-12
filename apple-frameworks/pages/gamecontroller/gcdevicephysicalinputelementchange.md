> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcdevicephysicalinputelementchange](https://developer.apple.com/documentation/gamecontroller/gcdevicephysicalinputelementchange)

# GCDevicePhysicalInputElementChange (Swift)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Possible values that describe whether the input value of an element changes.

## Declaration

```swift
enum GCDevicePhysicalInputElementChange
```

## Topics

### States

- [GCDevicePhysicalInputElementChange.unknownChange](gcdevicephysicalinputelementchange/unknownchange.md): It’s unknown whether there’s a change to the input value.
- [GCDevicePhysicalInputElementChange.noChange](gcdevicephysicalinputelementchange/nochange.md): There’s no change to the input value.
- [GCDevicePhysicalInputElementChange.changed](gcdevicephysicalinputelementchange/changed.md): There’s a change to the input value.

### Initializers

- [init(rawValue:)](gcdevicephysicalinputelementchange/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting changes

- [change(for:)](gcdevicephysicalinputstatediff/change%28for_%29.md): Returns whether the input value of an element changes.
- [changedElements()](gcdevicephysicalinputstatediff/changedelements%28%29-9cdq4.md): Returns the elements that changed since the previous input state.
- [changedElements()](gcdevicephysicalinputstatediff/changedelements%28%29-2zzwm.md): Returns the elements that changed since the previous input state.

# GCDevicePhysicalInputElementChange (Objective-C)

**Framework:** Game Controller  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Possible values that describe whether the input value of an element changes.

## Declaration

```objectivec
enum GCDevicePhysicalInputElementChange : NSInteger;
```

## Topics

### States

- [GCDevicePhysicalInputElementUnknownChange](gcdevicephysicalinputelementchange/unknownchange.md): It’s unknown whether there’s a change to the input value.
- [GCDevicePhysicalInputElementNoChange](gcdevicephysicalinputelementchange/nochange.md): There’s no change to the input value.
- [GCDevicePhysicalInputElementChanged](gcdevicephysicalinputelementchange/changed.md): There’s a change to the input value.

## See Also

### Getting changes

- [changeForElement:](gcdevicephysicalinputstatediff/change%28for_%29.md): Returns whether the input value of an element changes.
- [changedElements](gcdevicephysicalinputstatediff/changedelements.md): Returns the elements that changed since the previous input state.
