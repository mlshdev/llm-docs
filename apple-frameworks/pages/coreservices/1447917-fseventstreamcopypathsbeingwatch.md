> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1447917-fseventstreamcopypathsbeingwatch](https://developer.apple.com/documentation/coreservices/1447917-fseventstreamcopypathsbeingwatch)

# FSEventStreamCopyPathsBeingWatched(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamCopyPathsBeingWatched(_ streamRef: ConstFSEventStreamRef) -> CFArray
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

A CFArray of CFStringRefs corresponding to those supplied when the stream was created. Ownership follows the Copy rule.

<a id="discussion"></a>

## Discussion

Fetches the paths supplied when the stream was created via one of the FSEventStreamCreate...() functions.

# FSEventStreamCopyPathsBeingWatched (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
CFArrayRef FSEventStreamCopyPathsBeingWatched(ConstFSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

A CFArray of CFStringRefs corresponding to those supplied when the stream was created. Ownership follows the Copy rule.

<a id="discussion"></a>

## Discussion

Fetches the paths supplied when the stream was created via one of the FSEventStreamCreate...() functions.
