> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/ksectrustrevocationchecked](https://developer.apple.com/documentation/security/ksectrustrevocationchecked)

# kSecTrustRevocationChecked (Swift)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the outcome of revocation checking during trust evaluation.

## Declaration

```swift
let kSecTrustRevocationChecked: CFString
```

<a id="Discussion"></a>

## Discussion

This key is only present if the evaluation process conducted revocation checking on the chain. The value is a Boolean set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if revocation checking was successful and none of the certificates in the chain were revoked. The value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) if no current revocation status could be obtained for one or more certificates in the chain due to connection problems or timeouts. You can take this outcome as a hint to retry revocation checking again at a later time.

# kSecTrustRevocationChecked (Objective-C)

**Framework:** Security  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A key whose value indicates the outcome of revocation checking during trust evaluation.

## Declaration

```objectivec
extern CFStringRef const kSecTrustRevocationChecked;
```

<a id="Discussion"></a>

## Discussion

This key is only present if the evaluation process conducted revocation checking on the chain. The value is a Boolean set to [kCFBooleanTrue](../corefoundation/kcfbooleantrue.md) if revocation checking was successful and none of the certificates in the chain were revoked. The value is [kCFBooleanFalse](../corefoundation/kcfbooleanfalse.md) if no current revocation status could be obtained for one or more certificates in the chain due to connection problems or timeouts. You can take this outcome as a hint to retry revocation checking again at a later time.
