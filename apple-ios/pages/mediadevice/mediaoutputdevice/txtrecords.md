> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediadevice/mediaoutputdevice/txtrecords

# txtRecords

**Framework:** Media Device  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

TXT records associated with the device discovered via network protocols.

## Declaration

```swift
let txtRecords: [NWTXTRecord]
```

<a id="discussion"></a>

## Discussion

Contains key-value pairs of metadata about the device that were advertised during network discovery (for example, via Bonjour/mDNS). This information can include device-specific attributes, service capabilities, version information, or other properties that help identify and configure the connection.

> **See Also**

> `NWTXTRecord` for details on working with TXT record data
