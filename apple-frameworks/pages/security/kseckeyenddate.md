> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseckeyenddate](https://developer.apple.com/documentation/security/kseckeyenddate)

# kSecKeyEndDate (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Type `CSSM_DATE`.  Latest date at which this key may be used.  If the value is all zeros or not present, no restriction applies.

## Declaration

```swift
var kSecKeyEndDate: Int32 { get }
```

# kSecKeyEndDate (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** macOS 10.3+ (deprecated in 12.0)

Type `CSSM_DATE`.  Latest date at which this key may be used.  If the value is all zeros or not present, no restriction applies.

## Declaration

```objectivec
kSecKeyEndDate
```
