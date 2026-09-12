> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supportsjournal](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportsjournal)

# supportsJournal (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports a journal used to speed recovery in case of unplanned restart, such as a power outage or crash.

## Declaration

```swift
var supportsJournal: Bool { get set }
```

<a id="discussion"></a>

## Discussion

This property doesn’t necessarily mean the volume is actively using a journal.

## See Also

### Declaring journaling capabilities

- [supportsActiveJournal](supportsactivejournal.md): A Boolean property that indicates whether the volume currently uses a journal for speeding recovery after an unplanned shutdown.

# supportsJournal (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume supports a journal used to speed recovery in case of unplanned restart, such as a power outage or crash.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsJournal;
```

<a id="discussion"></a>

## Discussion

This property doesn’t necessarily mean the volume is actively using a journal.

## See Also

### Declaring journaling capabilities

- [supportsActiveJournal](supportsactivejournal.md): A Boolean property that indicates whether the volume currently uses a journal for speeding recovery after an unplanned shutdown.
