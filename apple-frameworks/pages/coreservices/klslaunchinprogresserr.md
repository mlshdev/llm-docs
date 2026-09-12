> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/klslaunchinprogresserr](https://developer.apple.com/documentation/coreservices/klslaunchinprogresserr)

# kLSLaunchInProgressErr

**Framework:** Core Services  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A launch of the app is already in progress.

## Declaration

```swift
var kLSLaunchInProgressErr: OSStatus { get }
```

## See Also

### Result Codes

- [kLSAppInTrashErr](klsappintrasherr.md): The app can’t run because it’s inside a Trash folder.
- [kLSUnknownErr](klsunknownerr.md): An unknown error has occurred.
- [kLSNotAnApplicationErr](klsnotanapplicationerr.md): The item for registration is not an app.
- [kLSDataUnavailableErr](klsdataunavailableerr.md): Data of the desired type is not available (for example, there is no kind string).
- [kLSApplicationNotFoundErr](klsapplicationnotfounderr.md): No app in the Launch Services database matches the input criteria.
- [kLSDataErr](klsdataerr.md): Improper data structure.
- [kLSServerCommunicationErr](klsservercommunicationerr.md): There is a problem communicating with the server process that maintains the Launch Services database.
- [kLSCannotSetInfoErr](klscannotsetinfoerr.md): The system can’t hide the filename extension.
- [kLSIncompatibleSystemVersionErr](klsincompatiblesystemversionerr.md): The requested app can’t run on the current macOS version.
- [kLSNoLaunchPermissionErr](klsnolaunchpermissionerr.md): The user doesn’t have permission to launch the app on a managed network.
- [kLSNoExecutableErr](klsnoexecutableerr.md): The executable file is missing or has an unusable format.
- [kLSMultipleSessionsNotSupportedErr](klsmultiplesessionsnotsupportederr.md): The requested app can’t run simultaneously in two different user sessions.
