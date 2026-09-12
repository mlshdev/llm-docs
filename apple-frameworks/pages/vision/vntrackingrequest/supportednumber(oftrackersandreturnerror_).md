> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntrackingrequest/supportednumber(oftrackersandreturnerror:)](https://developer.apple.com/documentation/vision/vntrackingrequest/supportednumber(oftrackersandreturnerror:))

# supportedNumber(ofTrackersAndReturnError:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the maximum number of simultaneous trackers for the request.

## Declaration

```swift
func supportedNumber(ofTrackersAndReturnError error: NSErrorPointer) -> Int
```

## Parameters

- `error`: An error that contains the reason why a failure occurs.

<a id="return-value"></a>

## Return Value

The maximum number of trackers given a combination; or `0` if such combination doesn’t exist.

# supportedNumberOfTrackersAndReturnError: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the maximum number of simultaneous trackers for the request.

## Declaration

```objectivec
- (NSUInteger) supportedNumberOfTrackersAndReturnError:(NSError **) error;
```

## Parameters

- `error`: An error that contains the reason why a failure occurs.

<a id="return-value"></a>

## Return Value

The maximum number of trackers given a combination; or `0` if such combination doesn’t exist.
