> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/setconfiguration(_:)](https://developer.apple.com/documentation/appkit/nstoolbar/setconfiguration(_:))

# setConfiguration(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 15.0)

Specifies the new configuration details for the toolbar.

> Use -setItemIdentifiers: and -setDisplayMode: instead.

## Declaration

```swift
func setConfiguration(_ configDict: [String : Any])
```

## Parameters

- `configDict`: A dictionary with the toolbar configuration details. The toolbar ignores any keys it doesn’t recognize. Typically, you save the original configuration dictionary from the [configuration](configuration.md) property to disk and recreate it before passing it in this parameter.

<a id="Discussion"></a>

## Discussion

If you implement your own autosave mechanism, call this method to restore the configuration of your toolbar to a previously saved state. The dictionary you read from disk must match the format of the dictionary in the [configuration](configuration.md) property.

## See Also

### Autosaving the configuration

- [autosavesConfiguration](autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.
- [configuration](configuration.md): Deprecated. A dictionary containing the current configuration details for the toolbar.

# setConfigurationFromDictionary: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 15.0)

Specifies the new configuration details for the toolbar.

> Use -setItemIdentifiers: and -setDisplayMode: instead.

## Declaration

```objectivec
- (void) setConfigurationFromDictionary:(NSDictionary<NSString *,id> *) configDict;
```

## Parameters

- `configDict`: A dictionary with the toolbar configuration details. The toolbar ignores any keys it doesn’t recognize. Typically, you save the original configuration dictionary from the [configurationDictionary](configuration.md) property to disk and recreate it before passing it in this parameter.

<a id="Discussion"></a>

## Discussion

If you implement your own autosave mechanism, call this method to restore the configuration of your toolbar to a previously saved state. The dictionary you read from disk must match the format of the dictionary in the [configurationDictionary](configuration.md) property.

## See Also

### Autosaving the configuration

- [autosavesConfiguration](autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.
- [configurationDictionary](configuration.md): Deprecated. A dictionary containing the current configuration details for the toolbar.
