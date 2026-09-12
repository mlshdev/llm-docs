> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkdirections/cancel()](https://developer.apple.com/documentation/mapkit/mkdirections/cancel())

# cancel() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Cancels a pending request.

## Declaration

```swift
func cancel()
```

<a id="Discussion"></a>

## Discussion

After canceling a request, you can call the [calculate(completionHandler:)](calculate%28completionhandler_%29.md) method again (if you want) to restart the request process.

## See Also

### Managing the request

- [isCalculating](iscalculating.md): A Boolean value that indicates whether a request is in process.

# cancel (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Cancels a pending request.

## Declaration

```objectivec
- (void) cancel;
```

<a id="Discussion"></a>

## Discussion

After canceling a request, you can call the [calculateDirectionsWithCompletionHandler:](calculate%28completionhandler_%29.md) method again (if you want) to restart the request process.

## See Also

### Managing the request

- [calculating](iscalculating.md): A Boolean value that indicates whether a request is in process.
