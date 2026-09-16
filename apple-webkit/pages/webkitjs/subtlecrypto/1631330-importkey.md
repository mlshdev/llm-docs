> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkitjs/subtlecrypto/1631330-importkey

# importKey

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 9.0+ · Safari Mobile 9.0+

## Declaration

```
Promise <CryptoKey> importKey(
    KeyFormat format, 
    (BufferSource or JsonWebKey) keyData, 
    AlgorithmIdentifier algorithm, 
    boolen extractable, 
    sequence <CryptoKeyUsage> keyUsages
);
```
