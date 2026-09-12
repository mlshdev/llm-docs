> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefiltermanagererror](https://developer.apple.com/documentation/networkextension/nefiltermanagererror)

# NEFilterManagerError (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Error codes specific to filter managers.

## Declaration

```swift
enum NEFilterManagerError
```

## Topics

### Error codes

- [NEFilterManagerError.configurationInvalid](nefiltermanagererror/configurationinvalid.md): An error code that indicates the filter configuration is invalid.
- [NEFilterManagerError.configurationDisabled](nefiltermanagererror/configurationdisabled.md): An error code that indicates the filter configuration isn’t enabled.
- [NEFilterManagerError.configurationStale](nefiltermanagererror/configurationstale.md): An error code that indicates another process modfied the filter configuration since the last time the app loaded the configuration.
- [NEFilterManagerError.configurationCannotBeRemoved](nefiltermanagererror/configurationcannotberemoved.md): An error code that indicates removing the configuration isn’t allowed.
- [NEFilterManagerError.configurationPermissionDenied](nefiltermanagererror/configurationpermissiondenied.md): An error code that indicates the configuration lacks permission.
- [NEFilterManagerError.configurationInternalError](nefiltermanagererror/configurationinternalerror.md): An error code that indicates an internal configuration error occurred.

### Initializers

- [init(rawValue:)](nefiltermanagererror/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [NEFilterErrorDomain](nefiltererrordomain.md): The domain for errors resulting from calls to the filter manager.

# NEFilterManagerError (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

Error codes specific to filter managers.

## Declaration

```objectivec
enum NEFilterManagerError : NSInteger;
```

## Topics

### Error codes

- [NEFilterManagerErrorConfigurationInvalid](nefiltermanagererror/configurationinvalid.md): An error code that indicates the filter configuration is invalid.
- [NEFilterManagerErrorConfigurationDisabled](nefiltermanagererror/configurationdisabled.md): An error code that indicates the filter configuration isn’t enabled.
- [NEFilterManagerErrorConfigurationStale](nefiltermanagererror/configurationstale.md): An error code that indicates another process modfied the filter configuration since the last time the app loaded the configuration.
- [NEFilterManagerErrorConfigurationCannotBeRemoved](nefiltermanagererror/configurationcannotberemoved.md): An error code that indicates removing the configuration isn’t allowed.
- [NEFilterManagerErrorConfigurationPermissionDenied](nefiltermanagererror/configurationpermissiondenied.md): An error code that indicates the configuration lacks permission.
- [NEFilterManagerErrorConfigurationInternalError](nefiltermanagererror/configurationinternalerror.md): An error code that indicates an internal configuration error occurred.

## See Also

### Errors

- [NEFilterErrorDomain](nefiltererrordomain.md): The domain for errors resulting from calls to the filter manager.
