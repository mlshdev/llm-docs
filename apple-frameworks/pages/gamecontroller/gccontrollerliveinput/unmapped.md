> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gccontrollerliveinput/unmapped](https://developer.apple.com/documentation/gamecontroller/gccontrollerliveinput/unmapped)

# unmapped (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The live input of a controller without any system-level remapping of the controls.

## Declaration

```swift
var unmapped: GCControllerLiveInput? { get }
```

<a id="Discussion"></a>

## Discussion

Players should use the system game controller settings to remap controls. If you implement your own controller remapping feature, use this property to access the controller’s physical input without remapping applied.

# unmappedInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

The live input of a controller without any system-level remapping of the controls.

## Declaration

```objectivec
@property (readonly, nullable) GCControllerLiveInput * unmappedInput;
```

<a id="Discussion"></a>

## Discussion

Players should use the system game controller settings to remap controls. If you implement your own controller remapping feature, use this property to access the controller’s physical input without remapping applied.
