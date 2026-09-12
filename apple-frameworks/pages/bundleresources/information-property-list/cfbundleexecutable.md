> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/cfbundleexecutable](https://developer.apple.com/documentation/bundleresources/information-property-list/cfbundleexecutable)

# CFBundleExecutable

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The name of the bundle’s executable file.

## Details

`CFBundleExecutable`

<a id="Discussion"></a>

## Discussion

For an app, this key is the executable. For a loadable bundle, it’s the binary that’s loaded dynamically by the bundle. For a framework, it’s the shared library framework and must have the same name as the framework but without the `.framework` extension.

macOS uses this key to locate the bundle’s executable or shared library in cases where the user renames the app or bundle directory.

## See Also

### Launch

- [NSPrincipalClass](nsprincipalclass.md): The name of the bundle’s main executable class.
- [CLKComplicationPrincipalClass](clkcomplicationprincipalclass.md): The name of the class that implements the complication data source protocol.
- [LSEnvironment](lsenvironment.md): Environment variables to set before launching the app.
- [UIApplicationShortcutItems](uiapplicationshortcutitems.md)
