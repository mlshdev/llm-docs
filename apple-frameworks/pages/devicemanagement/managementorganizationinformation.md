> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managementorganizationinformation](https://developer.apple.com/documentation/devicemanagement/managementorganizationinformation)

# ManagementOrganizationInformation

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The declaration to configure the managing organization’s contact information.

## Declaration

```
object ManagementOrganizationInformation
```

## Properties

- `Email` — `string`: The email address of the contact person for the organization.
- `Name` — `string` (required): The name of the organization.
- `Proof` — `ManagementOrganizationInformationProofObject`: The additional properties that verify the identity and authenticity of the organization.
- `URL` — `string`: The website of the organization to contact for support.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.management.organization-info` as the declaration type.

<a id="Management-declaration-example"></a>

### Management declaration example

```json
{
    "Type": "com.apple.management.organization-info",
    "Identifier": "EB13EE2B-5D63-4EBA-810F-5B81D07F5017",
    "ServerToken": "E180CA9A-F089-4FA3-BBDF-94CC159C4AE8",
    "Payload": {
        "Name": "Example, Inc.",
        "Email": "admin@example.com",
        "URL": "https://site.example.com/support"
    }
}
```

## Topics

### Objects

- [ManagementOrganizationInformationProofObject](managementorganizationinformationproofobject.md): The additional properties that verify the identity and authenticity of the organization.

## See Also

### Management

- [ManagementProperties](managementproperties.md): The declaration to configure the properties on the device.
- [ManagementServerCapabilities](managementservercapabilities.md): The declaration to configure the server’s feature set.
