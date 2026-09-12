> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatadetector/datadetectorwithtypes:error:](https://developer.apple.com/documentation/foundation/nsdatadetector/datadetectorwithtypes:error:)

# dataDetectorWithTypes:error:

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates and returns a new data detector instance.

## Declaration

```objectivec
+ (NSDataDetector *) dataDetectorWithTypes:(NSTextCheckingTypes) checkingTypes error:(NSError **) error;
```

## Parameters

- `checkingTypes`: The checking types. The supported checking types are a subset of the types specified in [NSTextCheckingType](../nstextcheckingresult/checkingtype.md). Those constants can be combined using the C-bitwise OR operator.
- `error`: An out parameter that if an error occurs during initialization contains the encountered error.

<a id="return-value"></a>

## Return Value

Returns the newly initialized data detector. If an error was encountered returns `nil`, and `error` contains the error.

<a id="Discussion"></a>

## Discussion

Currently, the supported data detectors `checkingTypes` are:  [NSTextCheckingTypeDate](../nstextcheckingresult/checkingtype/date.md), [NSTextCheckingTypeAddress](../nstextcheckingresult/checkingtype/address.md), [NSTextCheckingTypeLink](../nstextcheckingresult/checkingtype/link.md), `NSTextCheckingTypePhoneNumber`, and `NSTextCheckingTypeTransitInformation`.

## See Also

### Related Documentation

- [checkingTypes](checkingtypes.md): Returns the checking types for the data detector.

### Creating data detector instances

- [initWithTypes:error:](init%28types_%29.md): Initializes and returns a data detector instance.
