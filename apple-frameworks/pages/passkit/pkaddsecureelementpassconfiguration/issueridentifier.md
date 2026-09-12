> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/passkit/pkaddsecureelementpassconfiguration/issueridentifier](https://developer.apple.com/documentation/passkit/pkaddsecureelementpassconfiguration/issueridentifier)

# issuerIdentifier (Swift)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

An opaque value for the configuration.

## Declaration

```swift
var issuerIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property’s value is unique for each issuer. This property is available only to developers who work with Apple to enable this functionality.

## See Also

### Managing the issuer identity

- [localizedDescription](localizeddescription.md): The configuration’s localized description.

# issuerIdentifier (Objective-C)

**Framework:** PassKit (Apple Pay and Wallet)  
**Kind:** Instance Property  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS · visionOS 1.0+

An opaque value for the configuration.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * issuerIdentifier;
```

<a id="Discussion"></a>

## Discussion

> **Important**

>  This property’s value is unique for each issuer. This property is available only to developers who work with Apple to enable this functionality.

## See Also

### Managing the issuer identity

- [localizedDescription](localizeddescription.md): The configuration’s localized description.
