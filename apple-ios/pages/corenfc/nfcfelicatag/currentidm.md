> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcfelicatag/currentidm

# currentIDm (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The manufacturer identifier for the system currently selected by the reader session.

## Declaration

```swift
var currentIDm: Data { get }
```

<a id="Discussion"></a>

## Discussion

The reader session updates [currentIDm](currentidm.md) each time your app calls the [polling(systemCode:requestCode:timeSlot:completionHandler:)](polling%28systemcode_requestcode_timeslot_completionhandler_%29.md) method. The data contained in [currentIDm](currentidm.md) is empty when the system selection fails.

## See Also

### Getting Current Information

- [currentSystemCode](currentsystemcode.md): The system code most recently selected by the reader session during a polling sequence.

# currentIDm (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

The manufacturer identifier for the system currently selected by the reader session.

## Declaration

```objectivec
@property (nonatomic, retain, readonly) NSData * currentIDm;
```

<a id="Discussion"></a>

## Discussion

The reader session updates [currentIDm](currentidm.md) each time your app calls the [pollingWithSystemCode:requestCode:timeSlot:completionHandler:](polling%28systemcode_requestcode_timeslot_completionhandler_%29.md) method. The data contained in [currentIDm](currentidm.md) is empty when the system selection fails.

## See Also

### Getting Current Information

- [currentSystemCode](currentsystemcode.md): The system code most recently selected by the reader session during a polling sequence.
