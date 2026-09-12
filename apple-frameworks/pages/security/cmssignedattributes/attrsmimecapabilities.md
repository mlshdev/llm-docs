> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/cmssignedattributes/attrsmimecapabilities](https://developer.apple.com/documentation/security/cmssignedattributes/attrsmimecapabilities)

# attrSmimeCapabilities (Swift)

**Framework:** Security  
**Kind:** Type Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identify signature, encryption, and digest algorithms supported by the encoder.

## Declaration

```swift
static var attrSmimeCapabilities: CMSSignedAttributes { get }
```

<a id="Discussion"></a>

## Discussion

Using this attribute doesn’t change the encoding. See [RFC 2311: S/MIME Version 2 Message Specification](https://tools.ietf.org/html/rfc2311) section 2.5.2 for more information about the capabilities attribute.

# kCMSAttrSmimeCapabilities (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identify signature, encryption, and digest algorithms supported by the encoder.

## Declaration

```objectivec
kCMSAttrSmimeCapabilities
```

<a id="Discussion"></a>

## Discussion

Using this attribute doesn’t change the encoding. See [RFC 2311: S/MIME Version 2 Message Specification](https://tools.ietf.org/html/rfc2311) section 2.5.2 for more information about the capabilities attribute.
