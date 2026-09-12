> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/ctserviceradioaccesstechnologydidchange](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/ctserviceradioaccesstechnologydidchange)

# CTServiceRadioAccessTechnologyDidChange

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A notification that posts when radio access technology changes.

## Declaration

```swift
static let CTServiceRadioAccessTechnologyDidChange: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification’s `object` is a string that represents the identifier of the service with changes to its radio access technology.  Use this identifier as the key in [serviceCurrentRadioAccessTechnology](../../../coretelephony/cttelephonynetworkinfo/servicecurrentradioaccesstechnology.md) to get the value of the new radio access technology for the service.

## See Also

### Core Telephony

- [CTRadioAccessTechnologyDidChange](ctradioaccesstechnologydidchange.md): Deprecated. The name of the notification indicating that the radio access technology changed for one of the services.
