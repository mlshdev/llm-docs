> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clmonitor-2r51v/event/conditionunsupported](https://developer.apple.com/documentation/corelocation/clmonitor-2r51v/event/conditionunsupported)

# conditionUnsupported

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+

A Boolean value that indicates whether the app receives location updates based on the supported condition.

## Declaration

```swift
var conditionUnsupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

If this property is [true](https://developer.apple.com/documentation/swift/true), then the app isn’t receiving location updates because it’s monitoring a type of condition that isn’t supported.

## See Also

### Event states

- [accuracyLimited](accuracylimited.md): A Boolean value that indicates whether the app receives accuracy-limited location updates.
- [authorizationDenied](authorizationdenied.md): A Boolean value that indicates whether the app has local authorization.
- [authorizationDeniedGlobally](authorizationdeniedglobally.md): A Boolean value that indicates whether the app has system-wide authorization.
- [authorizationRequestInProgress](authorizationrequestinprogress.md)
- [authorizationRestricted](authorizationrestricted.md): A Boolean value that indicates whether the app can make authorization changes.
- [conditionLimitExceeded](conditionlimitexceeded.md): A Boolean value that indicates whether the app receives location updates based on other monitoring conditions.
- [insufficientlyInUse](insufficientlyinuse.md): A Boolean value that indicates whether the app receives location updates because it’s insufficiently in use.
- [persistenceUnavailable](persistenceunavailable.md): A Boolean value that indicates whether it receives location updates based on successful persistence.
- [serviceSessionRequired](servicesessionrequired.md)
