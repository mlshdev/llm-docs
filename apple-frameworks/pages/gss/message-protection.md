> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/message-protection](https://developer.apple.com/documentation/gss/message-protection)

# Message Protection (Swift)

**Framework:** GSS  
**Kind:** API Collection

Provide cryptographic protection to secure message integrity.

## Topics

### Message Wrapping and Verification

Apply a Message Integrity Code (MIC) to a message to guarantee its integrity. Ensure confidentiality using encryption and decryption.

- [gss_get_mic(\_:\_:\_:\_:\_:)](gss_get_mic%28__________%29.md): Returns a token that contains the MIC for a message.
- [gss_verify_mic(\_:\_:\_:\_:\_:)](gss_verify_mic%28__________%29.md): Returns an indication of whether the integrity of a message is intact, given its MIC token.
- [gss_wrap(\_:\_:\_:\_:\_:\_:\_:)](gss_wrap%28______________%29.md): Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unwrap(\_:\_:\_:\_:\_:\_:)](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign(\_:\_:\_:\_:\_:)](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify(\_:\_:\_:\_:\_:)](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal(\_:\_:\_:\_:\_:\_:\_:)](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal(\_:\_:\_:\_:\_:\_:)](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.

## See Also

### Messages

- [Token Management](token-management.md): Establish secure communication with tokens.
- [Kerberos Implementation](kerberos-implementation.md): Establish secure connections using the Kerberos implementation of GSS-API.

# Message Protection (Objective-C)

**Framework:** GSS  
**Kind:** API Collection

Provide cryptographic protection to secure message integrity.

## Topics

### Message Wrapping and Verification

Apply a Message Integrity Code (MIC) to a message to guarantee its integrity. Ensure confidentiality using encryption and decryption.

- [gss_get_mic](gss_get_mic%28__________%29.md): Returns a token that contains the MIC for a message.
- [gss_verify_mic](gss_verify_mic%28__________%29.md): Returns an indication of whether the integrity of a message is intact, given its MIC token.
- [gss_wrap](gss_wrap%28______________%29.md): Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unwrap](gss_unwrap%28____________%29.md): Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.
- [gss_sign](gss_sign%28__________%29.md): Deprecated. Returns a digital signature for a message.
- [gss_verify](gss_verify%28__________%29.md): Deprecated. Returns a flag that indicates the integrity of a message’s digital signature.
- [gss_seal](gss_seal%28______________%29.md): Deprecated. Returns a secure message created by calculating and attaching a MIC to the input message, and then optionally encrypting it.
- [gss_unseal](gss_unseal%28____________%29.md): Deprecated. Returns the original version of a secure message by optionally decrypting it and then extracting and verifying the attached MIC.

## See Also

### Messages

- [Token Management](token-management.md): Establish secure communication with tokens.
- [Kerberos Implementation](kerberos-implementation.md): Establish secure connections using the Kerberos implementation of GSS-API.
