> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/kseccodeinfotimestamp](https://developer.apple.com/documentation/security/kseccodeinfotimestamp)

# kSecCodeInfoTimestamp (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value indicates the actual signing date.

## Declaration

```swift
let kSecCodeInfoTimestamp: CFString
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDate](../corefoundation/cfdate.md) object describing the signing date as (securely) certified by a timestamp authority service. This timestamp cannot be falsified by the signer, and is trusted to the same degree as the timestamp service that created the timestamp.

# kSecCodeInfoTimestamp (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A key whose value indicates the actual signing date.

## Declaration

```objectivec
extern CFStringRef const kSecCodeInfoTimestamp;
```

<a id="Discussion"></a>

## Discussion

The value is a [CFDateRef](../corefoundation/cfdate.md) object describing the signing date as (securely) certified by a timestamp authority service. This timestamp cannot be falsified by the signer, and is trusted to the same degree as the timestamp service that created the timestamp.
