> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmaccessory/supportsidentify](https://developer.apple.com/documentation/homekit/hmaccessory/supportsidentify)

# supportsIdentify (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 13.1+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

A Boolean value that indicates whether the accessory supports the identify action.

## Declaration

```swift
var supportsIdentify: Bool { get }
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), any calls to the [identify(completionHandler:)](identify%28completionhandler_%29.md) method return an error. However, even if this property is [true](https://developer.apple.com/documentation/swift/true), calls to [identify(completionHandler:)](identify%28completionhandler_%29.md) may not succeed.

## See Also

### Asking an accessory to identify itself

- [identify(completionHandler:)](identify%28completionhandler_%29.md): Asks an accessory to identify itself.

# supportsIdentify (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · tvOS 11.3+ · visionOS 1.0+ · watchOS 4.3+

A Boolean value that indicates whether the accessory supports the identify action.

## Declaration

```objectivec
@property (readonly) BOOL supportsIdentify;
```

<a id="Discussion"></a>

## Discussion

If [false](https://developer.apple.com/documentation/swift/false), any calls to the [identifyWithCompletionHandler:](identify%28completionhandler_%29.md) method return an error. However, even if this property is [true](https://developer.apple.com/documentation/swift/true), calls to [identifyWithCompletionHandler:](identify%28completionhandler_%29.md) may not succeed.

## See Also

### Asking an accessory to identify itself

- [identifyWithCompletionHandler:](identify%28completionhandler_%29.md): Asks an accessory to identify itself.
