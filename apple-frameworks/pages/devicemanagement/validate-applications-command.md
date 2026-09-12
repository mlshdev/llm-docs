> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/validate-applications-command](https://developer.apple.com/documentation/devicemanagement/validate-applications-command)

# Validate Applications

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 9.2+ · iPadOS 9.2+ · Mac Catalyst 9.2+ · tvOS 10.2+ · visionOS 1.1+

Force validation of developer and universal provisioning profiles for enterprise apps.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `ValidateApplicationsCommand`

The request object the server returns for the Validate Applications Command.

## Response Codes

- `200` OK — `ValidateApplicationsResponse`: The response object the system returns for the Validate Applications Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements, and to see an example request and response.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS, Shared iPad, tvOS, visionOS |
| User channel | N/A |
| Requires supervision | N/A |
| Allowed in user enrollment | iOS, visionOS |
| Required access right | AllowAppInstallation |

<a id="Example-request-and-response"></a>

### Example request and response

**Request**

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Command</key>
    <dict>
        <key>RequestType</key>
        <string>ValidateApplications</string>
    </dict>
    <key>CommandUUID</key>
    <string>0001_ValidateApplications</string>
</dict>
</plist>
```

**Response**

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>CommandUUID</key>
    <string>0001_ValidateApplications</string>
    <key>Status</key>
    <string>Acknowledged</string>
    <key>UDID</key>
    <string>00008020-000915083C80012E</string>
</dict>
</plist>
```

## Topics

### Commands and responses

- [ValidateApplicationsCommand](validateapplicationscommand.md): The command to force validation of developer and universal provisioning profiles for enterprise apps.
- [ValidateApplicationsResponse](validateapplicationsresponse.md): A response from the device after it processes the command to force validation of developer and universal provisioning profiles for enterprise apps.

## See Also

### Managed apps

- [Install Application](install-application-command.md): Install a third-party app on a device.
- [Install Enterprise Application](install-enterprise-application-command.md): Install an enterprise app on a device.
- [Installed Application List](installed-application-list-command.md): Get a list of the installed apps on a device.
- [Managed Application List](managed-application-list-command.md): Get the status of all managed apps on a device.
- [Remove Application](remove-application-command.md): Remove an app.
- [Apply Redemption Code](apply-redemption-code-command.md): Complete the installation of an app using a redemption code.
- [Managed Application Attributes](managed-application-attributes-command.md): Query attributes in managed apps on a device.
- [Managed Application Configuration](managed-application-configuration-command.md): Get app configurations from managed apps on a device.
- [Managed Application Feedback](managed-application-feedback-command.md): Get app feedback from a managed app on the device.
