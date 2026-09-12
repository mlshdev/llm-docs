> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/webhookdelivery](https://developer.apple.com/documentation/appstoreconnectapi/webhookdelivery)

# WebhookDelivery

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 4.0+

A recorded delivery attempt of an event notification to a webhook endpoint, including the request and response details.

## Declaration

```
object WebhookDelivery
```

## Properties

- `attributes` — `WebhookDelivery.Attributes`:
- `id` — `string` (required):
- `links` — `ResourceLinks`:
- `relationships` — `WebhookDelivery.Relationships`:
- `type` — `string` (required): **Allowed values:** `webhookDeliveries`

## Topics

### Dictionaries

- [WebhookDelivery.Attributes](webhookdelivery/attributes-data.dictionary.md): Attributes that describe a webhook delivery resource.
- [WebhookDelivery.Relationships](webhookdelivery/relationships-data.dictionary.md): The relationships you include in the request and those on which you can operate.

## See Also

### Objects and types

- [Webhook](webhook.md): A configured HTTP endpoint in App Store Connect that receives notifications when specific events occur.
- [WebhookCreateRequest](webhookcreaterequest.md): The request body for registering a webhook endpoint to receive App Store Connect event notifications.
- [WebhookDeliveriesResponse](webhookdeliveriesresponse.md): A response containing a list of webhook delivery records, each showing the outcome of a notification attempt.
- [WebhookDeliveryCreateRequest](webhookdeliverycreaterequest.md): The request body for retrying a failed webhook delivery.
- [WebhookDeliveryResponse](webhookdeliveryresponse.md): A response containing a single webhook delivery attempt record.
- [WebhookEvent](webhookevent.md): An event type that can trigger webhook notifications, such as build completion or review status changes.
- [WebhookPing](webhookping.md): A test payload sent to verify that a webhook endpoint is reachable and correctly configured.
- [WebhookPingCreateRequest](webhookpingcreaterequest.md): The request body for sending a test ping event to verify that a webhook endpoint is reachable.
- [WebhookPingResponse](webhookpingresponse.md): A response confirming that a test ping was sent to a webhook endpoint.
- [WebhookResponse](webhookresponse.md): The response body for endpoints that create, read, or modify a single webhook.
- [WebhookUpdateRequest](webhookupdaterequest.md): The request body you use to update a webhook update request.
- [WebhooksResponse](webhooksresponse.md): The response body for endpoints that list webhooks.
- [WebhookEventType](webhookeventtype.md): A string that represents the the event types for a webhook notification.
- [WebhookDeliveriesLinkagesResponse](webhookdeliverieslinkagesresponse.md)
- [AppWebhooksLinkagesResponse](appwebhookslinkagesresponse.md)
