> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/cloudkitjs/cloudkit.database/deletesubscriptions](https://developer.apple.com/documentation/cloudkitjs/cloudkit.database/deletesubscriptions)

# deleteSubscriptions

**Interface language:** Data

**Framework:** CloudKit JS  
**Kind:** Instance Method  
**Availability:** CloudKit JS 1.0+

Deletes one or more subscriptions.

## Declaration

```
Promise<CloudKit.SubscriptionsResponse, CloudKit.CKError> deleteSubscriptions(
	CloudKit.Subscription|CloudKit.Subscription[]|String|String[] subscriptions
);
```

## Parameters

- `subscriptions`: Possible values are:

  | Type | Description |
  | --- | --- |
  | [CloudKit.Subscription](../cloudkit.subscription.md) | A subscription in the database to delete. |
  | `CloudKit.Subscription[]` | An array of subscriptions to delete. |
  | `String` | The ID of a subscription to delete. |
  | `String[]` | An array of IDs of the subscriptions to delete. |

<a id="return-value"></a>

## Return Value

A `Promise` object that resolves to a [CloudKit.SubscriptionsResponse](../cloudkit.subscriptionsresponse.md) object, or rejects to a [CKError](../cloudkit/ckerror.md) object.

<a id="Discussion"></a>

## Discussion

See [Modifying Subscriptions (subscriptions/modify)](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/ModifySubscriptions.html#//apple_ref/doc/uid/TP40015240-CH18) in [CloudKit Web Services Reference](https://developer.apple.com/library/archive/documentation/DataManagement/Conceptual/CloudKitWebServicesReference/index.html#//apple_ref/doc/uid/TP40015240).

## See Also

### Subscribing to Changes

- [saveSubscriptions](savesubscriptions.md): Saves one or more subscriptions to record changes.
- [fetchSubscriptions](fetchsubscriptions.md): Fetches one or more subscriptions.
- [fetchAllSubscriptions](fetchallsubscriptions.md): Fetches all subscriptions in the schema.
