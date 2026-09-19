> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/bundleresources/information-property-list/clkcomplicationprincipalclass

# CLKComplicationPrincipalClass

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** watchOS 2.0+

The name of the class that implements the complication data source protocol.

## Details

`CLKComplicationPrincipalClass`

<a id="Discussion"></a>

## Discussion

Xcode automatically includes this key in the information property list when you modify the WatchKit extension’s data source (General \> Complication Configuration \> Data Source class).

## See Also

### Launch

- [NSPrincipalClass](nsprincipalclass.md): The name of the bundle’s main executable class.
- [CFBundleExecutable](cfbundleexecutable.md): The name of the bundle’s executable file.
- [LSEnvironment](lsenvironment.md): Environment variables to set before launching the app.
- [UIApplicationShortcutItems](uiapplicationshortcutitems.md)
