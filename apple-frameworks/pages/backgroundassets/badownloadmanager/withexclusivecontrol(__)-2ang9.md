> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundassets/badownloadmanager/withexclusivecontrol(_:)-2ang9](https://developer.apple.com/documentation/backgroundassets/badownloadmanager/withexclusivecontrol(_:)-2ang9)

# withExclusiveControl(\_:) (Swift)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ (deprecated in 27.0) · iPadOS 16.1+ (deprecated in 27.0) · Mac Catalyst 16.1+ (deprecated in 27.0) · macOS 13.0+ (deprecated in 27.0) · tvOS 18.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

> Use the asynchronous overload of withExclusiveControl(\_:) instead.

## Declaration

```swift
func withExclusiveControl(_ performHandler: @escaping (Bool, (any Error)?) -> Void)
```

## Parameters

- `performHandler`: A block that will be executed once exclusive control is acquired. If an error is non-nil then a problem occurred acquiring exclusive access.

<a id="discussion"></a>

## Discussion

Acquires exclusive access to the BADownloadManager across the app and application extension.

Acquires exclusive access to the BADownloadManager across the app and application extension. This ensures that your extension and app do not perform operations at the same time. Both the extension and app must use this API to ensure exclusive access.

# performWithExclusiveControl: (Objective-C)

**Framework:** Background Assets  
**Kind:** Instance Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 18.4+ · visionOS 2.4+

## Declaration

```objectivec
- (void) performWithExclusiveControl:(void (^)(BOOL acquiredLock, NSError *error)) performHandler;
```

## Parameters

- `performHandler`: A block that will be executed once exclusive control is acquired. If an error is non-nil then a problem occurred acquiring exclusive access.

<a id="discussion"></a>

## Discussion

Acquires exclusive access to the BADownloadManager across the app and application extension.

Acquires exclusive access to the BADownloadManager across the app and application extension. This ensures that your extension and app do not perform operations at the same time. Both the extension and app must use this API to ensure exclusive access.
