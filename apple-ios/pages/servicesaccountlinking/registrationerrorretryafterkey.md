> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/servicesaccountlinking/registrationerrorretryafterkey

# RegistrationErrorRetryAfterKey (Swift)

**Framework:** ServicesAccountLinking  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

`userInfo` key whose value is an `NSNumber` containing the server-provided retry interval in seconds. Present on [rateLimited](registrationerror/ratelimited.md) errors.

## Declaration

```swift
let RegistrationErrorRetryAfterKey: String
```

# SALRegistrationErrorRetryAfterKey (Objective-C)

**Framework:** ServicesAccountLinking  
**Kind:** Global Variable  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

`userInfo` key whose value is an `NSNumber` containing the server-provided retry interval in seconds. Present on [rateLimited](registrationerror/ratelimited.md) errors.

## Declaration

```objectivec
static NSString * const SALRegistrationErrorRetryAfterKey;
```
