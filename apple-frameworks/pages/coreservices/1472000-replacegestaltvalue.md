> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472000-replacegestaltvalue](https://developer.apple.com/documentation/coreservices/1472000-replacegestaltvalue)

# ReplaceGestaltValue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Replaces the value that the function `Gestalt` returns for a specified selector code with the value provided to the function.

## Declaration

```objectivec
OSErr ReplaceGestaltValue(OSType selector, SInt32 replacementValue);
```

## Parameters

- `selector`: The selector code you want to add. This should be a four-character sequence similar to those defined in [Constants](carbon_core/gestalt_manager.md#1667886).
- `replacementValue`: The replacement `Gestalt` value for the selector code.

<a id="return_value"></a>

## Return Value

A result code. See [Gestalt Manager](carbon_core/gestalt_manager.md).

<a id="discussion"></a>

## Discussion

You use the function `ReplaceGestaltValue` to replace an existing value. You should not call this function to introduce a value that doesn't already exist; instead call the function [NewGestaltValue](1472055-newgestaltvalue.md).

In macOS, the selector and replacement value are on a per-context basis. That means they are available only to the application or other code that installs them. You cannot use this function to make information available to another process.

## See Also

### Getting and Setting Gestalt Selector Codes and Values

- [Gestalt](1471624-gestalt.md): Deprecated. Obtains information about the operating environment.
- [NewGestaltValue](1472055-newgestaltvalue.md): Deprecated. Installs a new `Gestalt` selector code and a value that `Gestalt` returns for that selector.
- [SetGestaltValue](1470991-setgestaltvalue.md): Deprecated. Sets the value the function `Gestalt` will return for a specified selector code, installing the selector if it was not already installed.
- [DeleteGestaltValue](1472699-deletegestaltvalue.md): Deprecated. Deletes a `Gestalt` selector code so that it is no longer recognized by `Gestalt`.
