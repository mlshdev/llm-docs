> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/remove-account-driven-enrollment-profile

# Remove Account-Driven Enrollment Profile

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.1+

Remove the Account-Driven Enrollment profile that the MDM server sets, which includes information about service discovery for account-driven enrollment.

## URL

```http
DELETE https://mdmenrollment.apple.com/account-driven-enrollment/profile
```

## Response Codes

- `200` OK:
- `400` Bad Request: - `ORG_NOT_SUPPORTED`: Indicates that the associated organization isn’t supported.

## See Also

### Account-driven enrollment service discovery

- [Assign Account-Driven Enrollment Service Discovery](assign-account-driven-enrollment-profile.md): The Account-Driven Enrollment profile defines key attributes related to service discovery for account-driven enrollment by MDM.
- [Fetch Account-Driven Enrollment Service Discovery](fetch-account-driven-enrollment-profile.md): Fetch the Account-Driven Enrollment profile that the MDM server sets, which includes information about service discovery for account-driven enrollment.
