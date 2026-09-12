> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadnetwork/updatepostbackconversionvalue(_:coarsevalue:completionhandler:)](https://developer.apple.com/documentation/storekit/skadnetwork/updatepostbackconversionvalue(_:coarsevalue:completionhandler:))

# updatePostbackConversionValue(\_:coarseValue:completionHandler:) (Swift)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+

Updates the fine and coarse conversion values, and calls a completion handler if the update fails.

## Declaration

```swift
class func updatePostbackConversionValue(_ fineValue: Int, coarseValue: SKAdNetwork.CoarseConversionValue, completionHandler completion: (@Sendable ((any Error)?) -> Void)? = nil)
```

```swift
class func updatePostbackConversionValue(_ fineValue: Int, coarseValue: SKAdNetwork.CoarseConversionValue) async throws
```

## Parameters

- `fineValue`: An unsigned 6-bit value `≥0` and `≤63`. The app or the ad network defines the meaning of the conversion value.
- `coarseValue`: An [SKAdNetwork.CoarseConversionValue](coarseconversionvalue.md) value. The app or the ad network defines the meaning of this value.
- `completion`: An optional completion handler you provide to catch and handle any errors this method encounters when you update a conversion value. Set this value to `nil` if you don’t provide a handler.

## Mentioned In

- [SKAdNetwork 4 release notes](../skadnetwork-4-release-notes.md)
- [Configuring an advertised app](../configuring-an-advertised-app.md)
- [Receiving postbacks in multiple conversion windows](../receiving-postbacks-in-multiple-conversion-windows.md)

<a id="Discussion"></a>

## Discussion

Call this method when the user first launches an app to register the app installation, and optionally again, to update conversion values as the user engages with the app.

This method is identical to calling [updatePostbackConversionValue(\_:coarseValue:lockWindow:completionHandler:)](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md) with the `lockWindow` parameter set to `false`.

This method returns [SKANError.Code.invalidConversionValue](../skanerror-swift.struct/code/invalidconversionvalue.md) if the `fineValue` is outside of the allowed range.

> **Important**

>  The system ignores calls to this method if the `fineValue` is outside of the valid range. Valid conversion updates your app sends before or after an invalid conversion remain available.

## See Also

### Providing conversion information

- [updatePostbackConversionValue(\_:coarseValue:lockWindow:completionHandler:)](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md): Updates the fine and coarse conversion values and indicates whether to send the postback before the conversion window ends, and calls a completion handler if the update fails.
- [SKAdNetwork.CoarseConversionValue](coarseconversionvalue.md): Coarse values to use for updating conversion values.
- [updatePostbackConversionValue(\_:completionHandler:)](updatepostbackconversionvalue%28__completionhandler_%29.md): Verifies the first launch of an advertised app and, on subsequent calls, updates the conversion value or calls a completion handler if the update fails.

# updatePostbackConversionValue:coarseValue:completionHandler: (Objective-C)

**Framework:** StoreKit  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+

Updates the fine and coarse conversion values, and calls a completion handler if the update fails.

## Declaration

```objectivec
+ (void) updatePostbackConversionValue:(NSInteger) fineValue coarseValue:(SKAdNetworkCoarseConversionValue) coarseValue completionHandler:(void (^)(NSError *error)) completion;
```

## Parameters

- `fineValue`: An unsigned 6-bit value `≥0` and `≤63`. The app or the ad network defines the meaning of the conversion value.
- `coarseValue`: An [SKAdNetworkCoarseConversionValue](coarseconversionvalue.md) value. The app or the ad network defines the meaning of this value.
- `completion`: An optional completion handler you provide to catch and handle any errors this method encounters when you update a conversion value. Set this value to `nil` if you don’t provide a handler.

## Mentioned In

- [SKAdNetwork 4 release notes](../skadnetwork-4-release-notes.md)
- [Configuring an advertised app](../configuring-an-advertised-app.md)
- [Receiving postbacks in multiple conversion windows](../receiving-postbacks-in-multiple-conversion-windows.md)

<a id="Discussion"></a>

## Discussion

Call this method when the user first launches an app to register the app installation, and optionally again, to update conversion values as the user engages with the app.

This method is identical to calling [updatePostbackConversionValue:coarseValue:lockWindow:completionHandler:](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md) with the `lockWindow` parameter set to `false`.

This method returns [SKANErrorInvalidConversionValue](../skanerror-swift.struct/code/invalidconversionvalue.md) if the `fineValue` is outside of the allowed range.

> **Important**

>  The system ignores calls to this method if the `fineValue` is outside of the valid range. Valid conversion updates your app sends before or after an invalid conversion remain available.

## See Also

### Providing conversion information

- [updatePostbackConversionValue:coarseValue:lockWindow:completionHandler:](updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md): Updates the fine and coarse conversion values and indicates whether to send the postback before the conversion window ends, and calls a completion handler if the update fails.
- [SKAdNetworkCoarseConversionValue](coarseconversionvalue.md): Coarse values to use for updating conversion values.
- [updatePostbackConversionValue:completionHandler:](updatepostbackconversionvalue%28__completionhandler_%29.md): Verifies the first launch of an advertised app and, on subsequent calls, updates the conversion value or calls a completion handler if the update fails.
