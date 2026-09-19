> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appstoreserverapi/x5c

# x5c

**Interface language:** Data

**Framework:** App Store Server API  
**Kind:** Type  
**Availability:** App Store Server API 1.0+

The JSON Web Signature (JWS) header parameter that contains the certificate chain that corresponds to the key used to digitally sign the JWS.

## Declaration

```
[string] x5c
```

<a id="Discussion"></a>

## Discussion

For more information, or to download Apple’s root and intermediate certificates, see [Apple PKI](https://www.apple.com/certificateauthority/).

## See Also

### Data types

- [alg](alg.md): An algorithm used to sign a JSON Web Signature.
