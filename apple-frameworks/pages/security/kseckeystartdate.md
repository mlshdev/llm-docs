> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseckeystartdate](https://developer.apple.com/documentation/security/kseckeystartdate)

# kSecKeyStartDate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.3+ (deprecated in 12.0) · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Type `CSSM_DATE`.  Earliest date at which this key may be used.  If the value is all zeros or not present, no restriction applies.

## Declaration

```swift
var kSecKeyStartDate: Int32 { get }
```

# kSecKeyStartDate (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Type `CSSM_DATE`.  Earliest date at which this key may be used.  If the value is all zeros or not present, no restriction applies.

## Declaration

```objectivec
kSecKeyStartDate
```
