> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiupdatelink/currentupdateinfo()](https://developer.apple.com/documentation/uikit/uiupdatelink/currentupdateinfo())

# currentUpdateInfo() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns an object that describes the current UI update state.

## Declaration

```swift
func currentUpdateInfo() -> UIUpdateInfo?
```

<a id="return-value"></a>

## Return Value

During a UI update, returns a [UIUpdateInfo](../uiupdateinfo.md) object that describes the current UI update state. Outside a UI update, returns `nil`.

## See Also

### Getting the current UI update information

- [UIUpdateInfo](../uiupdateinfo.md): An object that contains detailed information about the current UI update state.

# currentUpdateInfo (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · tvOS 18.0+ · visionOS 2.0+

Returns an object that describes the current UI update state.

## Declaration

```objectivec
- (UIUpdateInfo *) currentUpdateInfo;
```

<a id="return-value"></a>

## Return Value

During a UI update, returns a [UIUpdateInfo](../uiupdateinfo.md) object that describes the current UI update state. Outside a UI update, returns `nil`.

## See Also

### Getting the current UI update information

- [UIUpdateInfo](../uiupdateinfo.md): An object that contains detailed information about the current UI update state.
