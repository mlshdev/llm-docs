> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/app-store-connect-api-1-3-release-notes](https://developer.apple.com/documentation/appstoreconnectapi/app-store-connect-api-1-3-release-notes)

# App Store Connect API 1.3 release notes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Update your server-side code to use new features, and test your code against API changes.

<a id="overview"></a>

## Overview

App Store Connect API version 1.3 provides resources that enable you to automate actions you take in App Store Connect.

<a id="New-features"></a>

### New features

- The [App Infos](app-infos.md) resource adds an [Age Ratings](age-ratings.md) relationship.
- The [AgeRatingDeclaration.Attributes](ageratingdeclaration/attributes-data.dictionary.md) now separates the `gamblingAndContests` entry into two entries: `contests` and `gambling.`

<a id="Deprecations"></a>

### Deprecations

- The `GET-v1-appStoreVersions-{id}-ageRatingDeclaration` endpoint is now deprecated.
- The `ageRatingDeclaration` field within the [List all app store versions for an app](get-v1-apps-_id_-appstoreversions.md) endpoint is now deprecated.
- The `gamblingAndContests` entry of [AgeRatingDeclaration.Attributes](ageratingdeclaration/attributes-data.dictionary.md) is now deprecated.

## See Also

### Versions

- [App Store Connect API 4.4.1 release notes](app-store-connect-api-4-4-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.4 release notes](app-store-connect-api-4-4-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.3.1 release notes](app-store-connect-api-4-3-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.3 release notes](app-store-connect-api-4-3-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.2 release notes](app-store-connect-api-4-2-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.1 release notes](app-store-connect-api-4-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 4.0 release notes](app-store-connect-api-4-0-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.8 release notes](app-store-connect-api-3-8-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.7 release notes](app-store-connect-api-3-7-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.6 release notes](app-store-connect-api-3-6-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.5 release notes](app-store-connect-api-3-5-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.4 release notes](app-store-connect-api-3-4-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.3 release notes](app-store-connect-api-3-3-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.2 release notes](app-store-connect-api-3-2-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
- [App Store Connect API 3.1 release notes](app-store-connect-api-3-1-release-notes.md): Update your server-side code to use new features, and test your code against API changes.
