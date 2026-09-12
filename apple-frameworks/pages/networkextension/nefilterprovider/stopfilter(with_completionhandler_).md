> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterprovider/stopfilter(with:completionhandler:)](https://developer.apple.com/documentation/networkextension/nefilterprovider/stopfilter(with:completionhandler:))

# stopFilter(with:completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Stop the filter.

## Declaration

```swift
func stopFilter(with reason: NEProviderStopReason, completionHandler: @escaping @Sendable () -> Void)
```

```swift
func stopFilter(with reason: NEProviderStopReason) async
```

## Parameters

- `reason`: An `NEProviderStopReason` code indicating why the filter is being stopped. For a list of possible codes, see [NEProvider](../neprovider.md).
- `completionHandler`: A block that must be executed when the filter is fully stopped.

<a id="Discussion"></a>

## Discussion

This method is called by the system to stop the filter.

`NEFilterProvider` subclasses must override this method.

## See Also

### Managing the filter life cycle

- [startFilter(completionHandler:)](startfilter%28completionhandler_%29.md): Start the filter.

# stopFilterWithReason:completionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Stop the filter.

## Declaration

```objectivec
- (void) stopFilterWithReason:(NEProviderStopReason) reason completionHandler:(void (^)()) completionHandler;
```

## Parameters

- `reason`: An `NEProviderStopReason` code indicating why the filter is being stopped. For a list of possible codes, see [NEProvider](../neprovider.md).
- `completionHandler`: A block that must be executed when the filter is fully stopped.

<a id="Discussion"></a>

## Discussion

This method is called by the system to stop the filter.

`NEFilterProvider` subclasses must override this method.

## See Also

### Managing the filter life cycle

- [startFilterWithCompletionHandler:](startfilter%28completionhandler_%29.md): Start the filter.
