> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avprovideostorage/remainingcapacity](https://developer.apple.com/documentation/avfoundation/avprovideostorage/remainingcapacity)

# remainingCapacity (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Current size of Pro Video Storage in bytes.

## Declaration

```swift
var remainingCapacity: Int { get }
```

<a id="return-value"></a>

## Return Value

0 if Pro Video Storage is not configured or -1 if there was a failure while extracting information from it.

<a id="discussion"></a>

## Discussion

The remaining capacity decreases as recordings are captured.

## See Also

### Inspecting capacity

- [initialCapacity](initialcapacity.md): Initial size of Pro Video Storage in bytes.
- [replenishCapacity(completionHandler:)](replenishcapacity%28completionhandler_%29.md): Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.

# remainingCapacity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Current size of Pro Video Storage in bytes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger remainingCapacity;
```

<a id="return-value"></a>

## Return Value

0 if Pro Video Storage is not configured or -1 if there was a failure while extracting information from it.

<a id="discussion"></a>

## Discussion

The remaining capacity decreases as recordings are captured.

## See Also

### Inspecting capacity

- [initialCapacity](initialcapacity.md): Initial size of Pro Video Storage in bytes.
- [replenishCapacityWithCompletionHandler:](replenishcapacity%28completionhandler_%29.md): Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.
