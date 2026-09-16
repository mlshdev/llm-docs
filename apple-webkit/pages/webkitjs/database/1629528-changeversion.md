> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkitjs/database/1629528-changeversion

# changeVersion

**Interface language:** Data

**Framework:** WebKit JS  
**Kind:** Instance Method  
**Availability:** Safari Desktop 3.1+ · Safari Mobile 2.0+

## Declaration

```
void changeVersion(
    DOMString oldVersion, 
    DOMString newVersion, 
    optional SQLTransactionCallback? callback, 
    optional SQLTransactionErrorCallback? errorCallback, 
    optional VoidCallback? successCallback
);
```
