> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/event/persistenceunavailable](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/event/persistenceunavailable)

# persistenceUnavailable

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether it receives location updates based on successful persistence.

## Declaration

```swift
var persistenceUnavailable: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), then location updates are suspended because the app has a persistence failure.

## See Also

### Event states

- [accuracyLimited](accuracylimited.md): A Boolean value that indicates whether the app receives accuracy-limited location updates.
- [authorizationDenied](authorizationdenied.md): A Boolean value that indicates whether the app has local authorization.
- [authorizationDeniedGlobally](authorizationdeniedglobally.md): A Boolean value that indicates whether the app has system-wide authorization.
- [authorizationRequestInProgress](authorizationrequestinprogress.md)
- [authorizationRestricted](authorizationrestricted.md): A Boolean value that indicates whether the app can make authorization changes.
- [conditionLimitExceeded](conditionlimitexceeded.md): A Boolean value that indicates whether the app receives location updates based on other monitoring conditions.
- [conditionUnsupported](conditionunsupported.md): A Boolean value that indicates whether the app receives location updates based on the supported condition.
- [insufficientlyInUse](insufficientlyinuse.md): A Boolean value that indicates whether the app receives location updates because it’s insufficiently in use.
- [serviceSessionRequired](servicesessionrequired.md)
