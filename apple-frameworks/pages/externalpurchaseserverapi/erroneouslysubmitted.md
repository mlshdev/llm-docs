> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/erroneouslysubmitted](https://developer.apple.com/documentation/externalpurchaseserverapi/erroneouslysubmitted)

# erroneouslySubmitted

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

A Boolean value that indicates whether a line item was submitted in error.

## Declaration

```
boolean erroneouslySubmitted
```

## Mentioned In

- [Reporting corrections](reportcorrections.md)

<a id="Discussion"></a>

## Discussion

Only use this field when submitting corrections to a report. Set this field to `true` to indicate that you previously submitted the line item erroneously. This effectively undoes the line item submission. When submitting a correction, set the [restatement](restatement.md) field to `true`.

For more information on correcting previously submitted line items, see [Reporting corrections](reportcorrections.md).

## See Also

### Submitting corrections

- [restatement](restatement.md): A Boolean value that indicates a line item contains a correction.
