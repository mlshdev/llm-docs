> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/mmspartcontent/mmscustomheader](https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/mmscustomheader)

# MMSPartContent.MMSCustomHeader

**Framework:** TelephonyMessagingKit  
**Kind:** Structure  
**Availability:** iOS 26.0+

A structure that defines a custom header as a key-value pair.

## Declaration

```swift
struct MMSCustomHeader
```

<a id="overview"></a>

## Overview

TelephonyMessagingKit exposes custom headers in case a message needs to include them in an MMS message.

## Topics

### Accessing header properties

- [key](mmscustomheader/key.md): The key for the custom header.
- [value](mmscustomheader/value.md): The value of the custom header.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with custom headers

- [customHeaders](customheaders.md): A dictionary of custom headers to send in the MMS message.
- [addCustomHeader(\_:)](addcustomheader%28__%29.md): A helper function to add custom headers.
