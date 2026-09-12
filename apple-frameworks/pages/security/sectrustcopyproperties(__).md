> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustcopyproperties(_:)](https://developer.apple.com/documentation/security/sectrustcopyproperties(_:))

# SecTrustCopyProperties(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · Mac Catalyst 2.0+ (deprecated in 15.0) · macOS 10.7+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Returns an array containing the properties of a trust object.

## Declaration

```swift
func SecTrustCopyProperties(_ trust: SecTrust) -> CFArray?
```

## Parameters

- `trust`: The trust object from which properties should be copied.

<a id="return-value"></a>

## Return Value

An array, or `NULL` if the trust object has not yet been evaluated. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this array’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The result is an ordered array of dictionaries, one per certificate in the chain, beginning with the leaf node at index zero (`0`) and continuing up to the anchor (or the last certificate in the chain if no anchor was found).

The property dictionary at index zero may also include general information about the entire chain’s validity in the context of this trust evaluation. See [Certificate Property Type Values](certificate-property-type-values.md) for a list of currently defined keys.

# SecTrustCopyProperties (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 2.0+ (deprecated in 15.0) · iPadOS 2.0+ (deprecated in 15.0) · macOS 10.7+ (deprecated in 12.0) · tvOS 9.0+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 1.0+ (deprecated in 8.0)

Returns an array containing the properties of a trust object.

## Declaration

```objectivec
CFArrayRefSecTrustCopyProperties(SecTrustRef trust);
```

## Parameters

- `trust`: The trust object from which properties should be copied.

<a id="return-value"></a>

## Return Value

An array, or `NULL` if the trust object has not yet been evaluated. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to free this array’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

The result is an ordered array of dictionaries, one per certificate in the chain, beginning with the leaf node at index zero (`0`) and continuing up to the anchor (or the last certificate in the chain if no anchor was found).

The property dictionary at index zero may also include general information about the entire chain’s validity in the context of this trust evaluation. See [Certificate Property Type Values](certificate-property-type-values.md) for a list of currently defined keys.
