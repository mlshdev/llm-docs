> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciplugin/loadplugin:allownonexecutable:](https://developer.apple.com/documentation/coreimage/ciplugin/loadplugin:allownonexecutable:)

# loadPlugIn:allowNonExecutable:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.7)

Loads filters from an image unit that have the appropriate executable status.

> Instead use [loadPlugIn:allowExecutableCode:](load%28__allowexecutablecode_%29.md).

## Declaration

```objectivec
+ (void) loadPlugIn:(NSURL *) url allowNonExecutable:(BOOL) allowNonExecutable;
```

## Parameters

- `url`: The location of the image unit to load.
- `allowNonExecutable`: `TRUE` to load only those filters that are marked by the image unit as non-executable filters.

<a id="Discussion"></a>

## Discussion

You need to call this method only once to load a specific image unit. The behavior of this method is not defined for multiple calls for the same image unit.

## See Also

### Deprecated

- [loadAllPlugIns](loadallplugins%28%29.md): Deprecated. Scans directories for files that have the `.plugin` extension and then loads the image units.
- [loadPlugIn:allowExecutableCode:](load%28__allowexecutablecode_%29.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.
