> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/territories](https://developer.apple.com/documentation/appstoreconnectapi/territories)

# Territories

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Get a list of active App Store storefronts in which you make your app available.

<a id="overview"></a>

## Overview

Use `territories` to get a list of active App Store storefronts in which to make your app available to customers. This is a read-only resource.

For more information see [Set availability for your app](https://developer.apple.com/help/app-store-connect/manage-your-apps-availability/select-regions).

## Topics

### Getting Territories

- [List territories](get-v1-territories.md): List all territories where the App Store operates.
- [List all territories for an end user license agreement](get-v1-enduserlicenseagreements-_id_-territories.md): List all the App Store territories to which a specific custom app license agreement applies.
- [List territory IDs for an end user license agreement](get-v1-enduserlicenseagreements-_id_-relationships-territories.md)

### Objects

- [Territory](territory.md): An App Store region (country or territory) where apps, subscriptions, and in-app purchases are offered.
- [TerritoryResponse](territoryresponse.md): The response body for endpoints that read a single App Store territory.
- [TerritoriesWithoutIncludesResponse](territorieswithoutincludesresponse.md): A response containing a list of App Store territories, without related resources.
- [TerritoriesResponse](territoriesresponse.md): The response body for endpoints that list available App Store territories.
