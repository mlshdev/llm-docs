> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1448000-fseventstreamstart](https://developer.apple.com/documentation/coreservices/1448000-fseventstreamstart)

# FSEventStreamStart(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamStart(_ streamRef: FSEventStreamRef) -> Bool
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

True if it succeeds, otherwise False if it fails. It ought to always succeed, but in the event it does not then your code should fall back to performing recursive scans of the directories of interest as appropriate.

<a id="discussion"></a>

## Discussion

Attempts to register with the FS Events service to receive events per the parameters in the stream.

FSEventStreamStart() can only be called once the stream has been scheduled on at least one runloop, via FSEventStreamScheduleWithRunLoop().

Once started, the stream can be stopped via FSEventStreamStop().

# FSEventStreamStart (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
Boolean FSEventStreamStart(FSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="return_value"></a>

## Return Value

True if it succeeds, otherwise False if it fails. It ought to always succeed, but in the event it does not then your code should fall back to performing recursive scans of the directories of interest as appropriate.

<a id="discussion"></a>

## Discussion

Attempts to register with the FS Events service to receive events per the parameters in the stream.

FSEventStreamStart() can only be called once the stream has been scheduled on at least one runloop, via FSEventStreamScheduleWithRunLoop().

Once started, the stream can be stopped via FSEventStreamStop().
