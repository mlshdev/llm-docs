> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcpressedstateinput](https://developer.apple.com/documentation/gamecontroller/gcpressedstateinput)

# GCPressedStateInput (Swift)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for an element that has press state input, such as input from a button.

## Declaration

```swift
protocol GCPressedStateInput : NSObjectProtocol
```

## Topics

### Getting change information

- [isPressed](gcpressedstateinput/ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateTimestamp](gcpressedstateinput/lastpressedstatetimestamp.md): The time of the most recent press state change.
- [lastPressedStateLatency](gcpressedstateinput/lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.
- [pressedDidChangeHandler](gcpressedstateinput/presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.

### Getting user actions

- [sources](gcpressedstateinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Button elements and names

- [GCTouchedStateInput](gctouchedstateinput.md): The common properties for an element that has touch state input.

# GCPressedStateInput (Objective-C)

**Framework:** Game Controller  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The common properties for an element that has press state input, such as input from a button.

## Declaration

```objectivec
@protocol GCPressedStateInput <NSObject>
```

## Topics

### Getting change information

- [pressed](gcpressedstateinput/ispressed.md): A Boolean value that indicates whether the user presses the button.
- [lastPressedStateTimestamp](gcpressedstateinput/lastpressedstatetimestamp.md): The time of the most recent press state change.
- [lastPressedStateLatency](gcpressedstateinput/lastpressedstatelatency.md): The time in seconds between the last press state change and the current time.
- [pressedDidChangeHandler](gcpressedstateinput/presseddidchangehandler.md): The block that the profile calls when an element’s press state changes.

### Getting user actions

- [sources](gcpressedstateinput/sources.md): One or more physical actions the user performs to manipulate the input.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Button elements and names

- [GCTouchedStateInput](gctouchedstateinput.md): The common properties for an element that has touch state input.
- [GCInputButtonName](gcinputbuttonname.md): The Objective-C type for an input button name.
