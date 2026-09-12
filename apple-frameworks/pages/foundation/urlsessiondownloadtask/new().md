> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/urlsessiondownloadtask/new()](https://developer.apple.com/documentation/foundation/urlsessiondownloadtask/new())

# new() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Creates and initializes a download task.

> Please use -\[NSURLSession downloadTaskWithRequest:\] or other NSURLSession methods to create instances

## Declaration

```swift
class func new() -> Self
```

<a id="Discussion"></a>

## Discussion

Don’t use this method to manually create download tasks. Instead, use the factory methods on [URLSession](../urlsession.md) to add tasks to an existing URL session.

## See Also

### Creating download tasks

- [init()](init%28%29.md): Deprecated. Initializes a download task.

# new (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 7.0+ (deprecated in 13.0) · iPadOS 7.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.9+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Creates and initializes a download task.

> Please use -\[NSURLSession downloadTaskWithRequest:\] or other NSURLSession methods to create instances

## Declaration

```objectivec
+ (instancetype) new;
```

<a id="Discussion"></a>

## Discussion

Don’t use this method to manually create download tasks. Instead, use the factory methods on [NSURLSession](../urlsession.md) to add tasks to an existing URL session.

## See Also

### Creating download tasks

- [init](init%28%29.md): Deprecated. Initializes a download task.
