> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/skadnetwork/coarseconversionvalue/init(rawvalue:)](https://developer.apple.com/documentation/storekit/skadnetwork/coarseconversionvalue/init(rawvalue:))

# init(rawValue:)

**Framework:** StoreKit  
**Kind:** Initializer  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+

Creates a coarse conversion value from the raw value.

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: A string that is one of  [low](low.md), [medium](medium.md), or [high](high.md).

<a id="Discussion"></a>

## Discussion

You don’t need to call the initializer to use coarse conversion values. When you provide the coarse conversion value to the [updatePostbackConversionValue(\_:coarseValue:completionHandler:)](../updatepostbackconversionvalue%28__coarsevalue_completionhandler_%29.md) or [updatePostbackConversionValue(\_:coarseValue:lockWindow:completionHandler:)](../updatepostbackconversionvalue%28__coarsevalue_lockwindow_completionhandler_%29.md) methods, use the static constants, [low](low.md), [medium](medium.md), or [high](high.md).

## See Also

### Providing coarse conversion values

- [high](high.md): A string constant value for indicating a high coarse conversion value.
- [low](low.md): A string constant value for indicating a low coarse conversion value.
- [medium](medium.md): A string constant value for indicating a medium coarse conversion value.
