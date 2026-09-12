> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/exchangewebservices](https://developer.apple.com/documentation/devicemanagement/exchangewebservices)

# ExchangeWebServices

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Profile  
**Availability:** macOS 10.7+

The payload that configures an Exchange Web Services accounts.

## Declaration

```
object ExchangeWebServices
```

## Properties

- `allowMailDrop` — `boolean`: If `true`, the system enables Mail Drop.

  Available: macOS 10.12+  
  **Default:** `false`
- `AuthenticationCertificateUUID` — `string`: The UUID of the certificate payload within the same profile to use for the identity credential. Supported on macOS 10.11 or later. On macOS 10.12 or later use the PayloadCertificateUUID.

  Available: macOS 10.11+
- `EmailAddress` — `string`: The full email address for the account. If the email address string isn’t present in the payload, the device prompts for it during profile installation.
- `ExternalHost` — `string`: The external server address.
- `ExternalPath` — `string`: The external server path.
- `ExternalPort` — `integer`: The external server port number.
- `ExternalSSL` — `boolean`: If `true`, the system enables SSL for connections to the external server.
  **Default:** `true`
- `Host` — `string`: The Exchange server host name or IP address. Ignored if using OAuth.
- `OAuth` — `boolean`: If `true`, the system enables OAuth for authentication. Don’t specify a password if `OAuth` is `true`.

  Available: macOS 10.14+  
  **Default:** `false`
- `OAuthSignInURL` — `string`: The URL to load into a web view for authentication through OAuth when autodiscovery isn’t used. This setting requires a `Host` value.

  Available: macOS 10.14+
- `Password` — `string`: The password of the account. Use only with encrypted profiles.
- `Path` — `string`: The server path.
- `PayloadCertificateUUID` — `string`: The UUID of the certificate payload within the same profile to use for the identity credential. Supported on macOS 10.12 or later.

  Available: macOS 10.12+
- `Port` — `integer`: The server port number.
- `SSL` — `boolean`: If `true`, the system enables SSL.
  **Default:** `true`
- `UserName` — `string`: The user name for this Exchange account. Required for noninteractive installation, such as through MDM. If missing, the system prompts the user for it during interactive profile installation.

<a id="Discussion"></a>

## Discussion

Specify `com.apple.ews.account` as the payload type.

<a id="Profile-availability"></a>

### Profile availability

|  |  |
| --- | --- |
| Device channel | N/A |
| User channel | macOS |
| Allow manual install | macOS |
| Requires supervision | N/A |
| Requires user-approved MDM | N/A |
| Allowed in user enrollment | macOS |
| Allow multiple payloads | macOS |

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
                <key>EmailAddress</key>
                <string>juanchavez4@example.com</string>
                <key>ExternalHost</key>
                <string>host.example.com</string>
                <key>ExternalPath</key>
                <string></string>
                <key>ExternalSSL</key>
                <true/>
                <key>Host</key>
                <string>host.example.com</string>
                <key>MailNumberOfPastDaysToSync</key>
                <integer>0</integer>
                <key>Password</key>
                <string>Password123</string>
                <key>PayloadDisplayName</key>
                <string>Exchange Web Service</string>
                <key>PayloadIdentifier</key>
                <string>com.example.myewspayload</string>
                <key>PayloadType</key>
                <string>com.apple.ews.account</string>
                <key>PayloadUUID</key>
                <string>bb4adbbc-5516-45bb-bdee-cc7e47a5c5b5</string>
                <key>PayloadVersion</key>
                <integer>1</integer>
                <key>SSL</key>
                <true/>
                <key>UserName</key>
                <string>juanchavez4@example.com</string>
            </dict>
        </array>
        <key>PayloadDisplayName</key>
        <string>Exchange Web Service</string>
        <key>PayloadIdentifier</key>
        <string>com.example.myprofile</string>
        <key>PayloadType</key>
        <string>Configuration</string>
        <key>PayloadUUID</key>
        <string>ccb3eded-4486-4af8-81a3-add2d39cdfe7</string>
        <key>PayloadVersion</key>
        <integer>1</integer>
    </dict>
</plist>
```

## See Also

### Mail

- [ExchangeActiveSync](exchangeactivesync.md): The payload that configures Exchange ActiveSync accounts.
- [Mail](mail.md): The payload that configures a Mail account.
