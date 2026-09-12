> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustsetkeychains(_:_:)](https://developer.apple.com/documentation/security/sectrustsetkeychains(_:_:))

# SecTrustSetKeychains(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Sets the keychains searched for intermediate certificates when evaluating a trust management object.

## Declaration

```swift
func SecTrustSetKeychains(_ trust: SecTrust, _ keychainOrArray: CFTypeRef?) -> OSStatus
```

## Parameters

- `trust`: The trust management object containing the certificate you want to evaluate. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. It can optionally also include other certificates to be used in verifying the first certificate. Use the [SecTrustCreateWithCertificates(\_:\_:\_:)](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.
- `keychainOrArray`: A keychain object for a single keychain to search, an array of keychain objects for a set of keychains to search, or `NULL` to search the user’s default keychain search list. To prevent the [SecTrustEvaluate(\_:\_:)](sectrustevaluate%28____%29.md) function from searching any keychains at all, pass a `CFArrayRef` array with no elements.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

By default, [SecTrustEvaluateWithError(\_:\_:)](sectrustevaluatewitherror%28____%29.md) uses the user’s keychain search list to look for intermediate certificates in the certificate chain. Use the `SecTrustSetKeychains` function to change the set of keychains to be searched. If you want to modify the default set of keychains, first call the `SecKeychainCopySearchList` function (see [Keychain services](keychain-services.md)) to obtain the current keychain search list, modify that set as you wish, and create a new search list. Then you can call `SecTrustSetKeychains` with the modified list.

Use the [SecTrustSetAnchorCertificates(\_:\_:)](sectrustsetanchorcertificates%28____%29.md) function to set the array of anchor certificates searched.

It is safe to call this function concurrently on two or more threads as long as it is not used to change the value of a trust management object that is simultaneously being used by another function. For example, you cannot call this function on one thread at the same time as you are calling the evaluation function for the same trust management object on another thread, but you can call this function and simultaneously evaluate a different trust management object on another thread. Similarly, calls to functions that return information about a trust management object (such as the [SecTrustCopyCustomAnchorCertificates(\_:\_:)](sectrustcopycustomanchorcertificates%28____%29.md) function) may fail or return an unexpected result if this function is simultaneously changing the same trust management object on another thread.

# SecTrustSetKeychains (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.3+ (deprecated in 10.13)

Sets the keychains searched for intermediate certificates when evaluating a trust management object.

## Declaration

```objectivec
OSStatus SecTrustSetKeychains(SecTrustRef trust, CFTypeRef keychainOrArray);
```

## Parameters

- `trust`: The trust management object containing the certificate you want to evaluate. A trust management object includes the certificate to be verified plus the policy or policies to be used in evaluating trust. It can optionally also include other certificates to be used in verifying the first certificate. Use the [SecTrustCreateWithCertificates](sectrustcreatewithcertificates%28______%29.md) function to create a trust management object.
- `keychainOrArray`: A keychain object for a single keychain to search, an array of keychain objects for a set of keychains to search, or `NULL` to search the user’s default keychain search list. To prevent the [SecTrustEvaluate](sectrustevaluate%28____%29.md) function from searching any keychains at all, pass a `CFArrayRef` array with no elements.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

By default, [SecTrustEvaluateWithError](sectrustevaluatewitherror%28____%29.md) uses the user’s keychain search list to look for intermediate certificates in the certificate chain. Use the `SecTrustSetKeychains` function to change the set of keychains to be searched. If you want to modify the default set of keychains, first call the `SecKeychainCopySearchList` function (see [Keychain services](keychain-services.md)) to obtain the current keychain search list, modify that set as you wish, and create a new search list. Then you can call `SecTrustSetKeychains` with the modified list.

Use the [SecTrustSetAnchorCertificates](sectrustsetanchorcertificates%28____%29.md) function to set the array of anchor certificates searched.

It is safe to call this function concurrently on two or more threads as long as it is not used to change the value of a trust management object that is simultaneously being used by another function. For example, you cannot call this function on one thread at the same time as you are calling the evaluation function for the same trust management object on another thread, but you can call this function and simultaneously evaluate a different trust management object on another thread. Similarly, calls to functions that return information about a trust management object (such as the [SecTrustCopyCustomAnchorCertificates](sectrustcopycustomanchorcertificates%28____%29.md) function) may fail or return an unexpected result if this function is simultaneously changing the same trust management object on another thread.
