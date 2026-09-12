> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/servicesaccountlinking](https://developer.apple.com/documentation/servicesaccountlinking)

# ServicesAccountLinking (Swift)

**Framework:** ServicesAccountLinking  
**Kind:** Framework  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Link reseller accounts with Apple Media & Purchases accounts.

<a id="Overview"></a>

## Overview

This framework enables applications to register reseller account identifiers or tokens with a user’s Apple Media & Purchases account. This functionality lets content providers and channel partners link their user accounts with Apple’s ecosystem.

To use this framework:

- Your application is enrolled in Apple’s channel partnership program.
- You have obtained partner credentials for generating tokens or identifiers.
- Your project targets iOS 16.4 or later.

If your application isn’t registered as an authorized partner, registration fails with a [notEligible](servicesaccountlinking/registrationerror/noteligible.md) error.  Contact the Apple channel partnership program to become an authorized partner.

## Topics

### Registration

- [ResellerAccount](servicesaccountlinking/reselleraccount.md): Reseller account type for linking with Apple Media & Purchases accounts.

### Error handling

- [RegistrationError](servicesaccountlinking/registrationerror.md): Registration error codes.
- [RegistrationErrorDomain](servicesaccountlinking/registrationerrordomain.md): Error domain for account registration failures.

### Variables

- [RegistrationErrorRetryAfterKey](servicesaccountlinking/registrationerrorretryafterkey.md): `userInfo` key whose value is an `NSNumber` containing the server-provided retry interval in seconds. Present on [rateLimited](servicesaccountlinking/registrationerror/ratelimited.md) errors.

# ServicesAccountLinking (Objective-C)

**Framework:** ServicesAccountLinking  
**Kind:** Framework  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Link reseller accounts with Apple Media & Purchases accounts.

<a id="Overview"></a>

## Overview

This framework enables applications to register reseller account identifiers or tokens with a user’s Apple Media & Purchases account. This functionality lets content providers and channel partners link their user accounts with Apple’s ecosystem.

To use this framework:

- Your application is enrolled in Apple’s channel partnership program.
- You have obtained partner credentials for generating tokens or identifiers.
- Your project targets iOS 16.4 or later.

If your application isn’t registered as an authorized partner, registration fails with a [notEligible](servicesaccountlinking/registrationerror/noteligible.md) error.  Contact the Apple channel partnership program to become an authorized partner.

## Topics

### Registration

- [SALResellerAccount](servicesaccountlinking/reselleraccount.md): Reseller account type for linking with Apple Media & Purchases accounts.

### Error handling

- [SALRegistrationErrorDomain](servicesaccountlinking/registrationerrordomain.md): Error domain for account registration failures.

### Variables

- [SALRegistrationErrorRetryAfterKey](servicesaccountlinking/registrationerrorretryafterkey.md): `userInfo` key whose value is an `NSNumber` containing the server-provided retry interval in seconds. Present on [rateLimited](servicesaccountlinking/registrationerror/ratelimited.md) errors.
- [ServicesAccountLinkingVersionNumber](servicesaccountlinking/servicesaccountlinkingversionnumber.md): Framework version number for ServicesAccountLinking.
- [ServicesAccountLinkingVersionString](servicesaccountlinking/servicesaccountlinkingversionstring.md): Framework version string for ServicesAccountLinking.

### Enumerations

- [SALRegistrationError](servicesaccountlinking/registrationerror/code.md): Registration error codes.
