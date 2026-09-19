> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzefisignaturelist/initwithsignatures:

# initWithSignatures:

**Interface language:** Objective-C

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Creates a signature list from the provided signatures.

## Declaration

```objectivec
- (instancetype) initWithSignatures:(NSArray<VZEFISignature *> *) signatures;
```

<a id="return-value"></a>

## Return Value

A new signature list object containing the specified signatures.

<a id="discussion"></a>

## Discussion

- Parameter: signatures An array of EFI signatures. This array can contain a mix of X.509 certificates and cryptographic hashes (SHA-256).
