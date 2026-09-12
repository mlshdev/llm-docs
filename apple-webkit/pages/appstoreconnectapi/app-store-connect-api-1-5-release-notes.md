> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/app-store-connect-api-1-5-release-notes](https://developer.apple.com/documentation/appstoreconnectapi/app-store-connect-api-1-5-release-notes)

# App Store Connect API 1.5 release notes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Article

Update your server-side code to use new features, and test your code against API changes.

<a id="overview"></a>

## Overview

App Store Connect API version 1.5 provides resources that enable you to automate actions you take in App Store Connect.

<a id="New-features"></a>

### New features

- [Xcode Cloud Workflows and Builds](xcode-cloud-workflows-and-builds.md) can now automate reading Xcode Cloud data, managing workflows, and starting builds.
- [App Store Version Release Requests](app-store-version-release-requests.md) now support manually releasing an App Store-approved version of your app to the App Store.
- The [BetaGroup.Attributes](betagroup/attributes-data.dictionary.md) adds an `isInternalGroup` property to support creating internal beta tester groups for TestFlight, in [Beta Groups](beta-groups.md).
- The [AppInfoLocalization.Attributes](appinfolocalization/attributes-data.dictionary.md) in [App Metadata](app-metadata.md) adds a `privacyChoicesURL` property.
- The API now supports JSON web tokens that can last longer than 20 minutes for resources that meet the required criteria. For more information, see [Generating Tokens for API Requests](generating-tokens-for-api-requests.md).

<a id="Deprecations"></a>

### Deprecations

- The `Advertising Identifier (IDFA) Declarations` resource and all its associated endpoints and objects are now deprecated, including: `Create an IDFA Declaration`, `Modify an IDFA Declaration`, `Delete an IDFA Declaration`, `Read the IDFA Declaration Information of an App Store Version`, `IdfaDeclaration`, `IdfaDeclarationCreateRequest`, `IdfaDeclarationUpdateRequest`, and `IdfaDeclarationResponse`.

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
