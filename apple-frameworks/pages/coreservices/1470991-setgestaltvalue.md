> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1470991-setgestaltvalue](https://developer.apple.com/documentation/coreservices/1470991-setgestaltvalue)

# SetGestaltValue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Sets the value the function `Gestalt` will return for a specified selector code, installing the selector if it was not already installed.

## Declaration

```objectivec
OSErr SetGestaltValue(OSType selector, SInt32 newValue);
```

## Parameters

- `selector`: The selector code you want to set. This should be a four-character sequence similar to those defined in [Constants](carbon_core/gestalt_manager.md#1667886).
- `newValue`: The new `Gestalt` value for the selector code.

<a id="return_value"></a>

## Return Value

A result code. See [Gestalt Manager](carbon_core/gestalt_manager.md).

<a id="discussion"></a>

## Discussion

You use `SetGestaltValue` to establish a value for a selector, without regard to whether the selector was already installed.

In macOS, the selector and new value are on a per-context basis. That means they are available only to the application or other code that installs them. You cannot use this function to make information available to another process.

## See Also

### Getting and Setting Gestalt Selector Codes and Values

- [Gestalt](1471624-gestalt.md): Deprecated. Obtains information about the operating environment.
- [NewGestaltValue](1472055-newgestaltvalue.md): Deprecated. Installs a new `Gestalt` selector code and a value that `Gestalt` returns for that selector.
- [ReplaceGestaltValue](1472000-replacegestaltvalue.md): Deprecated. Replaces the value that the function `Gestalt` returns for a specified selector code with the value provided to the function.
- [DeleteGestaltValue](1472699-deletegestaltvalue.md): Deprecated. Deletes a `Gestalt` selector code so that it is no longer recognized by `Gestalt`.
