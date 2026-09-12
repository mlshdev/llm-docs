> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/assign-account-driven-enrollment-profile](https://developer.apple.com/documentation/devicemanagement/assign-account-driven-enrollment-profile)

# Assign Account-Driven Enrollment Service Discovery

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.1+

The Account-Driven Enrollment profile defines key attributes related to service discovery for account-driven enrollment by MDM.

## URL

```http
POST https://mdmenrollment.apple.com/account-driven-enrollment/profile
```

## HTTP Body

Content type: `application/json`

Type: `AccountDrivenEnrollmentProfileRequest`

The profile request for this account-driven enrollment.

## Response Codes

- `200` OK:
- `400` Bad Request: - `MDM_SERVICE_DISCOVERY_URL_REQUIRED`: Indicates that the MDM Service Discovery URL is missing in the request.
  - `MDM_SERVICE_DISCOVERY_URL_NOT_VALID`: Indicates that the provided MDM Service Discovery URL may be incorrectly formatted or doesn’t belong to the required HTTPS scheme.
  - `ORG_NOT_SUPPORTED`: Indicates that the associated organization isn’t supported.

## Mentioned In

- [Implementing the simple authentication account-driven enrollment flow](implementing-the-simple-authentication-account-driven-enrollment-flow.md)

<a id="overview"></a>

## Overview

This profile includes the MDM Service Discovery URL, which redirects users to the MDM server to start the enrollment process during account-driven enrollment.

## Topics

### Supporting requests

- [AccountDrivenEnrollmentProfileRequest](accountdrivenenrollmentprofilerequest.md): The details for an account-driven enrollment profile.

## See Also

### Account-driven enrollment service discovery

- [Fetch Account-Driven Enrollment Service Discovery](fetch-account-driven-enrollment-profile.md): Fetch the Account-Driven Enrollment profile that the MDM server sets, which includes information about service discovery for account-driven enrollment.
- [Remove Account-Driven Enrollment Profile](remove-account-driven-enrollment-profile.md): Remove the Account-Driven Enrollment profile that the MDM server sets, which includes information about service discovery for account-driven enrollment.
