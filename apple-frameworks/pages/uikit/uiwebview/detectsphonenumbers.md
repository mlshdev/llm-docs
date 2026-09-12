> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwebview/detectsphonenumbers](https://developer.apple.com/documentation/uikit/uiwebview/detectsphonenumbers)

# detectsPhoneNumbers

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0)

A Boolean value indicating whether telephone number detection is on.

> Use [dataDetectorTypes](datadetectortypes.md) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL detectsPhoneNumbers;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), telephone number detection is on; otherwise, [false](https://developer.apple.com/documentation/swift/false). If a webpage contains numbers that can be interpreted as phone numbers, but are not phone numbers, you can turn off telephone number detection by setting this property to [false](https://developer.apple.com/documentation/swift/false). The default value is [true](https://developer.apple.com/documentation/swift/true) on devices that have phone capabilities.

<a id="Special-considerations"></a>

### Special considerations

The functionality provided by this property has been superseded by the [dataDetectorTypes](datadetectortypes.md) property.
