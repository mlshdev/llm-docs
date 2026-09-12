> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciplugin/loadallplugins()](https://developer.apple.com/documentation/coreimage/ciplugin/loadallplugins())

# loadAllPlugIns() (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Scans directories for files that have the `.plugin` extension and then loads the image units.

## Declaration

```swift
class func loadAllPlugIns()
```

<a id="Discussion"></a>

## Discussion

This method scans the following directories:

- `/Library/Graphics/Image Units`
- ~`/Library/Graphics/Image Units`

Call this method once. If you call this method more than once, Core Image loads newly added image units, but image units (and the filters they contain) that are already loaded are not removed.

## See Also

### Related Documentation

- [Image Unit Tutorial](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageUnitTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004531)
- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)

### Deprecated

- [load(\_:allowExecutableCode:)](load%28__allowexecutablecode_%29.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.

# loadAllPlugIns (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Scans directories for files that have the `.plugin` extension and then loads the image units.

## Declaration

```objectivec
+ (void) loadAllPlugIns;
```

<a id="Discussion"></a>

## Discussion

This method scans the following directories:

- `/Library/Graphics/Image Units`
- ~`/Library/Graphics/Image Units`

Call this method once. If you call this method more than once, Core Image loads newly added image units, but image units (and the filters they contain) that are already loaded are not removed.

## See Also

### Related Documentation

- [Image Unit Tutorial](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageUnitTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004531)
- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)

### Deprecated

- [loadPlugIn:allowExecutableCode:](load%28__allowexecutablecode_%29.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.
- [loadPlugIn:allowNonExecutable:](loadplugin_allownonexecutable_.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.
