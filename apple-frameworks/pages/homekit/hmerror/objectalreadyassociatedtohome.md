> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/objectalreadyassociatedtohome](https://developer.apple.com/documentation/homekit/hmerror/objectalreadyassociatedtohome)

# objectAlreadyAssociatedToHome

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to associate an object with a home when it’s already associated with that home.

## Declaration

```swift
static var objectAlreadyAssociatedToHome: HMError.Code { get }
```

## See Also

### Detecting association errors

- [invalidAssociatedServiceType](invalidassociatedservicetype.md): An error indicating an invalid service type.
- [objectAssociatedToAnotherHome](objectassociatedtoanotherhome.md): An attempt to associate an object with a home when it’s already associated with another home.
- [objectNotAssociatedToAnyHome](objectnotassociatedtoanyhome.md): An attempt to perform an operation on an object that is not associated to any home.
