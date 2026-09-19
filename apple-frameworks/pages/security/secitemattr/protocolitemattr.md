> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/protocolitemattr

# SecItemAttr.protocolItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the protocol attribute.

## Declaration

```swift
case protocolItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `SecProtocolType` that represents the Internet protocol. For possible protocol type values, see [SecProtocolType](../secprotocoltype.md). This is unique to AppleShare and Internet password attributes.

# kSecProtocolItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the protocol attribute.

## Declaration

```objectivec
kSecProtocolItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a value of type `SecProtocolType` that represents the Internet protocol. For possible protocol type values, see [SecProtocolType](../secprotocoltype.md). This is unique to AppleShare and Internet password attributes.
