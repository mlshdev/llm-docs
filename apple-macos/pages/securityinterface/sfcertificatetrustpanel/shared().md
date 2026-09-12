> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatetrustpanel/shared()](https://developer.apple.com/documentation/securityinterface/sfcertificatetrustpanel/shared())

# shared() (Swift)

**Framework:** Security Interface  
**Kind:** Type Method  
**Availability:** macOS 10.3+

Returns a fully initialized, singleton certificate trust panel object.

## Declaration

```swift
class func shared() -> SFCertificateTrustPanel!
```

<a id="Discussion"></a>

## Discussion

Use this method if your application displays a single certificate trust panel or sheet at a time. If your application can display multiple certificate trust panels or sheets at once, you must allocate separate object instances (using the [alloc](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/alloc) class method inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) and initialize (using the [init()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) instance method, also inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) instead of using this class method.

# sharedCertificateTrustPanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Type Method  
**Availability:** macOS 10.3+

Returns a fully initialized, singleton certificate trust panel object.

## Declaration

```objectivec
+ (SFCertificateTrustPanel *) sharedCertificateTrustPanel;
```

<a id="Discussion"></a>

## Discussion

Use this method if your application displays a single certificate trust panel or sheet at a time. If your application can display multiple certificate trust panels or sheets at once, you must allocate separate object instances (using the [alloc](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/alloc) class method inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) and initialize (using the [init](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) instance method, also inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) instead of using this class method.
