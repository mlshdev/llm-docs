> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdatadetector/checkingtypes](https://developer.apple.com/documentation/foundation/nsdatadetector/checkingtypes)

# checkingTypes (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the checking types for the data detector.

## Declaration

```swift
var checkingTypes: NSTextCheckingTypes { get }
```

<a id="Discussion"></a>

## Discussion

The supported subset of checking types are specified in [NSTextCheckingResult.CheckingType](../nstextcheckingresult/checkingtype.md). Those constants can be combined using the C-bitwise OR operator.

Currently, the supported data detectors `checkingTypes` are:  [date](../nstextcheckingresult/checkingtype/date.md), [address](../nstextcheckingresult/checkingtype/address.md), [link](../nstextcheckingresult/checkingtype/link.md), `NSTextCheckingTypePhoneNumber`, and `NSTextCheckingTypeTransitInformation`.

# checkingTypes (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the checking types for the data detector.

## Declaration

```objectivec
@property (readonly) NSTextCheckingTypes checkingTypes;
```

<a id="Discussion"></a>

## Discussion

The supported subset of checking types are specified in [NSTextCheckingType](../nstextcheckingresult/checkingtype.md). Those constants can be combined using the C-bitwise OR operator.

Currently, the supported data detectors `checkingTypes` are:  [NSTextCheckingTypeDate](../nstextcheckingresult/checkingtype/date.md), [NSTextCheckingTypeAddress](../nstextcheckingresult/checkingtype/address.md), [NSTextCheckingTypeLink](../nstextcheckingresult/checkingtype/link.md), `NSTextCheckingTypePhoneNumber`, and `NSTextCheckingTypeTransitInformation`.
