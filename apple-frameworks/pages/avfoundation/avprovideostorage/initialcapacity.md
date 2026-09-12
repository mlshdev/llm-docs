> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avprovideostorage/initialcapacity](https://developer.apple.com/documentation/avfoundation/avprovideostorage/initialcapacity)

# initialCapacity (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Initial size of Pro Video Storage in bytes.

## Declaration

```swift
var initialCapacity: Int { get }
```

<a id="return-value"></a>

## Return Value

0 if Pro Video Storage is not configured or -1 if there was a failure while extracting information from it.

<a id="discussion"></a>

## Discussion

The initial capacity is defined by the user via the Settings app.

## See Also

### Inspecting capacity

- [remainingCapacity](remainingcapacity.md): Current size of Pro Video Storage in bytes.
- [replenishCapacity(completionHandler:)](replenishcapacity%28completionhandler_%29.md): Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.

# initialCapacity (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+

Initial size of Pro Video Storage in bytes.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger initialCapacity;
```

<a id="return-value"></a>

## Return Value

0 if Pro Video Storage is not configured or -1 if there was a failure while extracting information from it.

<a id="discussion"></a>

## Discussion

The initial capacity is defined by the user via the Settings app.

## See Also

### Inspecting capacity

- [remainingCapacity](remainingcapacity.md): Current size of Pro Video Storage in bytes.
- [replenishCapacityWithCompletionHandler:](replenishcapacity%28completionhandler_%29.md): Performs a best-effort attempt to restore Pro Video Storage to the initial capacity specified by the user in Settings app.
