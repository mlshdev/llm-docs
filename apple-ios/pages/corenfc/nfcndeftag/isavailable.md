> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndeftag/isavailable](https://developer.apple.com/documentation/corenfc/nfcndeftag/isavailable)

# isAvailable (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the NDEF tag is available in the current reader session.

## Declaration

```swift
var isAvailable: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A tag removed from the RF field becomes unavailable, and a tag in a disconnected state is also unavailable.

## See Also

### Getting the Tag Status

- [queryNDEFStatus(completionHandler:)](queryndefstatus%28completionhandler_%29.md): Asks the reader session for the NDEF support status of the tag.
- [NFCNDEFStatus](../nfcndefstatus.md): Constants that indicate status for an NDEF tag.

# available (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

A Boolean value that determines whether the NDEF tag is available in the current reader session.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isAvailable) BOOL available;
```

<a id="Discussion"></a>

## Discussion

A tag removed from the RF field becomes unavailable, and a tag in a disconnected state is also unavailable.

## See Also

### Getting the Tag Status

- [queryNDEFStatusWithCompletionHandler:](queryndefstatus%28completionhandler_%29.md): Asks the reader session for the NDEF support status of the tag.
- [NFCNDEFStatus](../nfcndefstatus.md): Constants that indicate status for an NDEF tag.
