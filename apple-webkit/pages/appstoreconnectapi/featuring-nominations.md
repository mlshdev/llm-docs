> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/featuring-nominations](https://developer.apple.com/documentation/appstoreconnectapi/featuring-nominations)

# Featuring nominations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** API Collection

Tell Apple about a noteworthy app or update to an existing one for consideration for featuring opportunities.

<a id="overview"></a>

## Overview

When you launch a noteworthy app or make an important update to an existing one, you can nominate it for featuring by telling Apple about your plans in App Store Connect. To learn more, see [Getting featured on the App Store](https://developer.apple.com/app-store/getting-featured) and [Nominate your app for featuring](https://developer.apple.com/help/app-store-connect/manage-featuring-nominations/nominate-your-app-for-featuring).

## Topics

### Managing nominations

- [Create a Featuring Nomination](post-v1-nominations.md): Tell Apple about your upcoming app or feature.
- [List Nominations](get-v1-nominations.md): Get all featuring nominations.
- [Read Details for a Nomination](get-v1-nominations-_id_.md): Get information for a specific featuring nomination.
- [Modify a Nomination](patch-v1-nominations-_id_.md): Update a specific featuring nomination.
- [Delete a Featuring Nomination](delete-v1-nominations-_id_.md): Remove a specific featuring nomination.

### Objects

- [Nomination](nomination.md): A developer recommendation submitted to Apple proposing an app or in-app event for App Store editorial featuring.
- [NominationUpdateRequest](nominationupdaterequest.md): The request body you use to update a featuring nomination.
- [NominationCreateRequest](nominationcreaterequest.md): The request body you use to create a featuring nomination.
- [NominationResponse](nominationresponse.md): A response containing a single App Store nomination submission.
- [NominationsResponse](nominationsresponse.md): A response containing a list of app nominations submitted for App Store editorial featuring consideration.
