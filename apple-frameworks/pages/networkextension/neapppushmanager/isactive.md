> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushmanager/isactive](https://developer.apple.com/documentation/networkextension/neapppushmanager/isactive)

# isActive (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that indicates whether a configuration is in use.

## Declaration

```swift
var isActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use key-value observing to watch for changes in this property.

## See Also

### Inspecting manager properties

- [isEnabled](isenabled.md): A property you use to toggle enabling the configuration.
- [localizedDescription](localizeddescription.md): A string that contains the localized description of the app push manager.

# active (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A Boolean value that indicates whether a configuration is in use.

## Declaration

```objectivec
@property (readonly, getter=isActive) BOOL active;
```

<a id="Discussion"></a>

## Discussion

Use key-value observing to watch for changes in this property.

## See Also

### Inspecting manager properties

- [enabled](isenabled.md): A property you use to toggle enabling the configuration.
- [localizedDescription](localizeddescription.md): A string that contains the localized description of the app push manager.
