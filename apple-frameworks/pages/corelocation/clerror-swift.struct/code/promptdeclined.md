> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/code/promptdeclined](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/code/promptdeclined)

# CLError.Code.promptDeclined (Swift)

**Framework:** Core Location  
**Kind:** Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the user didn’t grant the requested temporary authorization.

## Declaration

```swift
case promptDeclined
```

<a id="Discussion"></a>

## Discussion

If the prompt was shown to the user, who declined, or if an error prevented the prompt from being displayed, then `requestTemporaryPreciseLocationAuthorization(withPurposeKey:completion:)` throws this error.

## See Also

### Getting general errors

- [CLError.Code.locationUnknown](locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [CLError.Code.denied](denied.md): A constant that indicates the user denied access to the location service.
- [CLError.Code.network](network.md): A constant that indicates the network was unavailable or a network error occurred.
- [CLError.Code.headingFailure](headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [CLError.Code.rangingUnavailable](rangingunavailable.md): A constant that indicates ranging is disabled.
- [CLError.Code.rangingFailure](rangingfailure.md): A constant that indicates a general ranging error occurred.

# kCLErrorPromptDeclined (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the user didn’t grant the requested temporary authorization.

## Declaration

```objectivec
kCLErrorPromptDeclined
```

<a id="Discussion"></a>

## Discussion

If the prompt was shown to the user, who declined, or if an error prevented the prompt from being displayed, then `requestTemporaryPreciseLocationAuthorization(withPurposeKey:completion:)` throws this error.

## See Also

### Getting general errors

- [kCLErrorLocationUnknown](locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [kCLErrorDenied](denied.md): A constant that indicates the user denied access to the location service.
- [kCLErrorNetwork](network.md): A constant that indicates the network was unavailable or a network error occurred.
- [kCLErrorHeadingFailure](headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [kCLErrorRangingUnavailable](rangingunavailable.md): A constant that indicates ranging is disabled.
- [kCLErrorRangingFailure](rangingfailure.md): A constant that indicates a general ranging error occurred.
