> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/ctradioaccesstechnologydidchange)

# CTRadioAccessTechnologyDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 12.0) · iPadOS 7.0+ (deprecated in 12.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The name of the notification indicating that the radio access technology changed for one of the services.

## Declaration

```swift
static let CTRadioAccessTechnologyDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s [object](../object.md) is an [NSString](../../nsstring.md) that represents the service identifier of the service whose radio access technology has changed. Use this string as the key in [serviceCurrentRadioAccessTechnology](../../../coretelephony/cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md) to get the value of the new radio access technology for the service.

## See Also

### Core Telephony

- [CTServiceRadioAccessTechnologyDidChange](ctserviceradioaccesstechnologydidchange.md): A notification that posts when radio access technology changes.
