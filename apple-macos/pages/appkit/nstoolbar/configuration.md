> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/configuration](https://developer.apple.com/documentation/appkit/nstoolbar/configuration)

# configuration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 15.0)

A dictionary containing the current configuration details for the toolbar.

> Use -itemIdentifiers and -displayMode instead.

## Declaration

```swift
var configuration: [String : Any] { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the toolbar’s configuration details so you can save them to disk yourself. The dictionary in this property contains the identifiers of the current toolbar items and the values of important properties such as [displayMode](displaymode-swift.property.md) and [isVisible](isvisible.md).

## See Also

### Autosaving the configuration

- [autosavesConfiguration](autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.
- [setConfiguration(\_:)](setconfiguration%28__%29.md): Deprecated. Specifies the new configuration details for the toolbar.

# configurationDictionary (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 15.0)

A dictionary containing the current configuration details for the toolbar.

> Use -itemIdentifiers and -displayMode instead.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,id> * configurationDictionary;
```

<a id="Discussion"></a>

## Discussion

Use this property to retrieve the toolbar’s configuration details so you can save them to disk yourself. The dictionary in this property contains the identifiers of the current toolbar items and the values of important properties such as [displayMode](displaymode-swift.property.md) and [visible](isvisible.md).

## See Also

### Autosaving the configuration

- [autosavesConfiguration](autosavesconfiguration.md): A Boolean value that indicates whether the toolbar autosaves its configuration.
- [setConfigurationFromDictionary:](setconfiguration%28__%29.md): Deprecated. Specifies the new configuration details for the toolbar.
