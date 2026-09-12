> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/information-property-list/uiapplicationexitsonsuspend](https://developer.apple.com/documentation/bundleresources/information-property-list/uiapplicationexitsonsuspend)

# UIApplicationExitsOnSuspend

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ · watchOS 2.0+ (deprecated in 6.0)

A Boolean value indicating whether the app terminates, rather than moves to the background, when the app quits.

> The system now automatically suspends apps leaving the foreground when they don’t require background execution. For more information, see [About the background execution sequence](../../uikit/about-the-background-execution-sequence.md).

## Details

`UIApplicationExitsOnSuspend`

## See Also

### Termination

- [LSGetAppDiedEvents](lsgetappdiedevents.md): A Boolean value indicating whether the app is notified when a child process dies.
- [NSSupportsSuddenTermination](nssupportssuddentermination.md): A Boolean value indicating whether the system may terminate the app to log out or shut down more quickly.
