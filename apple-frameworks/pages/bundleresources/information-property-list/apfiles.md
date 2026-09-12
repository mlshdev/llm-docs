> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/apfiles](https://developer.apple.com/documentation/bundleresources/information-property-list/apfiles)

# APFiles

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.0+

Describes the files or directories the app installs on the system.

## Details

`APFiles`

## Topics

### Property List Keys

- [APDisplayedAsContainer](apfiles/apdisplayedascontainer.md): A Boolean value indicating whether the file or a folder icon is displayed in the Info window.
- [APFileDescriptionKey](apfiles/apfiledescriptionkey.md): A short description of the file or folder that appears in the Info window.
- [APFileDestinationPath](apfiles/apfiledestinationpath.md): The path to use when installing the file or folder, relative to the app bundle.
- [APFileName](apfiles/apfilename.md): The name of the file or folder to install.
- [APFileSourcePath](apfiles/apfilesourcepath.md): The path to the file or folder in the app package, relative to the installer path.
- [APInstallAction](apfiles/apinstallaction.md): The action to take on the file or folder.

## See Also

### Storage

- [APInstallerURL](apinstallerurl.md): The base path to the files or folders that the app installs.
- [NSSupportsPurgeableLocalStorage](nssupportspurgeablelocalstorage.md): A Boolean value indicating whether the app continues working if the system purges the local storage.
- [LSFileQuarantineEnabled](lsfilequarantineenabled.md): A Boolean value indicating whether the files this app creates are quarantined by default.
- [UIFileSharingEnabled](uifilesharingenabled.md): A Boolean value indicating whether the app shares files.
- [CSResourcesFileMapped](csresourcesfilemapped.md): A Boolean value indicating whether the app’s resources files should be mapped into memory.
- [NSDownloadsUbiquitousContents](nsdownloadsubiquitouscontents.md): A Boolean value that indicates whether the system should download documents before handing them over to the app.
