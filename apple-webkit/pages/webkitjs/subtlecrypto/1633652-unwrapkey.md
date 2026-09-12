> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/subtlecrypto/1633652-unwrapkey](https://developer.apple.com/documentation/webkitjs/subtlecrypto/1633652-unwrapkey)

# unwrapKey

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.0+ · Safari Mobile 10.0+

## Declaration

```
Promise <CryptoKey> unwrapKey(
    KeyFormat format, 
    BufferSource wrappedKey, 
    CryptoKey unwrappingKey, 
    AlgorithmIdentifier unwrapAlgorithm, 
    AlgorithmIdentifier unwrappedKeyAlgorithm, 
    boolean extractable, 
    sequence <KeyUsage> keyUsages
);
```
