> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadnetwork/coarseconversionvalue](https://developer.apple.com/documentation/storekit/skadnetwork/coarseconversionvalue)

# SKAdNetwork.CoarseConversionValue (Swift)

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+

Coarse values to use for updating conversion values.

## Declaration

```swift
struct CoarseConversionValue
```

## Mentioned In

- [SKAdNetwork 4 release notes](../skadnetwork-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

When you provide the coarse conversion value to the [updatePostbackConversionValue(\_:coarseValue:completionHandler:)](updatepostbackconversionvalue%28__coarsevalue_completionhandler_%29.md) or [updatePostbackConversionValue(\_:coarseValue:lockWindow:completionHandler:)](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md) methods, use the static constants [low](coarseconversionvalue/low.md), [medium](coarseconversionvalue/medium.md), or [high](coarseconversionvalue/high.md).

These constants have no special meaning. The app or ad network can define their meaning, as is useful for their ad campaigns. The app is responsible for assigning a coarse conversion value, as well as the fine conversion value, when it calls one of the conversion value methods. You can determine how the coarse and fine conversion values relate to the types of conversion events you want to measure.

## Topics

### Providing coarse conversion values

- [high](coarseconversionvalue/high.md): A string constant value for indicating a high coarse conversion value.
- [low](coarseconversionvalue/low.md): A string constant value for indicating a low coarse conversion value.
- [medium](coarseconversionvalue/medium.md): A string constant value for indicating a medium coarse conversion value.
- [init(rawValue:)](coarseconversionvalue/init%28rawvalue_%29.md): Creates a coarse conversion value from the raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Providing conversion information

- [updatePostbackConversionValue(\_:coarseValue:lockWindow:completionHandler:)](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md): Updates the fine and coarse conversion values and indicates whether to send the postback before the conversion window ends, and calls a completion handler if the update fails.
- [updatePostbackConversionValue(\_:coarseValue:completionHandler:)](updatepostbackconversionvalue%28__coarsevalue_completionhandler_%29.md): Updates the fine and coarse conversion values, and calls a completion handler if the update fails.
- [updatePostbackConversionValue(\_:completionHandler:)](updatepostbackconversionvalue%28__completionhandler_%29.md): Verifies the first launch of an advertised app and, on subsequent calls, updates the conversion value or calls a completion handler if the update fails.

# SKAdNetworkCoarseConversionValue (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Alias  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+

Coarse values to use for updating conversion values.

## Declaration

```objectivec
typedef NSString * SKAdNetworkCoarseConversionValue;
```

## Mentioned In

- [SKAdNetwork 4 release notes](../skadnetwork-4-release-notes.md)

<a id="Discussion"></a>

## Discussion

When you provide the coarse conversion value to the [updatePostbackConversionValue:coarseValue:completionHandler:](updatepostbackconversionvalue%28__coarsevalue_completionhandler_%29.md) or [updatePostbackConversionValue:coarseValue:lockWindow:completionHandler:](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md) methods, use the static constants [SKAdNetworkCoarseConversionValueLow](coarseconversionvalue/low.md), [SKAdNetworkCoarseConversionValueMedium](coarseconversionvalue/medium.md), or [SKAdNetworkCoarseConversionValueHigh](coarseconversionvalue/high.md).

These constants have no special meaning. The app or ad network can define their meaning, as is useful for their ad campaigns. The app is responsible for assigning a coarse conversion value, as well as the fine conversion value, when it calls one of the conversion value methods. You can determine how the coarse and fine conversion values relate to the types of conversion events you want to measure.

## Topics

### Providing coarse conversion values

- [SKAdNetworkCoarseConversionValueHigh](coarseconversionvalue/high.md): A string constant value for indicating a high coarse conversion value.
- [SKAdNetworkCoarseConversionValueLow](coarseconversionvalue/low.md): A string constant value for indicating a low coarse conversion value.
- [SKAdNetworkCoarseConversionValueMedium](coarseconversionvalue/medium.md): A string constant value for indicating a medium coarse conversion value.

## See Also

### Providing conversion information

- [updatePostbackConversionValue:coarseValue:lockWindow:completionHandler:](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md): Updates the fine and coarse conversion values and indicates whether to send the postback before the conversion window ends, and calls a completion handler if the update fails.
- [updatePostbackConversionValue:coarseValue:completionHandler:](updatepostbackconversionvalue%28__coarsevalue_completionhandler_%29.md): Updates the fine and coarse conversion values, and calls a completion handler if the update fails.
- [updatePostbackConversionValue:completionHandler:](updatepostbackconversionvalue%28__completionhandler_%29.md): Verifies the first launch of an advertised app and, on subsequent calls, updates the conversion value or calls a completion handler if the update fails.
