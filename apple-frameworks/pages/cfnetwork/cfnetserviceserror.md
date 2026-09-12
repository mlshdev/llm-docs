> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetserviceserror](https://developer.apple.com/documentation/cfnetwork/cfnetserviceserror)

# CFNetServicesError (Swift)

**Framework:** CFNetwork  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Error codes that may be returned by CFNetServices functions or passed to CFNetServices callback functions.

## Declaration

```swift
enum CFNetServicesError
```

## Topics

### Constants

- [CFNetServicesError.unknown](cfnetserviceserror/unknown.md): An unknown CFNetService error occurred.
- [CFNetServicesError.collision](cfnetserviceserror/collision.md): An attempt was made to use a name that is already in use.
- [CFNetServicesError.notFound](cfnetserviceserror/notfound.md): Not used.
- [CFNetServicesError.inProgress](cfnetserviceserror/inprogress.md): A search is already in progress.
- [CFNetServicesError.badArgument](cfnetserviceserror/badargument.md): A required argument was not provided.
- [CFNetServicesError.cancel](cfnetserviceserror/cancel.md): The search or service was canceled.
- [CFNetServicesError.invalid](cfnetserviceserror/invalid.md): Invalid data was passed to a CFNetServices function.
- [CFNetServicesError.timeout](cfnetserviceserror/timeout.md): Resolution failed because the timeout was reached.

### Enumeration Cases

- [CFNetServicesError.missingRequiredConfiguration](cfnetserviceserror/missingrequiredconfiguration.md): A required configuration for local network access is missing.

### Initializers

- [init(rawValue:)](cfnetserviceserror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network Services

- [CFNetService](cfnetservice.md): An opaque reference representing a CFNetService.
- [CFNetServiceBrowser](cfnetservicebrowser.md): An opaque reference representing a CFNetServiceBrowser.
- [CFNetServiceBrowserFlags](cfnetservicebrowserflags.md): Flags that the system passes to net service browser callbacks.
- [CFNetServiceMonitor](cfnetservicemonitor.md): An opaque reference for a service monitor.
- [CFNetServiceMonitorType](cfnetservicemonitortype.md): Record type specifier used to tell a service monitor the type of record changes to watch for.
- [CFNetServiceClientContext](cfnetserviceclientcontext.md): A structure provided when a CFNetService is associated with a callback function or when a CFNetServiceBrowser is created.
- [CFNetServiceRegisterFlags](cfnetserviceregisterflags.md): Options to use when registering a service on the network.
- [CFNetServiceBrowserInvalidate(\_:)](cfnetservicebrowserinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service browser object.
- [CFNetServiceBrowserScheduleWithRunLoop(\_:\_:\_:)](cfnetservicebrowserschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceBrowser on a run loop.
- [CFNetServiceBrowserCreate(\_:\_:\_:)](cfnetservicebrowsercreate%28______%29.md): Deprecated. Creates an instance of a Network Service browser object.
- [CFNetServiceBrowserGetTypeID()](cfnetservicebrowsergettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service browser object.
- [CFNetServiceBrowserSearchForDomains(\_:\_:\_:)](cfnetservicebrowsersearchfordomains%28______%29.md): Deprecated. Searches for domains.
- [CFNetServiceBrowserSearchForServices(\_:\_:\_:\_:)](cfnetservicebrowsersearchforservices%28________%29.md): Deprecated. Searches a domain for services of a specified type.
- [CFNetServiceBrowserStopSearch(\_:\_:)](cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.
- [CFNetServiceBrowserUnscheduleFromRunLoop(\_:\_:\_:)](cfnetservicebrowserunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceBrowser from a run loop and mode.

# CFNetServicesError (Objective-C)

**Framework:** CFNetwork  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Error codes that may be returned by CFNetServices functions or passed to CFNetServices callback functions.

## Declaration

```objectivec
enum CFNetServicesError : int;
```

## Topics

### Constants

- [kCFNetServicesErrorUnknown](cfnetserviceserror/unknown.md): An unknown CFNetService error occurred.
- [kCFNetServicesErrorCollision](cfnetserviceserror/collision.md): An attempt was made to use a name that is already in use.
- [kCFNetServicesErrorNotFound](cfnetserviceserror/notfound.md): Not used.
- [kCFNetServicesErrorInProgress](cfnetserviceserror/inprogress.md): A search is already in progress.
- [kCFNetServicesErrorBadArgument](cfnetserviceserror/badargument.md): A required argument was not provided.
- [kCFNetServicesErrorCancel](cfnetserviceserror/cancel.md): The search or service was canceled.
- [kCFNetServicesErrorInvalid](cfnetserviceserror/invalid.md): Invalid data was passed to a CFNetServices function.
- [kCFNetServicesErrorTimeout](cfnetserviceserror/timeout.md): Resolution failed because the timeout was reached.

### Enumeration Cases

- [kCFNetServicesErrorMissingRequiredConfiguration](cfnetserviceserror/missingrequiredconfiguration.md): A required configuration for local network access is missing.

## See Also

### Network Services

- [CFNetServiceRef](cfnetservice.md): An opaque reference representing a CFNetService.
- [CFNetServiceBrowserRef](cfnetservicebrowser.md): An opaque reference representing a CFNetServiceBrowser.
- [CFNetServiceBrowserFlags](cfnetservicebrowserflags.md): Flags that the system passes to net service browser callbacks.
- [CFNetServiceMonitorRef](cfnetservicemonitor.md): An opaque reference for a service monitor.
- [CFNetServiceMonitorType](cfnetservicemonitortype.md): Record type specifier used to tell a service monitor the type of record changes to watch for.
- [CFNetServiceClientContext](cfnetserviceclientcontext.md): A structure provided when a CFNetService is associated with a callback function or when a CFNetServiceBrowser is created.
- [CFNetServiceRegisterFlags](cfnetserviceregisterflags.md): Options to use when registering a service on the network.
- [CFNetServiceBrowserInvalidate](cfnetservicebrowserinvalidate%28__%29.md): Deprecated. Invalidates an instance of a Network Service browser object.
- [CFNetServiceBrowserScheduleWithRunLoop](cfnetservicebrowserschedulewithrunloop%28______%29.md): Deprecated. Schedules a CFNetServiceBrowser on a run loop.
- [CFNetServiceBrowserCreate](cfnetservicebrowsercreate%28______%29.md): Deprecated. Creates an instance of a Network Service browser object.
- [CFNetServiceBrowserGetTypeID](cfnetservicebrowsergettypeid%28%29.md): Deprecated. Gets the Core Foundation type identifier for the Network Service browser object.
- [CFNetServiceBrowserSearchForDomains](cfnetservicebrowsersearchfordomains%28______%29.md): Deprecated. Searches for domains.
- [CFNetServiceBrowserSearchForServices](cfnetservicebrowsersearchforservices%28________%29.md): Deprecated. Searches a domain for services of a specified type.
- [CFNetServiceBrowserStopSearch](cfnetservicebrowserstopsearch%28____%29.md): Deprecated. Stops a search for domains or services.
- [CFNetServiceBrowserUnscheduleFromRunLoop](cfnetservicebrowserunschedulefromrunloop%28______%29.md): Deprecated. Unschedules a CFNetServiceBrowser from a run loop and mode.
