> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/ciplugin/load(_:allowexecutablecode:)](https://developer.apple.com/documentation/coreimage/ciplugin/load(_:allowexecutablecode:))

# load(\_:allowExecutableCode:) (Swift)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.7+ (deprecated in 10.15)

Loads filters from an image unit that have the appropriate executable status.

## Declaration

```swift
class func load(_ url: URL!, allowExecutableCode: Bool)
```

## Parameters

- `url`: The location of the image unit to load.
- `allowExecutableCode`: `true` to load all filters from the image unit, or `false` to load only those filters without CPU executable code.

<a id="Discussion"></a>

## Discussion

You need to call this method only once to load a specific image unit. The behavior of this method is not defined for multiple calls for the same image unit. If you pass `false` for the `allowExecutableCode` parameter, Core Image will load only pure kernel filters that run entirely on the GPU, ignoring filters implemented using compiled Objective-C code.

## See Also

### Deprecated

- [loadAllPlugIns()](loadallplugins%28%29.md): Deprecated. Scans directories for files that have the `.plugin` extension and then loads the image units.

# loadPlugIn:allowExecutableCode: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** macOS 10.7+ (deprecated in 10.15)

Loads filters from an image unit that have the appropriate executable status.

## Declaration

```objectivec
+ (void) loadPlugIn:(NSURL *) url allowExecutableCode:(BOOL) allowExecutableCode;
```

## Parameters

- `url`: The location of the image unit to load.
- `allowExecutableCode`: `true` to load all filters from the image unit, or `false` to load only those filters without CPU executable code.

<a id="Discussion"></a>

## Discussion

You need to call this method only once to load a specific image unit. The behavior of this method is not defined for multiple calls for the same image unit. If you pass `false` for the `allowExecutableCode` parameter, Core Image will load only pure kernel filters that run entirely on the GPU, ignoring filters implemented using compiled Objective-C code.

## See Also

### Deprecated

- [loadAllPlugIns](loadallplugins%28%29.md): Deprecated. Scans directories for files that have the `.plugin` extension and then loads the image units.
- [loadPlugIn:allowNonExecutable:](loadplugin_allownonexecutable_.md): Deprecated. Loads filters from an image unit that have the appropriate executable status.
