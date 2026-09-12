> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clerror-swift.struct/promptdeclined](https://developer.apple.com/documentation/corelocation/clerror-swift.struct/promptdeclined)

# promptDeclined

**Framework:** Core Location  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A constant that indicates the user didn’t grant the requested temporary authorization.

## Declaration

```swift
static var promptDeclined: CLError.Code { get }
```

<a id="Discussion"></a>

## Discussion

If the prompt was shown to the user, who declined, or if an error prevented the prompt from being displayed, then `requestTemporaryPreciseLocationAuthorization(withPurposeKey:completion:)` throws this error.

## See Also

### Getting general errors

- [locationUnknown](locationunknown.md): A constant that indicates the location manager was unable to obtain a location value right now.
- [denied](denied.md): A constant that indicates the user denied access to the location service.
- [network](network.md): A constant that indicates the network was unavailable or a network error occurred.
- [headingFailure](headingfailure.md): A constant that indicates the location manager can’t determine the heading.
- [rangingUnavailable](rangingunavailable.md): A constant that indicates ranging is disabled.
- [rangingFailure](rangingfailure.md): A constant that indicates a general ranging error occurred.
- [CLError.Code](code.md): Error codes returned by the location manager object.
