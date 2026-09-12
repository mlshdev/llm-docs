> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctag-swift.enum](https://developer.apple.com/documentation/corenfc/nfctag-swift.enum)

# NFCTag

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

An object that represents an NFC tag object.

## Declaration

```swift
enum NFCTag
```

<a id="overview"></a>

## Overview

When an NFC reader session detects a tag, it returns an [NFCTag](nfctag-swift.enum.md) object. Use this generic object to determine if the tag is available, and to retrieve an object of a specific tag type.

Listing 1. Getting a MIFARE Ultralight tag from an array of generic tags objects

```swift
func tagReaderSession(_ session: NFCTagReaderSession, didDetect tags: [NFCTag]) {
    var tag: NFCTag? = nil
    
    for nfcTag in tags {
        // In this example you are searching for a MIFARE Ultralight tag (NFC Forum T2T tag platform).
        if case let .miFare(mifareTag) = nfcTag {
            if mifareTag.mifareFamily == .ultralight {
                tag = nfcTag
                break
            }
        }
    }
    
    if tag == nil {
        session.invalidate(errorMessage: "No valid coupon found.")
        return
    }
    
    session.connect(to: tag!) { (error: Error?) in
        if error != nil {
            session.invalidate(errorMessage: "Connection error. Please try again.")
            return
        }
        self.readCouponCode(from: tag!)
    }
}
```

## Topics

### Getting Information About a Tag

- [isAvailable](nfctag-swift.enum/isavailable.md): A Boolean value that indicates whether a detected tag is available.

### Getting a Specific Tag Type

- [NFCTag.iso15693(\_:)](nfctag-swift.enum/iso15693%28__%29.md): Gets a tag as an ISO 15693 tag object.
- [NFCTag.iso7816(\_:)](nfctag-swift.enum/iso7816%28__%29.md): Gets a tag as an ISO 7816 tag object.
- [NFCTag.feliCa(\_:)](nfctag-swift.enum/felica%28__%29.md): Gets a tag as a FeliCa tag object.
- [NFCTag.miFare(\_:)](nfctag-swift.enum/mifare%28__%29.md): Get a tag as a MIFARE tag object.

## See Also

### Tag types

- [Creating NFC Tags from Your iPhone](creating-nfc-tags-from-your-iphone.md): Save data to tags, and interact with them using native tag protocols.
- [NFCISO7816Tag](nfciso7816tag.md): An interface for interacting with an ISO 7816 tag.
- [NFCISO15693Tag](nfciso15693tag.md): An interface for interacting with an ISO 15693 tag.
- [NFCFeliCaTag](nfcfelicatag.md): An interface for interacting with a FeliCa™ tag.
- [NFCMiFareTag](nfcmifaretag.md): An interface for interacting with a MIFARE® tag.
- [NFCNDEFTag](nfcndeftag.md): An interface for interacting with an NDEF tag.
- [NFCTagCommandConfiguration](nfctagcommandconfiguration.md): A set of parameters you use to define the configuration of an NFC tag command.
