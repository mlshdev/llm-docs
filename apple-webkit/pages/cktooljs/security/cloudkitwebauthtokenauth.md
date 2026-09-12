> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/security/cloudkitwebauthtokenauth](https://developer.apple.com/documentation/cktooljs/security/cloudkitwebauthtokenauth)

# CloudKitWebAuthTokenAuth

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

Your CloudKit Web Authentication token.

## Declaration

```
attribute string? CloudKitWebAuthTokenAuth;
```

<a id="Discussion"></a>

## Discussion

If you are accessing user data using a CloudKit Web Authentication token, you set this to the token value.

Note: You must also set `CloudKitAPITokenAuth` if you set this value.

For more information on accessing CloudKit using a Web Authentication token, see https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/SettingUpWebServices.html#//apple_ref/doc/uid/TP40015240-CH24-SW1
