> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1472699-deletegestaltvalue](https://developer.apple.com/documentation/coreservices/1472699-deletegestaltvalue)

# DeleteGestaltValue

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Function  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Deletes a `Gestalt` selector code so that it is no longer recognized by `Gestalt`.

## Declaration

```objectivec
OSErr DeleteGestaltValue(OSType selector);
```

## Parameters

- `selector`: The selector code you want to delete. This should be a four-character sequence similar to those defined in [Constants](carbon_core/gestalt_manager.md#1667886).

<a id="return_value"></a>

## Return Value

A result code. See [Gestalt Manager](carbon_core/gestalt_manager.md).

<a id="discussion"></a>

## Discussion

After calling this function, subsequent query or replacement calls for the selector code will fail as if the selector had never been installed. 

In macOS, the selector is on a per-context basis. You cannot use this function to affect another process.

## See Also

### Getting and Setting Gestalt Selector Codes and Values

- [Gestalt](1471624-gestalt.md): Deprecated. Obtains information about the operating environment.
- [NewGestaltValue](1472055-newgestaltvalue.md): Deprecated. Installs a new `Gestalt` selector code and a value that `Gestalt` returns for that selector.
- [SetGestaltValue](1470991-setgestaltvalue.md): Deprecated. Sets the value the function `Gestalt` will return for a specified selector code, installing the selector if it was not already installed.
- [ReplaceGestaltValue](1472000-replacegestaltvalue.md): Deprecated. Replaces the value that the function `Gestalt` returns for a specified selector code with the value provided to the function.
