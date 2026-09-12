> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkitjs/subtlecrypto/2871243-derivekey](https://developer.apple.com/documentation/webkitjs/subtlecrypto/2871243-derivekey)

# deriveKey

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 10.1+ · Safari Mobile 10.1+

## Declaration

```
Promise <any> deriveKey(
    AlgorithmIdentifier algorithm, 
    CryptoKey baseKey, 
    AlgorithmIdentifier derivedKeyType, 
    boolean extractable, 
    sequence <KeyUsage> keyUsages
);
```
