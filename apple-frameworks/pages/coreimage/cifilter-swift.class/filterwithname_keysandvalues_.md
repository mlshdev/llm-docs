> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreimage/cifilter-swift.class/filterwithname:keysandvalues:](https://developer.apple.com/documentation/coreimage/cifilter-swift.class/filterwithname:keysandvalues:)

# filterWithName:keysAndValues:

**Interface language:** Objective-C

**Framework:** Core Image  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Creates a [CIFilter](../cifilter-swift.class.md) object for a specific kind of filter and initializes the input values with a `nil`-terminated list of arguments.

## Declaration

```objectivec
+ (CIFilter *) filterWithName:(NSString *) name keysAndValues:(id) key0;
```

## Parameters

- `name`: The name of the filter. You must make sure the name is spelled correctly, otherwise your app will run but not produce any output images. For that reason, you should check for the existence of the filter after calling this method.
- `key0`: A list of key-value pairs to set as input values to the filter. Each key is a constant that specifies the name of the input value to set, and must be followed by a value. You signal the end of the list by passing a `nil` value.

<a id="return-value"></a>

## Return Value

A [CIFilter](../cifilter-swift.class.md) object whose input values are initialized.

<a id="Discussion"></a>

## Discussion

As with all Objective-C methods that accept `nil`-terminated argument lists, to prevent unintended behavior you must take take care not to pass a `nil` value before the intended end of the argument list. You can avoid such issues by using the [init(name:withInputParameters:)](init%28name_withinputparameters_%29.md) method to create a filter, expressing the parameter list as a dictionary literal.

## See Also

### Creating a filter

- [filterWithName:](init%28name_%29.md): Creates a [CIFilter](../cifilter-swift.class.md) object for a specific kind of filter.
