> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/mpcoherenceid](https://developer.apple.com/documentation/coreservices/mpcoherenceid)

# MPCoherenceID

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Represents a memory coherence group.

## Declaration

```objectivec
typedef struct OpaqueMPCoherenceID *MPCoherenceID;
```

<a id="discussion"></a>

## Discussion

A coherence group is the set of processors and other bus controllers that have cache-coherent access to memory. Mac OS 9 defines only one coherence group, which is all the processors that can access internal memory (RAM). Other coherence groups are possible; for example, a PCI card with its own memory and processors can comprise a coherence group.
