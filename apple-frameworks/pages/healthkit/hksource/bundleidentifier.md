> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksource/bundleidentifier](https://developer.apple.com/documentation/healthkit/hksource/bundleidentifier)

# bundleIdentifier (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The source’s bundle identifier.

## Declaration

```swift
var bundleIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

For apps, this property holds the app’s bundle identifier. For supported Bluetooth LE devices, this property holds a UUID for the device.

## See Also

### Getting Property Data

- [name](name.md): The source’s name.

# bundleIdentifier (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The source’s bundle identifier.

## Declaration

```objectivec
@property (strong, readonly) NSString * bundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

For apps, this property holds the app’s bundle identifier. For supported Bluetooth LE devices, this property holds a UUID for the device.

## See Also

### Getting Property Data

- [name](name.md): The source’s name.
