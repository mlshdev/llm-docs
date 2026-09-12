> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstoolbar/autosavesconfiguration](https://developer.apple.com/documentation/appkit/nstoolbar/autosavesconfiguration)

# autosavesConfiguration (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar autosaves its configuration.

## Declaration

```swift
var autosavesConfiguration: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar automatically writes any configuration changes to user defaults. It associates the configuration details with the value in its identifier property. If mutliple toolbars share the same identifier, they all share the same configuration settings. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the toolbar doesn’t save changes and reverts to the default configuration when the app relaunches.

The default of this property is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  If you allow people to customize your app’s toolbars, enable this property to save the changes they make. Alternatively, use the [configuration](configuration.md) property and [setConfiguration(\_:)](setconfiguration%28__%29.md) method to manage the autosave process yourself.

## See Also

### Related Documentation

- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.

### Autosaving the configuration

- [configuration](configuration.md): Deprecated. A dictionary containing the current configuration details for the toolbar.
- [setConfiguration(\_:)](setconfiguration%28__%29.md): Deprecated. Specifies the new configuration details for the toolbar.

# autosavesConfiguration (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS

A Boolean value that indicates whether the toolbar autosaves its configuration.

## Declaration

```objectivec
@property BOOL autosavesConfiguration;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the toolbar automatically writes any configuration changes to user defaults. It associates the configuration details with the value in its identifier property. If mutliple toolbars share the same identifier, they all share the same configuration settings. When the value of this property is [false](https://developer.apple.com/documentation/swift/false), the toolbar doesn’t save changes and reverts to the default configuration when the app relaunches.

The default of this property is [false](https://developer.apple.com/documentation/swift/false).

> **Important**

>  If you allow people to customize your app’s toolbars, enable this property to save the changes they make. Alternatively, use the [configurationDictionary](configuration.md) property and [setConfigurationFromDictionary:](setconfiguration%28__%29.md) method to manage the autosave process yourself.

## See Also

### Related Documentation

- [allowsUserCustomization](allowsusercustomization.md): A Boolean value that indicates whether users can modify the contents of the toolbar.

### Autosaving the configuration

- [configurationDictionary](configuration.md): Deprecated. A dictionary containing the current configuration details for the toolbar.
- [setConfigurationFromDictionary:](setconfiguration%28__%29.md): Deprecated. Specifies the new configuration details for the toolbar.
