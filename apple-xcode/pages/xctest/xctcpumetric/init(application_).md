> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctcpumetric/init(application:)](https://developer.apple.com/documentation/xctest/xctcpumetric/init(application:))

# init(application:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a CPU metric that records data for the requested app.

## Declaration

```swift
init(application: XCUIApplication)
```

## Parameters

- `application`: The application to be tested.

## See Also

### Initializers

- [init()](init%28%29.md): Creates a CPU metric that records data for the current process.
- [init(limitingToCurrentThread:)](init%28limitingtocurrentthread_%29.md): Creates a CPU metric that optionally records data only for the current thread.

# initWithApplication: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Creates a CPU metric that records data for the requested app.

## Declaration

```objectivec
- (instancetype) initWithApplication:(XCUIApplication *) application;
```

## Parameters

- `application`: The application to be tested.

## See Also

### Initializers

- [init](init%28%29.md): Creates a CPU metric that records data for the current process.
- [initLimitingToCurrentThread:](init%28limitingtocurrentthread_%29.md): Creates a CPU metric that optionally records data only for the current thread.
