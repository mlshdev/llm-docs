> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/getaccountdrivenenrollmentprofileresponse

# GetAccountDrivenEnrollmentProfileResponse

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** Device Assignment Services 5.1+

The details for an account-driven enrollment profile.

## Declaration

```
object GetAccountDrivenEnrollmentProfileResponse
```

## Properties

- `mdm_service_discovery_url` — `string`: The MDM Service Discovery URL that the MDM server sets for redirection during account-driven enrollment.
- `last_updated_timestamp` — `string`: The timestamp of the most-recent update for the MDM Service Discovery URL.
