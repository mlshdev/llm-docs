> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sectrustedapplicationsetdata(_:_:)](https://developer.apple.com/documentation/security/sectrustedapplicationsetdata(_:_:))

# SecTrustedApplicationSetData(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the data of a given trusted app instance.

> SecKeychain is deprecated

## Declaration

```swift
func SecTrustedApplicationSetData(_ appRef: SecTrustedApplication, _ data: CFData) -> OSStatus
```

## Parameters

- `appRef`: A trusted application object.
- `data`: A reference to the data to set in the trusted application.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you use the [SecTrustedApplicationCopyData(\_:\_:)](sectrustedapplicationcopydata%28____%29.md) method to extract the data from a trusted app instance for storage or transmission, you can use the [SecTrustedApplicationSetData(\_:\_:)](sectrustedapplicationsetdata%28____%29.md) method to insert that data into a new trusted app. Doing so creates an object that identifies the same app as the original trusted app instance.

# SecTrustedApplicationSetData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Sets the data of a given trusted app instance.

> SecKeychain is deprecated

## Declaration

```objectivec
OSStatus SecTrustedApplicationSetData(SecTrustedApplicationRef appRef, CFDataRef data);
```

## Parameters

- `appRef`: A trusted application object.
- `data`: A reference to the data to set in the trusted application.

<a id="return-value"></a>

## Return Value

A result code. See [Security Framework Result Codes](security-framework-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you use the [SecTrustedApplicationCopyData](sectrustedapplicationcopydata%28____%29.md) method to extract the data from a trusted app instance for storage or transmission, you can use the [SecTrustedApplicationSetData](sectrustedapplicationsetdata%28____%29.md) method to insert that data into a new trusted app. Doing so creates an object that identifies the same app as the original trusted app instance.
