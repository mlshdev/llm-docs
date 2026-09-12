> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/appstoreconnectapi/buildbundle/relationships-data.dictionary/betaappclipinvocations-data.dictionary](https://developer.apple.com/documentation/appstoreconnectapi/buildbundle/relationships-data.dictionary/betaappclipinvocations-data.dictionary)

# BuildBundle.Relationships.BetaAppClipInvocations

**Interface language:** Data

**Framework:** App Store Connect API  
**Kind:** Object  
**Availability:** App Store Connect API 1.6+

The data, links, and paging information that describe the relationship between the Build Bundles and the Beta App Clip Invocations resources.

## Declaration

```
object BuildBundle.Relationships.BetaAppClipInvocations
```

## Properties

- `data` — `[BuildBundle.Relationships.BetaAppClipInvocations.Data]`: The ID and type of the related Beta App Clip Invocations resource.
- `links` — `RelationshipLinks`: Navigational links that include the self-link.
- `meta` — `PagingInformation`: The paging information.

## Topics

### Objects

- [BuildBundle.Relationships.BetaAppClipInvocations.Data](betaappclipinvocations-data.dictionary/data-data.dictionary.md): The type and ID of a related Beta App Clip Invocations resource.

## See Also

### Objects

- [BuildBundle.Relationships.AppClipDomainCacheStatus](appclipdomaincachestatus-data.dictionary.md): The data and links that describe the relationship between the Build Bundles and the App Clip Domain Cache Statuses resources.
- [BuildBundle.Relationships.AppClipDomainDebugStatus](appclipdomaindebugstatus-data.dictionary.md): The data and links that describe the relationship between the Build Bundles and the App Clip Domain Debug Statuses resources.
- [BuildBundle.Relationships.BuildBundleFileSizes](buildbundlefilesizes-data.dictionary.md): The data, links, and paging information that describe the relationship between the Build Bundles and the Build Bundle File Sizes resources.
