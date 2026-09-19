> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1445989-fseventstreamrelease

# FSEventStreamRelease(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamRelease(_ streamRef: FSEventStreamRef)
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Decrements the stream's refcount. The refcount is initially one and is incremented via FSEventStreamRetain(). If the refcount reaches zero then the stream is deallocated.

# FSEventStreamRelease (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
void FSEventStreamRelease(FSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Decrements the stream's refcount. The refcount is initially one and is incremented via FSEventStreamRetain(). If the refcount reaches zero then the stream is deallocated.
