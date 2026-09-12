> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nefilterprovider/startfilter(completionhandler:)](https://developer.apple.com/documentation/networkextension/nefilterprovider/startfilter(completionhandler:))

# startFilter(completionHandler:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Start the filter.

## Declaration

```swift
func startFilter(completionHandler: @escaping @Sendable ((any Error)?) -> Void)
```

```swift
func startFilter() async throws
```

## Parameters

- `completionHandler`: A block that must be executed when the filter is running and is ready to filter network content.

<a id="Discussion"></a>

## Discussion

This method is called by the system to start the filter.

`NEFilterProvider` subclasses must override this method.

When this method is called, the Filter Provider should perform any steps necessary to initialize the filter and then execute the `completionHandler` block.

## See Also

### Managing the filter life cycle

- [stopFilter(with:completionHandler:)](stopfilter%28with_completionhandler_%29.md): Stop the filter.

# startFilterWithCompletionHandler: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

Start the filter.

## Declaration

```objectivec
- (void) startFilterWithCompletionHandler:(void (^)(NSError *error)) completionHandler;
```

## Parameters

- `completionHandler`: A block that must be executed when the filter is running and is ready to filter network content.

<a id="Discussion"></a>

## Discussion

This method is called by the system to start the filter.

`NEFilterProvider` subclasses must override this method.

When this method is called, the Filter Provider should perform any steps necessary to initialize the filter and then execute the `completionHandler` block.

## See Also

### Managing the filter life cycle

- [stopFilterWithReason:completionHandler:](stopfilter%28with_completionhandler_%29.md): Stop the filter.
