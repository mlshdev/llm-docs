> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wknavigationtype](https://developer.apple.com/documentation/webkit/wknavigationtype)

# WKNavigationType (Swift)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The type of action that triggered the navigation.

## Declaration

```swift
enum WKNavigationType
```

## Topics

### Getting the Navigation Types

- [WKNavigationType.linkActivated](wknavigationtype/linkactivated.md): A link activation.
- [WKNavigationType.formSubmitted](wknavigationtype/formsubmitted.md): A request to submit a form.
- [WKNavigationType.backForward](wknavigationtype/backforward.md): A request for the frame’s next or previous item.
- [WKNavigationType.reload](wknavigationtype/reload.md): A request to reload the webpage.
- [WKNavigationType.formResubmitted](wknavigationtype/formresubmitted.md): A request to resubmit a form.
- [WKNavigationType.other](wknavigationtype/other.md): A navigation request that originates for some other reason.

### Initializers

- [init(rawValue:)](wknavigationtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the navigation type

- [navigationType](wknavigationaction/navigationtype.md): The type of action that triggered the navigation.

# WKNavigationType (Objective-C)

**Framework:** WebKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

The type of action that triggered the navigation.

## Declaration

```objectivec
enum WKNavigationType : NSInteger;
```

## Topics

### Getting the Navigation Types

- [WKNavigationTypeLinkActivated](wknavigationtype/linkactivated.md): A link activation.
- [WKNavigationTypeFormSubmitted](wknavigationtype/formsubmitted.md): A request to submit a form.
- [WKNavigationTypeBackForward](wknavigationtype/backforward.md): A request for the frame’s next or previous item.
- [WKNavigationTypeReload](wknavigationtype/reload.md): A request to reload the webpage.
- [WKNavigationTypeFormResubmitted](wknavigationtype/formresubmitted.md): A request to resubmit a form.
- [WKNavigationTypeOther](wknavigationtype/other.md): A navigation request that originates for some other reason.

## See Also

### Getting the navigation type

- [navigationType](wknavigationaction/navigationtype.md): The type of action that triggered the navigation.
