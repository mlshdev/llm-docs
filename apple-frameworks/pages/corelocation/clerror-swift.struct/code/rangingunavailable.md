> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/code/rangingunavailable](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/code/rangingunavailable)

# CLError.Code.rangingUnavailable (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates ranging is disabled.

## Declaration

```swift
case rangingUnavailable
```

<a id="Discussion"></a>

## Discussion

This might happen if the device is in Airplane mode or if Bluetooth or location services are disabled.

## See Also

### Getting general errors

- [CLError.Code.locationUnknown](locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [CLError.Code.denied](denied.md): A constant that indicates the user denied access to the location service.
- [CLError.Code.promptDeclined](promptdeclined.md): A constant that indicates the user didn’t grant the requested temporary authorization.
- [CLError.Code.network](network.md): A constant that indicates the network was unavailable or a network error occurred.
- [CLError.Code.headingFailure](headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [CLError.Code.rangingFailure](rangingfailure.md): A constant that indicates a general ranging error occurred.

# kCLErrorRangingUnavailable (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates ranging is disabled.

## Declaration

```objectivec
kCLErrorRangingUnavailable
```

<a id="Discussion"></a>

## Discussion

This might happen if the device is in Airplane mode or if Bluetooth or location services are disabled.

## See Also

### Getting general errors

- [kCLErrorLocationUnknown](locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [kCLErrorDenied](denied.md): A constant that indicates the user denied access to the location service.
- [kCLErrorPromptDeclined](promptdeclined.md): A constant that indicates the user didn’t grant the requested temporary authorization.
- [kCLErrorNetwork](network.md): A constant that indicates the network was unavailable or a network error occurred.
- [kCLErrorHeadingFailure](headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [kCLErrorRangingFailure](rangingfailure.md): A constant that indicates a general ranging error occurred.
