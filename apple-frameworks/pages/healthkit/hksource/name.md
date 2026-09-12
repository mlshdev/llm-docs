> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hksource/name](https://developer.apple.com/documentation/healthkit/hksource/name)

# name (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The source’s name.

## Declaration

```swift
var name: String { get }
```

<a id="Discussion"></a>

## Discussion

For apps, this property holds a localized name for the app. For supported Bluetooth LE devices, this property holds whatever string the device reports as its name.

## See Also

### Getting Property Data

- [bundleIdentifier](bundleidentifier.md): The source’s bundle identifier.

# name (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The source’s name.

## Declaration

```objectivec
@property (strong, readonly) NSString * name;
```

<a id="Discussion"></a>

## Discussion

For apps, this property holds a localized name for the app. For supported Bluetooth LE devices, this property holds whatever string the device reports as its name.

## See Also

### Getting Property Data

- [bundleIdentifier](bundleidentifier.md): The source’s bundle identifier.
