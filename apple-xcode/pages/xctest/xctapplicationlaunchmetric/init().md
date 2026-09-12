> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctapplicationlaunchmetric/init()](https://developer.apple.com/documentation/xctest/xctapplicationlaunchmetric/init())

# init() (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks.

## Declaration

```swift
init()
```

<a id="Discussion"></a>

## Discussion

If you didn’t start any extended launch tasks using [extendLaunchMeasurement(forTaskID:)](https://developer.apple.com/documentation/metrickit/mxmetricmanager/extendlaunchmeasurement%28fortaskid:%29), this metric measures only the time for your app to display its first frame to screen.

## See Also

### Initializers

- [init(waitUntilResponsive:)](init%28waituntilresponsive_%29.md): Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks, or to display its first frame and wait until the app is responsive.

# init (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 7.0+

Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="Discussion"></a>

## Discussion

If you didn’t start any extended launch tasks using [extendLaunchMeasurementForTaskID:error:](https://developer.apple.com/documentation/metrickit/mxmetricmanager/extendlaunchmeasurement%28fortaskid:%29), this metric measures only the time for your app to display its first frame to screen.

## See Also

### Initializers

- [initWithWaitUntilResponsive:](init%28waituntilresponsive_%29.md): Initializes a metric that records the time for an app to display its first frame to screen and complete all extended launch tasks, or to display its first frame and wait until the app is responsive.
