> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdecimalnumber/defaultbehavior](https://developer.apple.com/documentation/foundation/nsdecimalnumber/defaultbehavior)

# defaultBehavior (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The way arithmetic methods round off and handle error conditions.

## Declaration

```swift
class var defaultBehavior: any NSDecimalNumberBehaviors { get set }
```

<a id="Discussion"></a>

## Discussion

By default, the arithmetic methods use the `NSRoundPlain` behavior; that is, the methods round to the closest possible return value. The methods assume your need for precision does not exceed 38 significant digits and raise exceptions when they try to divide by 0 or produce a number too big or too small to be represented.

If this default behavior doesn’t suit your application, you should use methods that let you specify the behavior, like [adding(\_:withBehavior:)](adding%28__withbehavior_%29.md). If you find yourself using a particular behavior consistently, you can specify a different default behavior with `setDefaultBehavior(_:)`.

The default behavior is maintained separately for each thread in your app.

## See Also

### Managing Behavior

- [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md): A protocol that declares three methods that control the discretionary aspects of working with decimal numbers.
- [NSDecimalNumberHandler](../nsdecimalnumberhandler.md): A class that adopts the decimal number behaviors protocol.

# defaultBehavior (Objective-C)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The way arithmetic methods round off and handle error conditions.

## Declaration

```objectivec
@property (class, strong) id<NSDecimalNumberBehaviors> defaultBehavior;
```

<a id="Discussion"></a>

## Discussion

By default, the arithmetic methods use the `NSRoundPlain` behavior; that is, the methods round to the closest possible return value. The methods assume your need for precision does not exceed 38 significant digits and raise exceptions when they try to divide by 0 or produce a number too big or too small to be represented.

If this default behavior doesn’t suit your application, you should use methods that let you specify the behavior, like [decimalNumberByAdding:withBehavior:](adding%28__withbehavior_%29.md). If you find yourself using a particular behavior consistently, you can specify a different default behavior with `setDefaultBehavior(_:)`.

The default behavior is maintained separately for each thread in your app.

## See Also

### Managing Behavior

- [NSDecimalNumberBehaviors](../nsdecimalnumberbehaviors.md): A protocol that declares three methods that control the discretionary aspects of working with decimal numbers.
- [NSDecimalNumberHandler](../nsdecimalnumberhandler.md): A class that adopts the decimal number behaviors protocol.
