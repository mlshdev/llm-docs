> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/1444302-fseventstreamshow

# FSEventStreamShow(\_:) (Swift)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```swift
func FSEventStreamShow(_ streamRef: ConstFSEventStreamRef)
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Prints a description of the supplied stream to stderr. For debugging only.

# FSEventStreamShow (Objective-C)

**Framework:** Core Services  
**Kind:** Function  
**Availability:** Mac Catalyst 13.1+ · macOS 10.5+

## Declaration

```objectivec
void FSEventStreamShow(ConstFSEventStreamRef streamRef);
```

## Parameters

- `streamRef`: A valid stream.

<a id="discussion"></a>

## Discussion

Prints a description of the supplied stream to stderr. For debugging only.
