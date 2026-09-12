> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/bacontentrequest](https://developer.apple.com/documentation/backgroundassets/bacontentrequest)

# BAContentRequest (Swift)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

A type that indicates the purpose of a content download request.

## Declaration

```swift
enum BAContentRequest
```

## Topics

### Content request types

- [BAContentRequest.install](bacontentrequest/install.md): A content request resulting from the installation of the app.
- [BAContentRequest.periodic](bacontentrequest/periodic.md): A content request resulting from a system request for updated content within the app.
- [BAContentRequest.update](bacontentrequest/update.md): A content request resulting from an update of the app.
- [BAContentRequest.languageChange](bacontentrequest/languagechange.md): A content request resulting from someone changing the app’s preferred language.

### Initializers

- [init(rawValue:)](bacontentrequest/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking for asset updates

- [downloads(for:manifestURL:extensionInfo:)](badownloaderextension-qwaw/downloads%28for_manifesturl_extensioninfo_%29.md)
- [BAAppExtensionInfo](baappextensioninfo.md)

# BAContentRequest (Objective-C)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

A type that indicates the purpose of a content download request.

## Declaration

```objectivec
enum BAContentRequest : NSInteger;
```

## Topics

### Content request types

- [BAContentRequestInstall](bacontentrequest/install.md): A content request resulting from the installation of the app.
- [BAContentRequestPeriodic](bacontentrequest/periodic.md): A content request resulting from a system request for updated content within the app.
- [BAContentRequestUpdate](bacontentrequest/update.md): A content request resulting from an update of the app.
- [BAContentRequestLanguageChange](bacontentrequest/languagechange.md): A content request resulting from someone changing the app’s preferred language.

## See Also

### Checking for asset updates

- [BAAppExtensionInfo](baappextensioninfo.md)
