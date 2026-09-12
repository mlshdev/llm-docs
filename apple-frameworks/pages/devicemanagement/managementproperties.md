> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/managementproperties](https://developer.apple.com/documentation/devicemanagement/managementproperties)

# ManagementProperties

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Object  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.1+ · watchOS 10.0+

The declaration to configure the properties on the device.

## Declaration

```
object ManagementProperties
```

<a id="Discussion"></a>

## Discussion

Specify `com.apple.management.properties` as the declaration type.

<a id="Management-declaration-example"></a>

### Management declaration example

```json
{
    "Type": "com.apple.management.properties",
    "Identifier": "187C9F47-297C-4811-80C4-2E19D3C11963",
    "ServerToken": "526CE2FB-DB79-409A-825D-8C5DC5EE873E",
    "Payload": {
        "is-part-time": false,
        "groups": [
            "teacher",
            "grade 1",
            "grade 2",
            "it-admin"
        ]
    }
}
```

## See Also

### Management

- [ManagementOrganizationInformation](managementorganizationinformation.md): The declaration to configure the managing organization’s contact information.
- [ManagementServerCapabilities](managementservercapabilities.md): The declaration to configure the server’s feature set.
