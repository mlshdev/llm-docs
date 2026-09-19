> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1455361-fseventstreameventflags/kfseventstreameventflageventidswrapped

# kFSEventStreamEventFlagEventIdsWrapped

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration Case  
**Availability:** Mac Catalyst 13.0+ · macOS 10.5+

## Declaration

```objectivec
kFSEventStreamEventFlagEventIdsWrapped = 0x00000008
```

<a id="discussion"></a>

## Discussion

If kFSEventStreamEventFlagEventIdsWrapped is set, it means the 64-bit event ID counter wrapped around. As a result, previously-issued event ID's are no longer valid arguments for the sinceWhen parameter of the FSEventStreamCreate...() functions.
