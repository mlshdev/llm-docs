> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/externalpurchaseserverapi/fieldname

# fieldName

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

A string that names a field of a line item.

## Declaration

```
string fieldName
```

<a id="Discussion"></a>

## Discussion

Error objects that the [Send External Purchase Report](send-external-purchase-report.md) endpoint returns may include a `fieldName`.

## See Also

### Error types

- [errorCode](errorcode.md): An integer value that represents an error in the External Purchase Server API.
- [errorMessage](errormessage.md): A string that describes an error.
