> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctmemorymetric/init(application:)](https://developer.apple.com/documentation/xctest/xctmemorymetric/init(application:))

# init(application:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a metric that measures memory use in the target app.

## Declaration

```swift
init(application: XCUIApplication)
```

## Parameters

- `application`: The application to be tested.

## See Also

### Initializers

- [init()](init%28%29.md): Initializes a metric that measures memory use in the current process.

# initWithApplication: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a metric that measures memory use in the target app.

## Declaration

```objectivec
- (instancetype) initWithApplication:(XCUIApplication *) application;
```

## Parameters

- `application`: The application to be tested.

## See Also

### Initializers

- [init](init%28%29.md): Initializes a metric that measures memory use in the current process.
