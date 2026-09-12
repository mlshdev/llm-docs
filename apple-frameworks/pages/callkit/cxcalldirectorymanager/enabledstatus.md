> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectorymanager/enabledstatus](https://developer.apple.com/documentation/callkit/cxcalldirectorymanager/enabledstatus)

# CXCallDirectoryManager.EnabledStatus (Swift)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 10.0+ · visionOS 1.0+

The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtension(withIdentifier:completionHandler:)](getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.

## Declaration

```swift
enum EnabledStatus
```

## Topics

### Constants

- [CXCallDirectoryManager.EnabledStatus.unknown](enabledstatus/unknown.md): Indicates that the enabled status for the extension is unknown.
- [CXCallDirectoryManager.EnabledStatus.disabled](enabledstatus/disabled.md): Indicates that the extension is disabled.
- [CXCallDirectoryManager.EnabledStatus.enabled](enabledstatus/enabled.md): Indicates that the extension is enabled.

### Initializers

- [init(rawValue:)](enabledstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with a Call Directory App Extension

- [getEnabledStatusForExtension(withIdentifier:completionHandler:)](getenabledstatusforextension%28withidentifier_completionhandler_%29.md): Asynchronously returns the enabled status of the extension with the specified identifier.
- [reloadExtension(withIdentifier:completionHandler:)](reloadextension%28withidentifier_completionhandler_%29.md): Asynchronously reloads the extension with the specified identifier.

# CXCallDirectoryEnabledStatus (Objective-C)

**Framework:** CallKit  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

The enabled status of a Call Directory app extension, as reported by the [getEnabledStatusForExtensionWithIdentifier:completionHandler:](getenabledstatusforextension%28withidentifier_completionhandler_%29.md) method.

## Declaration

```objectivec
enum CXCallDirectoryEnabledStatus : NSInteger;
```

## Topics

### Constants

- [CXCallDirectoryEnabledStatusUnknown](enabledstatus/unknown.md): Indicates that the enabled status for the extension is unknown.
- [CXCallDirectoryEnabledStatusDisabled](enabledstatus/disabled.md): Indicates that the extension is disabled.
- [CXCallDirectoryEnabledStatusEnabled](enabledstatus/enabled.md): Indicates that the extension is enabled.

## See Also

### Working with a Call Directory App Extension

- [getEnabledStatusForExtensionWithIdentifier:completionHandler:](getenabledstatusforextension%28withidentifier_completionhandler_%29.md): Asynchronously returns the enabled status of the extension with the specified identifier.
- [reloadExtensionWithIdentifier:completionHandler:](reloadextension%28withidentifier_completionhandler_%29.md): Asynchronously reloads the extension with the specified identifier.
