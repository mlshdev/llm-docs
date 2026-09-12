> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspressureconfiguration/init(pressurebehavior:)](https://developer.apple.com/documentation/appkit/nspressureconfiguration/init(pressurebehavior:))

# init(pressureBehavior:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS 10.10.3+

Initializes a pressure configuration object with a specified pressure behavior.

## Declaration

```swift
init(pressureBehavior: NSEvent.PressureBehavior)
```

## Parameters

- `pressureBehavior`: An `NSPressureBehavior` value that describes the behavior and progression for responding to pressure events.

<a id="return-value"></a>

## Return Value

A new pressure configuration object of type `NSPressureConfiguration` that describes how pressure events behave and progress.

<a id="Discussion"></a>

## Discussion

The initialized pressure configuration object is used to change the behavior and progression of the trackpad when responding to a mouse drag or pressure event sequence.

## See Also

### Related Documentation

- [NSEvent.PressureBehavior](../nsevent/pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.

### Creating a Pressure Configuration Object

- [set()](set%28%29.md): Changes the pressure configuration of the trackpad to the initialized pressure configuration.

# initWithPressureBehavior: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.10.3+

Initializes a pressure configuration object with a specified pressure behavior.

## Declaration

```objectivec
- (instancetype) initWithPressureBehavior:(NSPressureBehavior) pressureBehavior;
```

## Parameters

- `pressureBehavior`: An `NSPressureBehavior` value that describes the behavior and progression for responding to pressure events.

<a id="return-value"></a>

## Return Value

A new pressure configuration object of type `NSPressureConfiguration` that describes how pressure events behave and progress.

<a id="Discussion"></a>

## Discussion

The initialized pressure configuration object is used to change the behavior and progression of the trackpad when responding to a mouse drag or pressure event sequence.

## See Also

### Related Documentation

- [NSPressureBehavior](../nsevent/pressurebehavior-swift.enum.md): These constants describe the behavior and progression of a pressure gesture.

### Creating a Pressure Configuration Object

- [set](set%28%29.md): Changes the pressure configuration of the trackpad to the initialized pressure configuration.
