> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/servicesaccountlinking/registrationerror/failed](https://developer.apple.com/documentation/servicesaccountlinking/registrationerror/failed)

# failed

**Framework:** ServicesAccountLinking  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+

Registration failed.

## Declaration

```swift
static var failed: RegistrationError.Code { get }
```

<a id="discussion"></a>

## Discussion

This may indicate the user is not signed into an Apple Media & Purchases account or another system error occurred. Implement retry logic with appropriate user messaging.
