> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustedapplicationcopydata(_:_:)](https://developer.apple.com/documentation/security/sectrustedapplicationcopydata(_:_:))

# SecTrustedApplicationCopyData(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Retrieves the data of a trusted app instance.

> SecKeychain is deprecated

## Declaration

```swift
func SecTrustedApplicationCopyData(_ appRef: SecTrustedApplication, _ data: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `appRef`: A trusted app from which to retrieve data. Use the [SecTrustedApplicationCreateFromPath(\_:\_:)](sectrustedapplicationcreatefrompath%28____%29.md) method to create a trusted app instance.
- `data`: On return, points to an opaque data instance. Call the [CFRelease](../corefoundation/cfrelease.md) method to release the data when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The trusted app instance created by the [SecTrustedApplicationCreateFromPath(\_:\_:)](sectrustedapplicationcreatefrompath%28____%29.md) method includes data that uniquely identifies the app, such as a cryptographic hash of the app. The operating system uses this data to verify that the app is unaltered since the trusted app instance was created. When an app requests access to an item in the keychain for which it is designated as a trusted app, the operating system checks this data before granting access.

Use the [SecTrustedApplicationCopyData(\_:\_:)](sectrustedapplicationcopydata%28____%29.md) function to extract this data from the trusted app instance for storage or for transmission over the network. Use the [SecTrustedApplicationSetData(\_:\_:)](sectrustedapplicationsetdata%28____%29.md) function to insert that data back into a trusted app instance. Note that this data is opaque: there’s no way to interpret it.

# SecTrustedApplicationCopyData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Retrieves the data of a trusted app instance.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecTrustedApplicationCopyData(SecTrustedApplicationRef appRef, CFDataRef*data);
```

## Parameters

- `appRef`: A trusted app from which to retrieve data. Use the [SecTrustedApplicationCreateFromPath](sectrustedapplicationcreatefrompath%28____%29.md) method to create a trusted app instance.
- `data`: On return, points to an opaque data instance. Call the [CFRelease](../corefoundation/cfrelease.md) method to release the data when you are finished using it.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

The trusted app instance created by the [SecTrustedApplicationCreateFromPath](sectrustedapplicationcreatefrompath%28____%29.md) method includes data that uniquely identifies the app, such as a cryptographic hash of the app. The operating system uses this data to verify that the app is unaltered since the trusted app instance was created. When an app requests access to an item in the keychain for which it is designated as a trusted app, the operating system checks this data before granting access.

Use the [SecTrustedApplicationCopyData](sectrustedapplicationcopydata%28____%29.md) function to extract this data from the trusted app instance for storage or for transmission over the network. Use the [SecTrustedApplicationSetData](sectrustedapplicationsetdata%28____%29.md) function to insert that data back into a trusted app instance. Note that this data is opaque: there’s no way to interpret it.
