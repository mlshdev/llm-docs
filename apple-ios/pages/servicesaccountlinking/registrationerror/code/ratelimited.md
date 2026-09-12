> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/servicesaccountlinking/registrationerror/code/ratelimited](https://developer.apple.com/documentation/servicesaccountlinking/registrationerror/code/ratelimited)

# RegistrationError.Code.rateLimited (Swift)

**Framework:** ServicesAccountLinking  
**Kind:** Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The server rate-limited the request.

## Declaration

```swift
case rateLimited
```

<a id="discussion"></a>

## Discussion

Check the error’s `userInfo` for [RegistrationErrorRetryAfterKey](../../registrationerrorretryafterkey.md) to get the server-provided retry interval. If absent, use exponential backoff.

# SALRegistrationErrorRateLimited (Objective-C)

**Framework:** ServicesAccountLinking  
**Kind:** Enumeration Case  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

The server rate-limited the request.

## Declaration

```objectivec
SALRegistrationErrorRateLimited
```

<a id="discussion"></a>

## Discussion

Check the error’s `userInfo` for [SALRegistrationErrorRetryAfterKey](../../registrationerrorretryafterkey.md) to get the server-provided retry interval. If absent, use exponential backoff.
