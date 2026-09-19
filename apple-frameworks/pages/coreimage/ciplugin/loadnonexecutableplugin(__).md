> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreimage/ciplugin/loadnonexecutableplugin(_:)

# loadNonExecutablePlugIn(\_:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Loads a non-executable plug-in specified by its URL.

## Declaration

```swift
class func loadNonExecutablePlugIn(_ url: URL!)
```

## Parameters

- `url`: The location of the plugin to load.

<a id="Discussion"></a>

## Discussion

If the filters contain executable code the plugin isn’t loaded.

## See Also

### Loading Plug-ins

- [loadNonExecutablePlugIns()](loadnonexecutableplugins%28%29.md): Scans directories for plugins.

# loadNonExecutablePlugIn: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Loads a non-executable plug-in specified by its URL.

## Declaration

```objectivec
+ (void) loadNonExecutablePlugIn:(NSURL *) url;
```

## Parameters

- `url`: The location of the plugin to load.

<a id="Discussion"></a>

## Discussion

If the filters contain executable code the plugin isn’t loaded.

## See Also

### Loading Plug-ins

- [loadNonExecutablePlugIns](loadnonexecutableplugins%28%29.md): Scans directories for plugins.
