> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cktooljs/authenticationrequirederror/redirecturl

# redirectUrl

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Instance Property  
**Availability:** CKTool JS 1.2.15+

A redirect URL for the user to securely sign in using their Apple ID.

## Declaration

```
attribute string redirectUrl;
```

<a id="Discussion"></a>

## Discussion

The Apple authentication service presents the actual sign-in page through this redirect URL so that the user’s credentials remain confidential.
