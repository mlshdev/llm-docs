> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/notifications](https://developer.apple.com/documentation/appstoreconnectapi/notifications)

# Notifications

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Add and read information for alternative distribution package notifications.

<a id="overview"></a>

## Overview

Alternative marketplaces can use the marketplace webhooks API [Add a Marketplace Webhook Configuration](post-v1-marketplacewebhooks.md) endpoint to set up an `endpointURL,` where the marketplace receives notifications about changes to apps that it distributes.

The most typical notifications are:

- A new app version is available.
- A specific app version needs to be removed.
- All versions of an app need to be removed.

To learn more about configuring a webhook URL using the API, see [Add a Marketplace Webhook Configuration](post-v1-marketplacewebhooks.md).

To learn more about server-side processing of marketplace webhook notifications, see [Processing alternative app marketplace notifications](https://developer.apple.com/documentation/marketplacekit/processing-alternative-marketplace-notifications).

> **Note**

>  To receive notifications for an app, the developer of an app distributed on an alternative marketplace must enable it in App Store Connect, to learn more see [Manage distribution on an alternative app marketplace](https://developer.apple.com/help/app-store-connect/distributing-apps-in-the-european-union/manage-distribution-on-an-alternative-app-marketplace). If a developer doesn’t opt-in to notifications, they must provide that alternative distribution ID to the marketplace so the marketplace can ingest the alternative distribution package. To learn more about server-side processing of marketplace webhooks, see [Processing alternative app marketplace notifications](https://developer.apple.com/documentation/marketplacekit/processing-alternative-marketplace-notifications).

## Topics

### Managing Webhook Endpoint URLs

- [Read Marketplace Webhook Information](get-v1-marketplacewebhooks.md): Deprecated. Get the endpoint URL for alternative distribution package notifications.
- [Add a Marketplace Webhook Configuration](post-v1-marketplacewebhooks.md): Deprecated. Add a new endpoint URL and secret for alternative distribution package notifications.
- [Modify a Marketplace Webhook Configuration](patch-v1-marketplacewebhooks-_id_.md): Deprecated. Update the endpoint URL and secret for alternative distribution package notifications.
- [Delete a Marketplace Webhook Configuration](delete-v1-marketplacewebhooks-_id_.md): Deprecated. Delete a specific marketplace notifcation endpoint URL.

### Objects

- [MarketplaceWebhook](marketplacewebhook.md): Deprecated. A webhook endpoint that receives event notifications from an alternative marketplace, such as app availability changes.
- [MarketplaceWebhookCreateRequest](marketplacewebhookcreaterequest.md): Deprecated. The request body you use to create a marketplace webhook url.
- [MarketplaceWebhookResponse](marketplacewebhookresponse.md): Deprecated. A response containing a single marketplace webhook endpoint configuration.
- [MarketplaceWebhooksResponse](marketplacewebhooksresponse.md): Deprecated. A response containing a list of webhook endpoints for an alternative marketplace.
- [MarketplaceWebhookUpdateRequest](marketplacewebhookupdaterequest.md): Deprecated. The request body you use to update a marketplace webhook url.

## See Also

### Alternative Distribution Packages and Notifications

- [Alternative Distribution Packages](alternative-distribution-packages.md): Create and read distribution packages for an alternative app distribution.
