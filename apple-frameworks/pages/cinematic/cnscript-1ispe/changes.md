> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cinematic/cnscript-1ispe/changes](https://developer.apple.com/documentation/cinematic/cnscript-1ispe/changes)

# CNScript.Changes

**Framework:** Cinematic  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst · macOS 14.0+ · tvOS 17.0+

An object that represents a snapshot of the changes made to a movie script, including the added user decisions and detection tracks.

## Declaration

```swift
struct Changes
```

<a id="overview"></a>

## Overview

Use as a snapshot to quickly revert to previously saved edits.

## Topics

### Initializers

- [init(dataRepresentation:)](changes/init%28datarepresentation_%29.md): Creates a previously saved data representation.

### Instance Properties

- [addedDetectionTracks](changes/addeddetectiontracks.md): All detection tracks added since recording the movie.
- [dataRepresentation](changes/datarepresentation.md): Persistent data representation of changes for later restoration.
- [fNumber](changes/fnumber.md): The f/number to apply to the entire movie.
- [userDecisions](changes/userdecisions.md): All active user decisions, including those made at recording time, unless removed.
