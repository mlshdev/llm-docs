> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctossignpostmetric/init(subsystem:category:name:)](https://developer.apple.com/documentation/xctest/xctossignpostmetric/init(subsystem:category:name:))

# init(subsystem:category:name:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a metric to record a specific signpost.

## Declaration

```swift
init(subsystem: String, category: String, name: String)
```

## Parameters

- `subsystem`: The [OSLog](https://developer.apple.com/documentation/os/oslog) subsystem that logs the signpost events.
- `category`: The log category for the logged signpost events.
- `name`: The name of the signpost.

<a id="Discussion"></a>

## Discussion

Create an `XCTOSSignpostMetric` that records the time that elapses between the beginning and end of the named signpost in a particular log subsystem and category.

# initWithSubsystem:category:name: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a metric to record a specific signpost.

## Declaration

```objectivec
- (instancetype) initWithSubsystem:(NSString *) subsystem category:(NSString *) category name:(NSString *) name;
```

## Parameters

- `subsystem`: The [OSLog](https://developer.apple.com/documentation/os/oslog) subsystem that logs the signpost events.
- `category`: The log category for the logged signpost events.
- `name`: The name of the signpost.

<a id="Discussion"></a>

## Discussion

Create an `XCTOSSignpostMetric` that records the time that elapses between the beginning and end of the named signpost in a particular log subsystem and category.
