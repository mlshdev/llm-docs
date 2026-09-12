> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/init(name:)](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/init(name:))

# init(name:) (Swift)

**Framework:** Core Image  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a [CIFilter](../cifilter-swift.class.md) object for a specific kind of filter.

## Declaration

```swift
init?(name: String)
```

## Parameters

- `name`: The name of the filter. You must make sure the name is spelled correctly, otherwise your app will run but not produce any output images. For that reason, you should check for the existence of the filter after calling this method.

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object whose input values are undefined.

<a id="Discussion"></a>

## Discussion

In macOS, after creating a filter with this method you must call [setDefaults()](setdefaults%28%29.md) or set parameters individually by calling [setValue(\_:forKey:)](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md). In iOS, the filter’s parameters are automatically set to default values.

## See Also

### Related Documentation

- [Image Unit Tutorial](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageUnitTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004531)
- [Core Image Filter Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346)
- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)

### Creating a filter

- [init(name:withInputParameters:)](init%28name_withinputparameters_%29.md): Creates a [CIFilter](../cifilter-swift.class.md) object for a specific kind of filter and initializes the input values.

# filterWithName: (Objective-C)

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a [CIFilter](../cifilter-swift.class.md) object for a specific kind of filter.

## Declaration

```objectivec
+ (CIFilter *) filterWithName:(NSString *) name;
```

## Parameters

- `name`: The name of the filter. You must make sure the name is spelled correctly, otherwise your app will run but not produce any output images. For that reason, you should check for the existence of the filter after calling this method.

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object whose input values are undefined.

<a id="Discussion"></a>

## Discussion

In macOS, after creating a filter with this method you must call [setDefaults](setdefaults%28%29.md) or set parameters individually by calling [setValue:forKey:](../../objectivec/nsobject-swift.class/setvalue%28__forkey_%29.md). In iOS, the filter’s parameters are automatically set to default values.

## See Also

### Related Documentation

- [Image Unit Tutorial](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/ImageUnitTutorial/Introduction/Introduction.html#//apple_ref/doc/uid/TP40004531)
- [filterWithName:keysAndValues:](filterwithname_keysandvalues_.md): Creates a [CIFilter](../cifilter-swift.class.md) object for a specific kind of filter and initializes the input values with a `nil`-terminated list of arguments.
- [Core Image Filter Reference](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346)
- [Core Image Programming Guide](https://developer.apple.com/library/archive/documentation/GraphicsImaging/Conceptual/CoreImaging/ci_intro/ci_intro.html#//apple_ref/doc/uid/TP30001185)

### Creating a filter

- [filterWithName:keysAndValues:](filterwithname_keysandvalues_.md): Creates a [CIFilter](../cifilter-swift.class.md) object for a specific kind of filter and initializes the input values with a `nil`-terminated list of arguments.
