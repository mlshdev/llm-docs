> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pksuicapassproperties/init(for:)](https://developer.apple.com/documentation/passkit/pksuicapassproperties/init(for:))

# init(for:) (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Initializer  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

Instantiates a Suica pass properties object that contains the properties supported in the specified pass.

## Declaration

```swift
convenience init?(for pass: PKPass)
```

# passPropertiesForPass: (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Type Method  
**Availability:** iOS 10.1+ · iPadOS 10.1+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 3.1+

Instantiates a Suica pass properties object that contains the properties supported in the specified pass.

## Declaration

```objectivec
+ (instancetype) passPropertiesForPass:(PKPass *) pass;
```
