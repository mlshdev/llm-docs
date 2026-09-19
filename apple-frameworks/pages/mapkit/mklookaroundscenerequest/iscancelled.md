> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mklookaroundscenerequest/iscancelled

# isCancelled (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates if the cancellation of a scene request was successful.

## Declaration

```swift
var isCancelled: Bool { get }
```

## See Also

### Monitoring the progress of scene requests

- [isLoading](isloading.md): A Boolean value that indicates whether a scene request is loading.

# cancelled (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates if the cancellation of a scene request was successful.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isCancelled) BOOL cancelled;
```

## See Also

### Monitoring the progress of scene requests

- [loading](isloading.md): A Boolean value that indicates whether a scene request is loading.
