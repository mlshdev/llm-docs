> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcndefmessage/length

# length (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The length, in bytes, of the NDEF message when stored on an NFC tag.

## Declaration

```swift
var length: Int { get }
```

<a id="Discussion"></a>

## Discussion

The maximum length of an NDEF message is 128 KB.

# length (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The length, in bytes, of the NDEF message when stored on an NFC tag.

## Declaration

```objectivec
@property (nonatomic, readonly) NSUInteger length;
```

<a id="Discussion"></a>

## Discussion

The maximum length of an NDEF message is 128 KB.
