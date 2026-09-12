> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cktooljs/security](https://developer.apple.com/documentation/cktooljs/security)

# Security

**Interface language:** Data

**Framework:** CKTool JS  
**Kind:** Structure  
**Availability:** CKTool JS 1.2.15+

A dictionary of your authorization tokens.

## Declaration

```
dictionary Security {
	string? CloudKitAPITokenAuth;
	string? CloudKitWebAuthTokenAuth;
	string? ManagementTokenAuth;
	string? UserTokenAuth;
};
```

<a id="overview"></a>

## Overview

A dictionary that contains your management token, user token, or CloudKit tokens.

You pass this dictionary when creating an instance of a promises API class as one of its property values.

## Topics

### Instance Properties

- [CloudKitAPITokenAuth](security/cloudkitapitokenauth.md): Your CloudKit API token.
- [CloudKitWebAuthTokenAuth](security/cloudkitwebauthtokenauth.md): Your CloudKit Web Authentication token.
- [ManagementTokenAuth](security/managementtokenauth.md): Your management token.
- [UserTokenAuth](security/usertokenauth.md): Your user token.

## See Also

### Initialization

- [PromisesApi](promisesapi/promisesapi.md): Creates a `PromisesApi` object.
- [PromisesApiOptions](promisesapioptions.md): A dictionary of options for promises API classes.
