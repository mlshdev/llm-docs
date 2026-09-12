> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/activitykit/activityauthorizationerror](https://developer.apple.com/documentation/activitykit/activityauthorizationerror)

# ActivityAuthorizationError

**Framework:** ActivityKit  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+

An error that indicates why the request to start a Live Activity failed.

## Declaration

```swift
enum ActivityAuthorizationError
```

## Topics

### Error codes

- [ActivityAuthorizationError.attributesTooLarge](activityauthorizationerror/attributestoolarge.md): The provided Live Activity attributes exceeded the maximum size of 4KB.
- [ActivityAuthorizationError.denied](activityauthorizationerror/denied.md): A person deactivated Live Activities in Settings.
- [ActivityAuthorizationError.globalMaximumExceeded](activityauthorizationerror/globalmaximumexceeded.md): The device reached the maximum number of ongoing Live Activities.
- [ActivityAuthorizationError.malformedActivityIdentifier](activityauthorizationerror/malformedactivityidentifier.md): The provided activity identifier is malformed.
- [ActivityAuthorizationError.missingProcessIdentifier](activityauthorizationerror/missingprocessidentifier.md): The process that tried to start the Live Activity is missing a process identifier.
- [ActivityAuthorizationError.persistenceFailure](activityauthorizationerror/persistencefailure.md): The system couldn’t persist the Live Activity.
- [ActivityAuthorizationError.reconnectNotPermitted](activityauthorizationerror/reconnectnotpermitted.md): The process that tried to recreate the Live Activity is not the process that originally created the Live Activity.
- [ActivityAuthorizationError.targetMaximumExceeded](activityauthorizationerror/targetmaximumexceeded.md): The app has already started the maximum number of concurrent Live Activities.
- [ActivityAuthorizationError.unentitled](activityauthorizationerror/unentitled.md): The app doesn’t have the required entitlement to start a Live Activity.
- [ActivityAuthorizationError.unsupported](activityauthorizationerror/unsupported.md): The device doesn’t support Live Activities.
- [ActivityAuthorizationError.unsupportedTarget](activityauthorizationerror/unsupportedtarget.md): The app doesn’t have the required entitlement to start a Live Activities.
- [ActivityAuthorizationError.visibility](activityauthorizationerror/visibility.md): The app tried to start the Live Activity while it was in the background.

### Getting error information

- [failureReason](activityauthorizationerror/failurereason.md): A string that describes the error that occurred.
- [recoverySuggestion](activityauthorizationerror/recoverysuggestion.md): A localized message that describes how to recover from the error.

### Protocol confirmation

- [errorCode](activityauthorizationerror/errorcode.md): An integer value that represents the error code.
- [errorDomain](activityauthorizationerror/errordomain.md): The domain for errors that can happen when starting a Live Activity.

## Relationships

### Conforms To

- [CustomNSError](https://developer.apple.com/documentation/foundation/customnserror)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](https://developer.apple.com/documentation/foundation/localizederror)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Starting a Live Activity

- [request(attributes:content:pushType:)](activity/request%28attributes_content_pushtype_%29.md): Requests and starts a standard Live Activity.
- [request(attributes:content:pushType:style:)](activity/request%28attributes_content_pushtype_style_%29.md): Requests and starts a Live Activity.
- [request(attributes:content:pushType:style:alertConfiguration:start:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_start_%29.md): Requests and schedules a Live Activity for a specific date.
- [request(attributes:content:pushType:style:alertConfiguration:startDate:)](activity/request%28attributes_content_pushtype_style_alertconfiguration_startdate_%29.md): Deprecated.
- [attributes](activity/attributes.md): A set of attributes that describe a Live Activity and its content.
- [ActivityAttributes](activityattributes.md): The protocol you implement to describe the content of a Live Activity.
- [ActivityStyle](activitystyle.md)
- [content](activity/content.md): The dynamic content of a Live Activity.
- [ActivityContent](activitycontent.md): A structure that describes the state and configuration of a Live Activity.
- [Activity.ContentState](activity/contentstate-swift.typealias.md): The type alias for the structure that describes the dynamic content of a Live Activity.
- [PushType](pushtype.md): The structure that offers constants you use to configure a Live Activity to receive updates through ActivityKit push notifications.
