> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsinstrumentclusternavigationscene

# CPSupportsInstrumentClusterNavigationScene

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 15.4+ · iPadOS 15.4+

A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.

## Details

`CPSupportsInstrumentClusterNavigationScene`

<a id="Discussion"></a>

## Discussion

To declare support for displaying navigation content in the CarPlay Instruments Cluster, add this key and set its value to YES. You specify the scene configurations using the [CPTemplateApplicationInstrumentClusterSceneSessionRoleApplication](uisceneconfigurations/cptemplateapplicationinstrumentclusterscenesessionroleapplication.md) key.

For more information, see [Displaying Content in CarPlay](https://developer.apple.com/documentation/carplay/displaying-content-in-carplay).

## See Also

### CarPlay

- [CPSupportsDashboardNavigationScene](cpsupportsdashboardnavigationscene.md): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.
