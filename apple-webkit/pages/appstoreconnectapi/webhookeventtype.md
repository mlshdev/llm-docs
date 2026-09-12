> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/webhookeventtype](https://developer.apple.com/documentation/appstoreconnectapi/webhookeventtype)

# WebhookEventType

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Type  
**Availability:** App Store Connect API 4.0+

A string that represents the the event types for a webhook notification.

## Declaration

```
string WebhookEventType
```

## Possible Values

- `BETA_FEEDBACK_CRASH_SUBMISSION_CREATED`:
- `BETA_FEEDBACK_SCREENSHOT_SUBMISSION_CREATED`:
- `ALTERNATIVE_DISTRIBUTION_PACKAGE_VERSION_CREATED`:
- `ALTERNATIVE_DISTRIBUTION_PACKAGE_AVAILABLE_UPDATED`:
- `ALTERNATIVE_DISTRIBUTION_TERRITORY_AVAILABILITY_UPDATED`:
- `APP_STORE_VERSION_APP_VERSION_STATE_UPDATED`:
- `BACKGROUND_ASSET_VERSION_APP_STORE_RELEASE_STATE_UPDATED`:
- `BACKGROUND_ASSET_VERSION_EXTERNAL_BETA_RELEASE_STATE_UPDATED`:
- `BACKGROUND_ASSET_VERSION_INTERNAL_BETA_RELEASE_CREATED`:
- `BACKGROUND_ASSET_VERSION_STATE_UPDATED`:
- `BUILD_BETA_DETAIL_EXTERNAL_BUILD_STATE_UPDATED`:
- `BUILD_UPLOAD_STATE_UPDATED`:

## Mentioned In

- [Understanding webhook events](webhook-events.md)

## See Also

### Objects and types

- [Webhook](webhook.md): A configured HTTP endpoint in App Store Connect that receives notifications when specific events occur.
- [WebhookCreateRequest](webhookcreaterequest.md): The request body for registering a webhook endpoint to receive App Store Connect event notifications.
- [WebhookDeliveriesResponse](webhookdeliveriesresponse.md): A response containing a list of webhook delivery records, each showing the outcome of a notification attempt.
- [WebhookDelivery](webhookdelivery.md): A recorded delivery attempt of an event notification to a webhook endpoint, including the request and response details.
- [WebhookDeliveryCreateRequest](webhookdeliverycreaterequest.md): The request body for retrying a failed webhook delivery.
- [WebhookDeliveryResponse](webhookdeliveryresponse.md): A response containing a single webhook delivery attempt record.
- [WebhookEvent](webhookevent.md): An event type that can trigger webhook notifications, such as build completion or review status changes.
- [WebhookPing](webhookping.md): A test payload sent to verify that a webhook endpoint is reachable and correctly configured.
- [WebhookPingCreateRequest](webhookpingcreaterequest.md): The request body for sending a test ping event to verify that a webhook endpoint is reachable.
- [WebhookPingResponse](webhookpingresponse.md): A response confirming that a test ping was sent to a webhook endpoint.
- [WebhookResponse](webhookresponse.md): The response body for endpoints that create, read, or modify a single webhook.
- [WebhookUpdateRequest](webhookupdaterequest.md): The request body you use to update a webhook update request.
- [WebhooksResponse](webhooksresponse.md): The response body for endpoints that list webhooks.
- [WebhookDeliveriesLinkagesResponse](webhookdeliverieslinkagesresponse.md)
- [AppWebhooksLinkagesResponse](appwebhookslinkagesresponse.md)
