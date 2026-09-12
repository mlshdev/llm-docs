> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/fetchallsubscriptions](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/fetchallsubscriptions)

# fetchAllSubscriptions

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Fetches all subscriptions in the schema.

## Declaration

```
Promise<CloudKit.SubscriptionsResponse, CloudKit.CKError> fetchAllSubscriptions();
```

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.SubscriptionsResponse](../cloudkit.subscriptionsresponse.md) object , or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

See [Fetching Subscriptions (subscriptions/list)](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/GetSubscriptions.html#//apple_ref/doc/uid/TP40015240-CH16) in [CloudKit Web Services Reference](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/index.html#//apple_ref/doc/uid/TP40015240).

## See Also

### Subscribing to Changes

- [saveSubscriptions](savesubscriptions.md): Saves one or more subscriptions to record changes.
- [fetchSubscriptions](fetchsubscriptions.md): Fetches one or more subscriptions.
- [deleteSubscriptions](deletesubscriptions.md): Deletes one or more subscriptions.
