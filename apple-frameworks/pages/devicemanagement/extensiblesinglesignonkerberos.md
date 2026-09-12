> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/extensiblesinglesignonkerberos](https://developer.apple.com/documentation/devicemanagement/extensiblesinglesignonkerberos)

# ExtensibleSingleSignOnKerberos

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.1+

The payload that configures an app extension that performs single sign-on with the Kerberos extension.

## Declaration

```
object ExtensibleSingleSignOnKerberos
```

## Properties

- `ExtensionData` — `ExtensibleSingleSignOnKerberos.ExtensionData`: This is the dictionary used by the Apple built-in Kerberos extension.
- `ExtensionIdentifier` — `string` (required): Set this to `com.apple.AppSSOKerberos.KerberosExtension` for this extension.
  **Allowed values:** `com.apple.AppSSOKerberos.KerberosExtension`
- `Hosts` — `[string]`: One or more host or domain names for which the app extension performs SSO.

  The system:

  - Matches host or domain names case-insensitively
  - Requires that all the host and domain names of all installed Extensible SSO payloads are unique

  > **Note**

  >  Host names that begin with a “.” are wildcard suffixes that match all subdomains; otherwise the host name needs be an exact match.
- `Realm` — `string` (required): The Kerberos realm. Use proper capitalization for this value. If in an Active Directory forest, this is the realm where the user logs in.
- `TeamIdentifier` — `string` (required): Set this to `apple` for this extension.
  **Allowed values:** `apple`
- `Type` — `string` (required): Set this to `Credential` for this extension.
  **Allowed values:** `Credential`

<a id="Discussion"></a>

## Discussion

Specify `com.apple.extensiblesso` as the payload type.

This is a version of the profile that defines the specific keys and values needed for the Kerberos extension.

The system supports user channel installation in macOS 11 and later.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | iOS, macOS, visionOS |
| User channel | macOS, Shared iPad |
| Allow manual install | N/A |
| Requires supervision | N/A |
| Requires user-approved MDM | macOS |
| Allowed in user enrollment | iOS, macOS, visionOS |
| Allow multiple payloads | iOS, macOS, Shared iPad, visionOS |

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
            <key>ExtensionData</key>
            <dict>
                <key>useSiteAutoDiscovery</key>
                <true/>
            </dict>
            <key>ExtensionIdentifier</key>
            <string>com.apple.Extension</string>
            <key>TeamIdentifier</key>
            <string>RandomTeamID</string>
            <key>Hosts</key>
            <array>
                <string>url.example.com</string>
            </array>
            <key>Realm</key>
            <string>COM.URL.COM</string>
            <key>Type</key>
            <string>Credential</string>
            <key>PayloadIdentifier</key>
            <string>com.example.myessokpayload</string>
            <key>PayloadType</key>
            <string>com.apple.extensiblesso</string>
            <key>PayloadUUID</key>
            <string>86c12312-c278-41f1-bbe7-9422a1e40ca2</string>
            <key>PayloadVersion</key>
            <integer>1</integer>
        </dict>
    </array>
    <key>PayloadDisplayName</key>
    <string>Extensible SSO (Kerberos)</string>
    <key>PayloadIdentifier</key>
    <string>com.example.profile</string>
    <key>PayloadType</key>
    <string>Configuration</string>
    <key>PayloadUUID</key>
    <string>60bb7b2e-b94b-4f0d-848d-13c3a9857258</string>
    <key>PayloadVersion</key>
    <integer>1</integer>
</dict>
</plist>
```

## Topics

### Objects

- [ExtensibleSingleSignOnKerberos.ExtensionData](extensiblesinglesignonkerberos/extensiondata-data.dictionary.md): The additional data to pass to the app extension.

## See Also

### Authentication

- [DirectoryService](directoryservice.md): The payload that configures an Active Directory (AD) domain.
- [ExtensibleSingleSignOn](extensiblesinglesignon.md): The payload that configures an app extension that performs single sign-on (SSO).
- [Identification](identification.md): Deprecated. The payload that configures the names of the account user.
- [IdentityPreference](identitypreference.md): The payload that configures the user’s identity on the device.
- [SingleSignOn](singlesignon.md): Deprecated. The payload that configures single sign-on (SSO).
