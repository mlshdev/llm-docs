> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/datadetection/datadetector/match/semanticdetails/phonenumber/phonenumber

# phoneNumber

**Framework:** DataDetection  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A string that contains the phone number the data detector found.

## Declaration

```swift
let phoneNumber: String
```

<a id="Discussion"></a>

## Discussion

The string may also contain an extension, such as a passcode or an office extension.

## See Also

### Components of a phone number

- [label](label.md): An optional string that may contain a value suitable to populate a label when creating a contact.
