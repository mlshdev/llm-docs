> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/invalidassociatedservicetype](https://developer.apple.com/documentation/homekit/hmerror/invalidassociatedservicetype)

# invalidAssociatedServiceType

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An error indicating an invalid service type.

## Declaration

```swift
static var invalidAssociatedServiceType: HMError.Code { get }
```

## See Also

### Detecting association errors

- [objectAlreadyAssociatedToHome](objectalreadyassociatedtohome.md): An attempt to associate an object with a home when it’s already associated with that home.
- [objectAssociatedToAnotherHome](objectassociatedtoanotherhome.md): An attempt to associate an object with a home when it’s already associated with another home.
- [objectNotAssociatedToAnyHome](objectnotassociatedtoanyhome.md): An attempt to perform an operation on an object that is not associated to any home.
