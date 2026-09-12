> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustsettingsresult](https://developer.apple.com/documentation/security/ksectrustsettingsresult)

# kSecTrustSettingsResult (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A number indicating the effective trust setting for this usage constraints dictionary.

## Declaration

```swift
var kSecTrustSettingsResult: String { get }
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumber](../corefoundation/cfnumber.md) object containing an `SInt32` value.

# kSecTrustSettingsResult (Objective-C)

**Framework:** Security  
**Kind:** Macro  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A number indicating the effective trust setting for this usage constraints dictionary.

## Declaration

```objectivec
#define kSecTrustSettingsResult
```

<a id="Discussion"></a>

## Discussion

The value is a [CFNumberRef](../corefoundation/cfnumber.md) object containing an `SInt32` value.
