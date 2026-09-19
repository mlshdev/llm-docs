> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/cssm_apple_cl_csr_request/init(subjectnamex509:signaturealg:signatureoid:csphand:subjectpublickey:subjectprivatekey:challengestring:)

# init(subjectNameX509:signatureAlg:signatureOid:cspHand:subjectPublicKey:subjectPrivateKey:challengeString:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** macOS 10.0+

## Declaration

```swift
init(subjectNameX509: UnsafeMutablePointer<cssm_x509_name>!, signatureAlg: CSSM_ALGORITHMS, signatureOid: SecAsn1Oid, cspHand: CSSM_CSP_HANDLE, subjectPublicKey: UnsafePointer<cssm_key>!, subjectPrivateKey: UnsafePointer<cssm_key>!, challengeString: UnsafePointer<CChar>!)
```
