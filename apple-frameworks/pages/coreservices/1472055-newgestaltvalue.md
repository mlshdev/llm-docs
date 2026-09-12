> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472055-newgestaltvalue](https://developer.apple.com/documentation/coreservices/1472055-newgestaltvalue)

# NewGestaltValue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Installs a new `Gestalt` selector code and a value that `Gestalt` returns for that selector.

## Declaration

```objectivec
OSErr NewGestaltValue(OSType selector, SInt32 newValue);
```

## Parameters

- `selector`: The selector code you want to add. This should be a four-character sequence similar to those defined in [Constants](carbon_core/gestalt_manager.md#1667886).
- `newValue`: The value to return for the new selector code.

<a id="return_value"></a>

## Return Value

A result code. See [Gestalt Manager](carbon_core/gestalt_manager.md).

<a id="discussion"></a>

## Discussion

You call the function `NewGestaltValue` when the specified selector is not already installed and you don't want to override an existing value.

In macOS, the new selector and value are on a per-context basis. That means they are available only to the application or other code that installs them. You cannot use this function to make information available to another process.

## See Also

### Getting and Setting Gestalt Selector Codes and Values

- [Gestalt](1471624-gestalt.md): Deprecated. Obtains information about the operating environment.
- [SetGestaltValue](1470991-setgestaltvalue.md): Deprecated. Sets the value the function `Gestalt` will return for a specified selector code, installing the selector if it was not already installed.
- [ReplaceGestaltValue](1472000-replacegestaltvalue.md): Deprecated. Replaces the value that the function `Gestalt` returns for a specified selector code with the value provided to the function.
- [DeleteGestaltValue](1472699-deletegestaltvalue.md): Deprecated. Deletes a `Gestalt` selector code so that it is no longer recognized by `Gestalt`.
