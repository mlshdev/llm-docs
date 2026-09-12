> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/identification](https://developer.apple.com/documentation/devicemanagement/identification)

# Identification

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+ (deprecated in 15.4)

The payload that configures the names of the account user.

## Declaration

```
object Identification
```

## Properties

- `PayloadIdentification` — `Identification.PayloadIdentification` (required): The dictionary that contains details about the user.

  Deprecated: macOS 15.4+

<a id="Discussion"></a>

## Discussion

Specify `com.apple.configurationprofile.identification` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | macOS |
| User channel | macOS |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | macOS |
| Allow multiple payloads | N/A |

<a id="Profile-example"></a>

### Profile example

```plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>PayloadContent</key>
    <array>
        <dict>
            <key>CalDAVAccountDescription</key>
            <string>My CalDAV Account</string>
            <key>CalDAVHostName</key>
            <string>server.example.com</string>
            <key>CalDAVPassword</key>
            <string>Password123</string>
            <key>CalDAVPort</key>
            <integer>443</integer>
            <key>CalDAVUseSSL</key>
            <true/>
            <key>CalDAVUsername</key>
            <string>juanchaves4@example.com</string>
            <key>PayloadIdentifier</key>
            <string>com.example.mycaldavpayload</string>
            <key>PayloadType</key>
            <string>com.apple.caldav.account</string>
            <key>PayloadUUID</key>
            <string>603409f1-b611-459d-9584-0ed12bc25b5b</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
        <dict>
            <key>PayloadIdentification</key>
            <dict>
                <key>UserName</key>
                <string>juanchaves4@example.com</string>
                <key>FullName</key>
                <string>Juan Chavez</string>
                <key>EmailAddress</key>
                <string>juanchaves4@example.com</string>
                <key>AuthMethod</key>
                <string>UserEnteredPassword</string>
                <key>Password</key>
                <string>Password123</string>
                <key>Prompt</key>
                <string>Prompt Hello</string>
                <key>PromptMessage</key>
                <string>Prompt Message</string>
            </dict>
            <key>PayloadType</key>
            <string>com.apple.configurationprofile.identification</string>
            <key>PayloadIdentifier</key>
            <string>com.example.myidentificationpayload</string>
            <key>PayloadUUID</key>
            <string>9afecc40-d89f-4d66-ba9a-73ce0f15f784</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Identification with CalDAV</string>
    <key>PayloadIdentifier</key>
    <string>com.example.myprofile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>4a430145-e362-4808-957c-b784a1092777</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [Identification.PayloadIdentification](identification/payloadidentification-data.dictionary.md): Deprecated. The dictionary containing details about the user.

## See Also

### Authentication

- [DirectoryService](directoryservice.md): The payload that configures an Active Directory (AD) domain.
- [ExtensibleSingleSignOn](extensiblesinglesignon.md): The payload that configures an app extension that performs single sign-on (SSO).
- [ExtensibleSingleSignOnKerberos](extensiblesinglesignonkerberos.md): The payload that configures an app extension that performs single sign-on with the Kerberos extension.
- [IdentityPreference](identitypreference.md): The payload that configures the user’s identity on the device.
- [SingleSignOn](singlesignon.md): Deprecated. The payload that configures single sign-on (SSO).
