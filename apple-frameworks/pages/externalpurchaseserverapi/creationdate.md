> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/externalpurchaseserverapi/creationdate](https://developer.apple.com/documentation/externalpurchaseserverapi/creationdate)

# creationDate

**Interface language:** Data

**Framework:** External Purchase Server API  
**Kind:** Type  
**Availability:** External Purchase Server API 1.0.0+

The UNIX date, in milliseconds, that the customer authorized the transaction.

## Declaration

```
int64 creationDate
```

<a id="Discussion"></a>

## Discussion

For refunds and other events, use the UNIX date, in milliseconds, of the transaction.

## See Also

### Providing transaction info

- [eventType](eventtype.md): The type of transaction the line item reports, whether it’s a buy or refund.
- [referenceLineItemId](referencelineitemid.md): The line item identifier of another transaction, that the report references.
