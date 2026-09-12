> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/supportedcapabilities/supportsactivejournal](https://developer.apple.com/documentation/fskit/fsvolume/supportedcapabilities/supportsactivejournal)

# supportsActiveJournal (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume currently uses a journal for speeding recovery after an unplanned shutdown.

## Declaration

```swift
var supportsActiveJournal: Bool { get set }
```

## See Also

### Declaring journaling capabilities

- [supportsJournal](supportsjournal.md): A Boolean property that indicates whether the volume supports a journal used to speed recovery in case of unplanned restart, such as a power outage or crash.

# supportsActiveJournal (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

A Boolean property that indicates whether the volume currently uses a journal for speeding recovery after an unplanned shutdown.

## Declaration

```objectivec
@property (nonatomic) BOOL supportsActiveJournal;
```

## See Also

### Declaring journaling capabilities

- [supportsJournal](supportsjournal.md): A Boolean property that indicates whether the volume supports a journal used to speed recovery in case of unplanned restart, such as a power outage or crash.
