> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbundle/relationships-data.dictionary/buildbundlefilesizes-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/buildbundle/relationships-data.dictionary/buildbundlefilesizes-data.dictionary)

# BuildBundle.Relationships.BuildBundleFileSizes

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data, links, and paging information that describe the relationship between the Build Bundles and the Build Bundle File Sizes resources.

## Declaration

```
object BuildBundle.Relationships.BuildBundleFileSizes
```

## Properties

- `data` — `[BuildBundle.Relationships.BuildBundleFileSizes.Data]`: The ID and type of the related Build Bundle File Sizes resource.
- `links` — `RelationshipLinks`: Navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## Mentioned In

- [App Store Connect API 1.6 release notes](../../app-store-connect-api-1-6-release-notes.md)

## Topics

### Objects

- [BuildBundle.Relationships.BuildBundleFileSizes.Data](buildbundlefilesizes-data.dictionary/data-data.dictionary.md): The type and ID of a related Build Bundle File Sizes resource.

## See Also

### Objects

- [BuildBundle.Relationships.AppClipDomainCacheStatus](appclipdomaincachestatus-data.dictionary.md): The data and links that describe the relationship between the Build Bundles and the App Clip Domain Cache Statuses resources.
- [BuildBundle.Relationships.AppClipDomainDebugStatus](appclipdomaindebugstatus-data.dictionary.md): The data and links that describe the relationship between the Build Bundles and the App Clip Domain Debug Statuses resources.
- [BuildBundle.Relationships.BetaAppClipInvocations](betaappclipinvocations-data.dictionary.md): The data, links, and paging information that describe the relationship between the Build Bundles and the Beta App Clip Invocations resources.
