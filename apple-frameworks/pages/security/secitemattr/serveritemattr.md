> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secitemattr/serveritemattr

# SecItemAttr.serverItemAttr (Swift)

**Framework:** Security  
**Kind:** Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the server attribute.

## Declaration

```swift
case serverItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the Internet server’s domain name or IP address. This is unique to Internet password attributes. Keychain strings should use UTF-8 encoding.

# kSecServerItemAttr (Objective-C)

**Framework:** Security  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Identifies the server attribute.

## Declaration

```objectivec
kSecServerItemAttr
```

<a id="Discussion"></a>

## Discussion

You use this tag to set or get a string that represents the Internet server’s domain name or IP address. This is unique to Internet password attributes. Keychain strings should use UTF-8 encoding.
