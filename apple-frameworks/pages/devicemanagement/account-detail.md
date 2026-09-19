> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/devicemanagement/account-detail

# Get Account Detail

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** Device Assignment Services 5.0+

Obtain the details for your account.

## URL

```http
GET https://mdmenrollment.apple.com/account
```

## Response Codes

- `200` OK — `AccountDetail`:
- `400` Bad Request:

<a id="Discussion"></a>

## Discussion

Each Mobile Device Management server must be registered with Apple. This endpoint provides details about the server entity to identify it uniquely throughout your organization. Each server is identifiable by either its system-generated unique identifier or by a user-provided name assigned by one of the organization’s users. Both the identifier and server name must be unique within your organization.

## Topics

### Response

- [AccountDetail](accountdetail.md): The response that contains the details for an account.
