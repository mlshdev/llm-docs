> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/computegraph/emitter/setgroup

# emitter::setGroup

**Framework:** Compute Graph  
**Kind:** Function  
**Availability:** macOS · Reality Composer Pro

Sets the element group(s) for spawn requests from this emitter.

## Declaration

```swift
void emitter::setGroup(int activeGroup, int sequentialGroups)
```

## Parameters

- `activeGroup`: Index of the first active group
- `sequentialGroups`: Number of groups to spawn. Only used when the emitter’s groupMode is `sequential`.

<a id="discussion"></a>

## Discussion

> **Visual**

> ![Graph](https://developer.apple.com/images/com.apple.computegraph/emitter__setGroup.svg)

> **Note**

> Reads from emitter state `int activeGroupIndex`, if it exists

> **Note**

> Reads from emitter state `int sequentialGroupCount`, if it exists
