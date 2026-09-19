> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciplugin/loadnonexecutableplugins()

# loadNonExecutablePlugIns() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Scans directories for plugins.

## Declaration

```swift
class func loadNonExecutablePlugIns()
```

<a id="Discussion"></a>

## Discussion

This call scans for plugins with the extension `.plugin` in the following directories:

- /Library/Graphics/Image Units
- ~Library/Graphics/Image Units

This call adds new plug-ins. It doesn’t remove any plug-ins.

## See Also

### Loading Plug-ins

- [loadNonExecutablePlugIn(\_:)](loadnonexecutableplugin%28__%29.md): Loads a non-executable plug-in specified by its URL.

# loadNonExecutablePlugIns (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.4+

Scans directories for plugins.

## Declaration

```objectivec
+ (void) loadNonExecutablePlugIns;
```

<a id="Discussion"></a>

## Discussion

This call scans for plugins with the extension `.plugin` in the following directories:

- /Library/Graphics/Image Units
- ~Library/Graphics/Image Units

This call adds new plug-ins. It doesn’t remove any plug-ins.

## See Also

### Loading Plug-ins

- [loadNonExecutablePlugIn:](loadnonexecutableplugin%28__%29.md): Loads a non-executable plug-in specified by its URL.
