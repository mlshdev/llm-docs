> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnimagerequesthandler/perform(_:)](https://developer.apple.com/documentation/vision/vnimagerequesthandler/perform(_:))

# perform(\_:) (Swift)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Schedules Vision requests to perform.

## Declaration

```swift
func perform(_ requests: [VNRequest]) throws
```

## Parameters

- `requests`: An array of Vision requests to perform.

<a id="Discussion"></a>

## Discussion

The function returns after all requests have either completed or failed. Check individual requests and errors for their respective successes and failures.

# performRequests:error: (Objective-C)

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Schedules Vision requests to perform.

## Declaration

```objectivec
- (BOOL) performRequests:(NSArray<VNRequest *> *) requests error:(NSError **) error;
```

## Parameters

- `requests`: An array of Vision requests to perform.
- `error`: An optional error parameter populated when problems arise in scheduling the requests. Check if the return value is [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if all requests were scheduled and performed.

<a id="Discussion"></a>

## Discussion

The function returns after all requests have either completed or failed. Check individual requests and errors for their respective successes and failures.
