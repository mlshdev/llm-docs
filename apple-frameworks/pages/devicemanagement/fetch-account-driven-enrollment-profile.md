> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/fetch-account-driven-enrollment-profile](https://developer.apple.com/documentation/devicemanagement/fetch-account-driven-enrollment-profile)

# Fetch Account-Driven Enrollment Service Discovery

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.1+

Fetch the Account-Driven Enrollment profile that the MDM server sets, which includes information about service discovery for account-driven enrollment.

## URL

```http
GET https://mdmenrollment.apple.com/account-driven-enrollment/profile
```

## Response Codes

- `200` OK — `GetAccountDrivenEnrollmentProfileResponse`:
- `400` Bad Request: - `ORG_NOT_SUPPORTED`: Indicates that the associated organization isn’t supported.
- `404` Not Found: - `NOT_FOUND`: Indicates that the system can’t find the MDM Service Discovery URL.

## Topics

### Supporting responses

- [GetAccountDrivenEnrollmentProfileResponse](getaccountdrivenenrollmentprofileresponse.md): The details for an account-driven enrollment profile.

## See Also

### Account-driven enrollment service discovery

- [Assign Account-Driven Enrollment Service Discovery](assign-account-driven-enrollment-profile.md): The Account-Driven Enrollment profile defines key attributes related to service discovery for account-driven enrollment by MDM.
- [Remove Account-Driven Enrollment Profile](remove-account-driven-enrollment-profile.md): Remove the Account-Driven Enrollment profile that the MDM server sets, which includes information about service discovery for account-driven enrollment.
