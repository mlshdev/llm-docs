> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/mmspartcontent/customheaders

# customHeaders

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

A dictionary of custom headers to send in the MMS message.

## Declaration

```swift
var customHeaders: [MMSPartContent.MMSCustomHeader]
```

<a id="discussion"></a>

## Discussion

Delivery of custom headers isn’t guaranteed, since delivery depends on how accurately the cellular carrier network transports the MMS content.

## See Also

### Working with custom headers

- [addCustomHeader(\_:)](addcustomheader%28__%29.md): A helper function to add custom headers.
- [MMSPartContent.MMSCustomHeader](mmscustomheader.md): A structure that defines a custom header as a key-value pair.
