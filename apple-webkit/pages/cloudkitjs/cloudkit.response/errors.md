> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cloudkitjs/cloudkit.response/errors

# errors

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Property  
**Availability:** CloudKit JS 1.0+

Errors that occurred in the request.

## Declaration

```
readonly attribute CloudKit.CKError[] errors;
```

<a id="Discussion"></a>

## Discussion

There’s one [CKError](../cloudkit/ckerror.md) object for each individual operation that failed.

## See Also

### Handling Errors

- [hasErrors](haserrors.md): A Boolean value indicating whether errors occurred in the request.
