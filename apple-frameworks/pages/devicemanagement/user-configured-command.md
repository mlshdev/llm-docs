> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/user-configured-command](https://developer.apple.com/documentation/devicemanagement/user-configured-command)

# User Configured

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Web Service Endpoint  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Inform the device that it can continue past Setup Assistant and finish login.

## URL

```http
PUT https://yourmdmhost.example.com/mdm
```

## HTTP Body

Content type: `application/x-apple-aspen-mdm`

Type: `UserConfiguredCommand`

The request object the server returns for the User Configured Command.

## Response Codes

- `200` OK — `UserConfiguredResponse`: The response object the system returns for the User Configured Command.

<a id="Discussion"></a>

## Discussion

Refer to the following sections to determine supported channels and requirements.

<a id="Command-availability"></a>

### Command availability

|  |  |
| --- | --- |
| Device channel | iOS |
| User channel | N/A |
| Requires supervision | iOS |
| Allowed in user enrollment | N/A |
| Required access right | N/A |

## Topics

### Commands and responses

- [UserConfiguredCommand](userconfiguredcommand.md): The command to inform the device that it can continue past Setup Assistant and finish login.
- [UserConfiguredResponse](userconfiguredresponse.md): A response from the device after it processes the command to inform the device that it can continue past Setup Assistant and finish login.

## See Also

### Device details

- [Device Information](device-information-command.md): Get detailed information about a device.
- [Device Configured](device-configured-command.md): Inform the device that it can allow the user to continue in Setup Assistant.
- [Restrictions](restrictions-command.md): Get a list of restrictions on the device.
