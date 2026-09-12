> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/securityinterface/sfcertificatepanel/shared()](https://developer.apple.com/documentation/securityinterface/sfcertificatepanel/shared())

# shared() (Swift)

**Framework:** Security Interface  
**Kind:** Type Method  
**Availability:** macOS 10.3+

Returns a fully initialized, singleton certificate panel object.

## Declaration

```swift
class func shared() -> SFCertificatePanel!
```

<a id="Discussion"></a>

## Discussion

Use this method if your application displays a single certificate panel or sheet at a time. If your application can display multiple certificate panels or sheets at once, you must allocate separate object instances (using the [alloc](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/alloc) class method inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) and initialize them (using the [init()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) instance method, also inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) instead of using this class method.

# sharedCertificatePanel (Objective-C)

**Framework:** Security Interface  
**Kind:** Type Method  
**Availability:** macOS 10.3+

Returns a fully initialized, singleton certificate panel object.

## Declaration

```objectivec
+ (SFCertificatePanel *) sharedCertificatePanel;
```

<a id="Discussion"></a>

## Discussion

Use this method if your application displays a single certificate panel or sheet at a time. If your application can display multiple certificate panels or sheets at once, you must allocate separate object instances (using the [alloc](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/alloc) class method inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) and initialize them (using the [init](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/init%28%29) instance method, also inherited from [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)) instead of using this class method.
