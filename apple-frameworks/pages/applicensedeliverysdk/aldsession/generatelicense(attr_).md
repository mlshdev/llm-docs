> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applicensedeliverysdk/aldsession/generatelicense(attr:)](https://developer.apple.com/documentation/applicensedeliverysdk/aldsession/generatelicense(attr:))

# generateLicense(attr:)

**Framework:** App License Delivery SDK  
**Kind:** Instance Method

Generates a license based on the provided ALDLicenseAttribute and add it to the session. Multiple licenses can be generated in this session by callling this function multiple times, they get added to the session response.

## Declaration

```swift
func generateLicense(attr: ALDLicenseAttribute) throws
```

## Parameters

- `attr`: And ALDLicenseAttribute describing the terms of the license and the key objects

## Mentioned In

- [Licensing alternative distribution apps](../licensing-alternative-distribution-apps.md)
