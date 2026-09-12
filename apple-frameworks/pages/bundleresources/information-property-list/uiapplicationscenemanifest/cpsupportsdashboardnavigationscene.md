> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationscenemanifest/cpsupportsdashboardnavigationscene)

# CPSupportsDashboardNavigationScene

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.1+ · iPadOS 13.1+

A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Dashboard.

## Details

`CPSupportsDashboardNavigationScene`

<a id="Discussion"></a>

## Discussion

To declare support for displaying navigation content in the CarPlay Dashboard, add this key and set its value to YES. You specify the scene configurations using the [CPTemplateApplicationDashboardSceneSessionRoleApplication](uisceneconfigurations/cptemplateapplicationdashboardscenesessionroleapplication.md) key.

For more information, see [Displaying Content in CarPlay](https://developer.apple.com/documentation/carplay/displaying-content-in-carplay).

## See Also

### CarPlay

- [CPSupportsInstrumentClusterNavigationScene](cpsupportsinstrumentclusternavigationscene.md): A Boolean value that indicates whether your app supports displaying navigation content in the CarPlay Instrument Cluster.
