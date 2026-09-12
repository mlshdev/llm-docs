> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gctouchedstateinput](https://developer.apple.com/documentation/gamecontroller/gctouchedstateinput)

# GCTouchedStateInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for an element that has touch state input.

## Declaration

```swift
protocol GCTouchedStateInput : NSObjectProtocol
```

## Topics

### Getting change information

- [isTouched](gctouchedstateinput/istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateTimestamp](gctouchedstateinput/lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [lastTouchedStateLatency](gctouchedstateinput/lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.
- [touchedDidChangeHandler](gctouchedstateinput/toucheddidchangehandler.md): A block that the element calls when its touch value changes.

### Getting user actions

- [sources](gctouchedstateinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Button elements and names

- [GCPressedStateInput](gcpressedstateinput.md): The common properties for an element that has press state input, such as input from a button.

# GCTouchedStateInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for an element that has touch state input.

## Declaration

```objectivec
@protocol GCTouchedStateInput <NSObject>
```

## Topics

### Getting change information

- [touched](gctouchedstateinput/istouched.md): A Boolean value that indicates whether the user touches the button.
- [lastTouchedStateTimestamp](gctouchedstateinput/lasttouchedstatetimestamp.md): The time of the most recent touch state change.
- [lastTouchedStateLatency](gctouchedstateinput/lasttouchedstatelatency.md): The time in seconds between the last touch state change and the current time.
- [touchedDidChangeHandler](gctouchedstateinput/toucheddidchangehandler.md): A block that the element calls when its touch value changes.

### Getting user actions

- [sources](gctouchedstateinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Button elements and names

- [GCPressedStateInput](gcpressedstateinput.md): The common properties for an element that has press state input, such as input from a button.
- [GCInputButtonName](gcinputbuttonname.md): The Objective-C type for an input button name.
