> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/authenticationrequirederror/redirecturl](https://developer.apple.com/documentation/cktooljs/authenticationrequirederror/redirecturl)

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
